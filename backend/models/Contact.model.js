const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: [100, 'Name cannot exceed 100 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    lowercase: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email']
  },
  phone: {
    type: String,
    validate: {
      validator: function(v) {
        return /^[\+]?[1-9][\d]{0,15}$/.test(v);
      },
      message: 'Please provide a valid phone number'
    }
  },
  organization: {
    type: String,
    required: [true, 'Organization is required'],
    trim: true
  },
  country: {
    type: String,
    required: [true, 'Country is required'],
    trim: true
  },
  interest: {
    type: String,
    required: [true, 'Interest is required'],
    enum: ['school', 'college', 'library', 'hr', 'analytics', 'cloud', 'multiple', 'other'],
    default: 'school'
  },
  message: {
    type: String,
    maxlength: [1000, 'Message cannot exceed 1000 characters']
  },
  status: {
    type: String,
    enum: ['pending', 'contacted', 'demo_scheduled', 'converted', 'rejected'],
    default: 'pending'
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high'],
    default: 'medium'
  },
  source: {
    type: String,
    default: 'website'
  },
  ipAddress: String,
  userAgent: String,
  pageUrl: String,
  referrer: String
}, {
  timestamps: true
});

// Create indexes for better performance
contactSchema.index({ email: 1 });
contactSchema.index({ status: 1 });
contactSchema.index({ createdAt: -1 });

// Pre-save middleware to set priority
contactSchema.pre('save', function(next) {
  // Set high priority for multiple interests or enterprise-level solutions
  if (['multiple', 'school', 'college'].includes(this.interest)) {
    this.priority = 'high';
  }
  next();
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;