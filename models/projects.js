const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  link: { type: String },
  details: { type: String },
  position: { type: Number },
});

module.exports = mongoose.model('myProjects', projectSchema);
