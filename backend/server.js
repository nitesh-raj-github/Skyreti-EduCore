// ====================== ENVIRONMENT & IMPORTS ======================
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const morgan = require('morgan');
const { createServer } = require('http');
const { Server } = require('socket.io');
const path = require('path');
const fs = require('fs');

// ====================== INITIALIZE APP ======================
const app = express();
const httpServer = createServer(app);

// ====================== UPLOADS DIRECTORY ======================
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// ====================== RATE LIMITING ======================
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    status: 'error',
    message: 'Too many requests from this IP, please try again after 15 minutes'
  }
});

// ====================== MIDDLEWARE ======================
// Security headers
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", "data:", "https:"]
    }
  }
}));

// CORS configuration
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
}));

// Body parsing
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Logging
app.use(morgan('dev'));

// Apply rate limiting to API routes
app.use('/api', limiter);

// Static files
app.use('/uploads', express.static(uploadsDir));

// ====================== DATABASE CONNECTION ======================
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/skyreti_educore';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
})
.then(() => {
  console.log('✅ MongoDB Connected Successfully');
  console.log(`📊 Database: ${mongoose.connection.name}`);
  console.log(`🌐 Host: ${mongoose.connection.host}`);
})
.catch(err => {
  console.error('❌ MongoDB Connection Error:', err.message);
  console.log('⚠️  Server will continue without database connection');
});

// ====================== SOCKET.IO SETUP ======================
const io = new Server(httpServer, {
  cors: {
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    methods: ['GET', 'POST'],
    credentials: true
  },
  transports: ['websocket', 'polling'],
  pingTimeout: 60000,
  pingInterval: 25000
});

// Socket.IO Connection Handling
io.on('connection', (socket) => {
  console.log('🔌 New client connected:', socket.id);

  // Welcome message
  socket.emit('welcome', {
    status: 'connected',
    message: 'Welcome to SkyReti Educore Realtime Server',
    serverTime: new Date().toISOString(),
    connectionId: socket.id
  });

  // Join specific rooms
  socket.on('join_room', (room) => {
    socket.join(room);
    console.log(`👥 Client ${socket.id} joined room: ${room}`);
    socket.emit('room_joined', { room, status: 'success' });
  });

  // Leave room
  socket.on('leave_room', (room) => {
    socket.leave(room);
    console.log(`👋 Client ${socket.id} left room: ${room}`);
    socket.emit('room_left', { room, status: 'success' });
  });

  // Handle disconnection
  socket.on('disconnect', (reason) => {
    console.log(`🔌 Client disconnected: ${socket.id} (${reason})`);
  });

  // Error handling
  socket.on('error', (error) => {
    console.error('🔥 Socket Error:', error);
  });
});

// Make io available globally
app.set('io', io);

// ====================== ROUTES MIDDLEWARE ======================
// Add socket.io instance to request object
app.use((req, res, next) => {
  req.io = io;
  next();
});

// ====================== HEALTH CHECK ======================
app.get('/api/health', (req, res) => {
  const healthStatus = {
    status: 'success',
    message: 'SkyReti Educore API is running smoothly',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'development',
    services: {
      database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
      socket: io.engine.clientsCount > 0 ? 'active' : 'idle',
      memory: process.memoryUsage(),
    },
    version: '1.0.0'
  };
  res.status(200).json(healthStatus);
});

// ====================== API ROUTES ======================
// Import routes
const trialRoutes = require('./routes/trial.routes');
const feedbackRoutes = require('./routes/feedback.routes');

// Use routes
app.use('/api/trial', trialRoutes);
app.use('/api/feedback', feedbackRoutes);

// ====================== ROOT ENDPOINT ======================
app.get('/', (req, res) => {
  res.json({
    status: 'success',
    message: '🚀 SkyReti Educore Backend API',
    version: '1.0.0',
    documentation: 'API documentation available at /api/docs (coming soon)',
    endpoints: {
      health: '/api/health',
      trial: '/api/trial',
      feedback: '/api/feedback',
      uploads: '/uploads',
    },
    realtime: {
      enabled: true,
      clients: io.engine.clientsCount
    }
  });
});

