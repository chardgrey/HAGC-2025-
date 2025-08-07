const mongoose = require('mongoose');

const rescueReportSchema = new mongoose.Schema({
  reporter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: false // optional for anonymous
  },

  description: {
    type: String,
    required: true
  },

  image: {
    type: String // Image URL (optional)
  },

  location: {
    type: String,
    required: true
  },

  status: {
    type: String,
    enum: ['Pending', 'In Progress', 'Resolved'],
    default: 'Pending'
  },

  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: false
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('RescueReport', rescueReportSchema);
