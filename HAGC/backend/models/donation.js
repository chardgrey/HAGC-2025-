const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
  // Optional donor
  donorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: function () {
      return !this.isAnonymous;
    }
  },

  // New field to indicate anonymity
  isAnonymous: {
    type: Boolean,
    default: false
  },

  type: {
    type: String,
    enum: ['cash', 'goods'],
    required: true
  },

  // Cash donations
  amount: {
    type: Number,
    required: function () {
      return this.type === 'cash';
    }
  },
  method: {
    type: String,
    enum: ['gcash', 'paypal', 'bank', 'cash', 'other'],
    required: function () {
      return this.type === 'cash';
    }
  },

  // Goods donations
  items: [
    {
      name: { type: String, required: true },
      quantity: { type: Number, default: 1 },
      description: String
    }
  ],

  message: String,

  status: {
    type: String,
    enum: ['pending', 'verified'],
    default: 'pending'
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Donation', donationSchema);
