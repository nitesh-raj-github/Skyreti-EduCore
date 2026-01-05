const express = require('express');
const { body, validationResult } = require('express-validator');
const Trial = require('../models/Trial.model');
const { sendTrialEmail, sendConfirmationEmail } = require('../utils/sendEmail');

const router = express.Router();

// Validation middleware
const validateTrialRequest = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().normalizeEmail().withMessage('Valid email is required'),
  body('organization').trim().notEmpty().withMessage('Organization name is required'),
  body('message').optional().trim()
];

// Submit trial request
router.post('/request', validateTrialRequest, async (req, res) => {
  try {
    // Check validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        status: 'error',
        errors: errors.array(),
        message: 'Validation failed'
      });
    }

    const { name, email, organization, message } = req.body;

    // Check if trial already exists for this email
    const existingTrial = await Trial.findOne({ email, organization });
    if (existingTrial) {
      return res.status(409).json({
        status: 'error',
        message: 'A trial request already exists for this email and organization'
      });
    }

    // Create new trial request
    const trial = new Trial({
      name,
      email: email.toLowerCase(),
      organization,
      message: message || '',
      status: 'new'
    });

    await trial.save();

    // Send emails (fire and forget - don't block response)
    const emailPromises = [
      sendTrialEmail(trial.toObject()),
      sendConfirmationEmail(trial.toObject())
    ];

    // Run emails in background
    Promise.allSettled(emailPromises)
      .then(results => {
        console.log('📧 Email sending results:', results);
      })
      .catch(err => {
        console.error('📧 Email sending error:', err);
      });

    // Emit real-time notification via Socket.IO
    if (req.io) {
      req.io.emit('new_trial_request', {
        id: trial._id,
        name,
        organization,
        email,
        createdAt: trial.createdAt
      });
    }

    // Respond immediately
    res.status(201).json({
      status: 'success',
      message: 'Trial request submitted successfully',
      data: {
        id: trial._id,
        name,
        organization,
        email,
        referenceId: `TRIAL-${trial._id.toString().slice(-6).toUpperCase()}`,
        status: trial.status,
        createdAt: trial.createdAt
      }
    });

  } catch (error) {
    console.error('🔥 Trial request error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to submit trial request',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// Get all trial requests (for admin)
router.get('/', async (req, res) => {
  try {
    const trials = await Trial.find().sort({ createdAt: -1 });
    
    res.json({
      status: 'success',
      count: trials.length,
      data: trials
    });
  } catch (error) {
    console.error('🔥 Error fetching trials:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to fetch trial requests'
    });
  }
});

// Get single trial request
router.get('/:id', async (req, res) => {
  try {
    const trial = await Trial.findById(req.params.id);
    
    if (!trial) {
      return res.status(404).json({
        status: 'error',
        message: 'Trial request not found'
      });
    }

    res.json({
      status: 'success',
      data: trial
    });
  } catch (error) {
    console.error('🔥 Error fetching trial:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to fetch trial request'
    });
  }
});

// Update trial status (for admin)
router.patch('/:id/status', async (req, res) => {
  try {
    const { status } = req.body;
    
    if (!['new', 'contacted', 'converted'].includes(status)) {
      return res.status(400).json({
        status: 'error',
        message: 'Invalid status value'
      });
    }

    const trial = await Trial.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    );

    if (!trial) {
      return res.status(404).json({
        status: 'error',
        message: 'Trial request not found'
      });
    }

    // Emit status update via Socket.IO
    if (req.io) {
      req.io.emit('trial_status_updated', {
        id: trial._id,
        status: trial.status,
        updatedAt: trial.updatedAt
      });
    }

    res.json({
      status: 'success',
      message: 'Trial status updated successfully',
      data: trial
    });
  } catch (error) {
    console.error('🔥 Error updating trial status:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to update trial status'
    });
  }
});

// Test endpoint
router.get('/test/connection', async (req, res) => {
  try {
    // Test database connection
    const dbStatus = await Trial.db.db.admin().ping();
    
    res.json({
      status: 'success',
      message: 'Trial API is working correctly',
      services: {
        database: dbStatus.ok === 1 ? 'connected' : 'disconnected',
        socket: req.io ? 'available' : 'unavailable',
        timestamp: new Date().toISOString()
      }
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Service check failed',
      error: error.message
    });
  }
});

module.exports = router;