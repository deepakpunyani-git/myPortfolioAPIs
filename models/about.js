const mongoose = require('mongoose');

const aboutSchema = new mongoose.Schema({
  image: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  details: { type: String }
});

module.exports = mongoose.model('myAbout', aboutSchema);
