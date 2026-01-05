const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contact.controller');
const { body } = require('express-validator');

// Validation middleware
const validateContact = [
  body('name').notEmpty().withMessage('Name is required').trim(),
  body('email').isEmail().withMessage('Please provide a valid email').normalizeEmail(),
  body('phone').optional().isMobilePhone().withMessage('Please provide a valid phone number'),
  body('organization').notEmpty().withMessage('Organization is required').trim(),
  body('country').notEmpty().withMessage('Country is required').trim(),
  body('interest').notEmpty().withMessage('Interest is required'),
  body('message').optional().trim()
];

// Contact routes
router.post('/', validateContact, contactController.createContact);
router.get('/', contactController.getAllContacts);
router.get('/stats', contactController.getContactStats);
router.get('/:id', contactController.getContactById);
router.put('/:id', contactController.updateContact);
router.delete('/:id', contactController.deleteContact);

module.exports = router;