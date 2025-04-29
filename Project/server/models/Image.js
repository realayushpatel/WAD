const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  imageUrl: { type: String, required: true },
  title: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Image', ImageSchema);
