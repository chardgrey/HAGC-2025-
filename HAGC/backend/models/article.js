const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String },
  tags: [String],
  publishedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Article', articleSchema);
