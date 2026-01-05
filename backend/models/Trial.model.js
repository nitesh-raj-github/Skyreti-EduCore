const mongoose = require('mongoose');

const TrialSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      lowercase: true
    },
    organization: {
      type: String,
      required: true
    },
    message: {
      type: String,
      default: ''
    },
    status: {
      type: String,
      enum: ['new', 'contacted', 'converted'],
      default: 'new'
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Trial', TrialSchema);
