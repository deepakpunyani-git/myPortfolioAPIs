const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
    company: { type: String, required: true },
    roles: [{
      title: { type: String, required: true },
      details: { type: String },
      monthAndYear: { type: String },
      position: { type: Number },
    }],
    position: { type: Number },
  });
  

module.exports = mongoose.model('myExperience', experienceSchema);
