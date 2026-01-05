const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const { body } = require('express-validator');

// Validation middleware
const validateRegister = [
  body('name').notEmpty().withMessage('Name is required').trim(),
  body('email').isEmail().withMessage('Please provide a valid email').normalizeEmail(),
  body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters'),
  body('confirmPassword').custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error('Passwords do not match');
    }
    return true;
  })
];

const validateLogin = [
  body('email').isEmail().withMessage('Please provide a valid email').normalizeEmail(),
  body('password').notEmpty().withMessage('Password is required')
];

// Auth routes
router.post('/register', validateRegister, authController.register);
router.post('/login', validateLogin, authController.login);
router.post('/logout', authController.logout);
router.post('/refresh-token', authController.refreshToken);
router.get('/me', authController.getMe);

module.exports = router;