const User = require('../models/User.model');
const jwt = require('jsonwebtoken');

// Generate JWT token
const generateToken = (userId) => {
  return jwt.sign(
    { id: userId },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRE }
  );
};

// Register new user
exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        status: 'error',
        message: 'User already exists with this email'
      });
    }

    // Create user
    const user = await User.create({
      name,
      email,
      password
    });

    // Generate token
    const token = generateToken(user._id);

    // Remove password from response
    user.password = undefined;

    res.status(201).json({
      status: 'success',
      message: 'Registration successful',
      data: {
        user,
        token
      }
    });

  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Registration failed'
    });
  }
};

// Login user
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user
    const user = await User.findOne({ email }).select('+password');
    if (!user) {
      return res.status(401).json({
        status: 'error',
        message: 'Invalid credentials'
      });
    }

    // Check password
    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({
        status: 'error',
        message: 'Invalid credentials'
      });
    }

    // Update last login
    user.lastLogin = new Date();
    await user.save();

    // Generate token
    const token = generateToken(user._id);

    // Remove password from response
    user.password = undefined;

    res.status(200).json({
      status: 'success',
      message: 'Login successful',
      data: {
        user,
        token
      }
    });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Login failed'
    });
  }
};

// Get current user
exports.getMe = async (req, res) => {
  try {
    // Get token from header
    const token = req.headers.authorization?.split(' ')[1];
    
    if (!token) {
      return res.status(401).json({
        status: 'error',
        message: 'Not authenticated'
      });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Get user
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(401).json({
        status: 'error',
        message: 'User not found'
      });
    }

    res.status(200).json({
      status: 'success',
      data: user
    });

  } catch (error) {
    console.error('Get me error:', error);
    res.status(401).json({
      status: 'error',
      message: 'Not authenticated'
    });
  }
};

// Logout user
exports.logout = (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Logged out successfully'
  });
};

// Refresh token
exports.refreshToken = (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Token refreshed (implementation pending)'
  });
};