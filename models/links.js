const mongoose = require('mongoose');

const linksSchema = new mongoose.Schema({
  link: { type: String, required: true },
  icon: { type: String },
  position: { type: Number },
});

module.exports = mongoose.model('myLinks', linksSchema);
