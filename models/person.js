// models/person.js

const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  }
});

const Person = mongoose.model('Person', personSchema);

module.exports = Person;
