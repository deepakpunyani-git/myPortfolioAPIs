const mongoose = require('mongoose');

const awardSchema = new mongoose.Schema({
  title: { type: String, required: true },
  organization: { type: String, required: true },
  link: { type: String }
});

module.exports = mongoose.model('Awards', awardSchema);
