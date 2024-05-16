const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  title: { type: String, required: true },
  skillNames: [{ type: String }],
  position: { type: Number },
});

module.exports = mongoose.model('mySkills', skillSchema);