// ====================== API DOCUMENTATION (Swagger - Coming Soon) ======================
app.get('/api/docs', (req, res) => {
  res.json({
    status: 'success',
    message: 'API Documentation',
    endpoints: [
      {
        method: 'GET',
        path: '/api/health',
        description: 'Health check endpoint'
      },
      {
        method: 'POST',
        path: '/api/trial/request',
        description: 'Submit a trial request',
        body: {
          name: 'string (required)',
          email: 'string (required, email format)',
          organization: 'string (required)',
          message: 'string (optional)'
        }
      },
      {
        method: 'GET',
        path: '/api/trial',
        description: 'Get all trial requests (Admin)'
      },
      {
        method: 'POST',
        path: '/api/feedback',
        description: 'Submit feedback'
      }
    ]
  });
});

// ====================== ERROR HANDLING ======================

// 404 - Route not found
app.use('*', (req, res) => {
  res.status(404).json({
    status: 'error',
    message: `Route ${req.originalUrl} not found`,
    suggestion: 'Check the API documentation at /api/docs'
  });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('🔥 Server Error:', {
    message: err.message,
    stack: err.stack,
    url: req.originalUrl,
    method: req.method,
    ip: req.ip,
    timestamp: new Date().toISOString()
  });

  // Handle Mongoose validation errors
  if (err.name === 'ValidationError') {
    return res.status(400).json({
      status: 'error',
      message: 'Validation Error',
      errors: Object.values(err.errors).map(e => e.message)
    });
  }

  // Handle Mongoose duplicate key errors
  if (err.code === 11000) {
    return res.status(400).json({
      status: 'error',
      message: 'Duplicate key error',
      field: Object.keys(err.keyPattern)[0]
    });
  }

  // Handle JWT errors
  if (err.name === 'JsonWebTokenError') {
    return res.status(401).json({
      status: 'error',
      message: 'Invalid token'
    });
  }

  // Default error response
  res.status(err.status || 500).json({
    status: 'error',
    message: err.message || 'Internal Server Error',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
});

// ====================== SERVER START ======================
const PORT = process.env.PORT || 5000;

httpServer.listen(PORT, () => {
  console.log('\n' + '='.repeat(50));
  console.log('🚀 SKYRETI EDUCORE BACKEND SERVER');
  console.log('='.repeat(50));
  console.log(`📡 Server URL: http://localhost:${PORT}`);
  console.log(`🌐 Frontend URL: ${process.env.FRONTEND_URL || 'http://localhost:3000'}`);
  console.log(`🏥 Health Check: http://localhost:${PORT}/api/health`);
  console.log(`📊 Database: ${mongoose.connection.readyState === 1 ? '✅ Connected' : '❌ Disconnected'}`);
  console.log(`🔌 Socket.IO: ✅ Enabled (${io.engine.clientsCount} clients)`);
  console.log(`⚡ Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`⏰ Started at: ${new Date().toLocaleString()}`);
  console.log('='.repeat(50) + '\n');
  
  // Test email configuration
  if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
    console.log('📧 Email service: ✅ Configured');
  } else {
    console.log('📧 Email service: ⚠️  Not configured - set EMAIL_USER and EMAIL_PASS in .env');
  }
});

// ====================== GRACEFUL SHUTDOWN ======================
process.on('SIGTERM', () => {
  console.log('🛑 SIGTERM received. Shutting down gracefully...');
  
  // Close HTTP server
  httpServer.close(() => {
    console.log('✅ HTTP server closed');
    
    // Close MongoDB connection
    mongoose.connection.close(false, () => {
      console.log('✅ MongoDB connection closed');
      process.exit(0);
    });
  });
});

process.on('SIGINT', () => {
  console.log('🛑 SIGINT received. Shutting down...');
  
  httpServer.close(() => {
    mongoose.connection.close(false, () => {
      console.log('✅ Shutdown complete');
      process.exit(0);
    });
  });
});

// ====================== UNHANDLED REJECTIONS ======================
process.on('unhandledRejection', (reason, promise) => {
  console.error('🔥 Unhandled Rejection at:', promise, 'reason:', reason);
});

process.on('uncaughtException', (error) => {
  console.error('🔥 Uncaught Exception:', error);
  process.exit(1);
});

// ====================== EXPORTS ======================
module.exports = { app, io, httpServer };