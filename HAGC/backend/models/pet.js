const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: String },
  breed: { type: String },
  description: { type: String },
  status: { type: String, enum: ['available', 'adopted', 'pending', 'rescued'], default: 'available' },
  images: [String]
}, { timestamps: true });

module.exports = mongoose.model('Pet', petSchema);
