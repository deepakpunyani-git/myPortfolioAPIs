const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String },
  phone: { type: String },
  message: { type: String },
  date_created: { type: Date, default: Date.now },
  ip: { type: String, required: true }
});

module.exports = mongoose.model('myContact', contactSchema);
