const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
  title: { type: String, required: true },
  college: { type: String, required: true },
  monthAndYear: { type: String },
  percentage: { type: Number },
  position: { type: Number },
});

module.exports = mongoose.model('myEducation', educationSchema);
