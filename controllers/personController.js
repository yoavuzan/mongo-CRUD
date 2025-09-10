const Person = require('../models/person');

// @desc    Create a person
const createPerson = async (req, res) => {
  const { firstname, lastname, age } = req.body;
  const newPerson = new Person({ firstname, lastname, age });
  await newPerson.save();
  res.status(201).send(newPerson);
};

// @desc    Get all people
const getAllPeople = async (req, res) => {
  const people = await Person.find();
  res.status(200).send(people);
};

// @desc    Get a person by ID
const getPersonById = async (req, res) => {
  const person = await Person.findById(req.params.id);
  if (!person) {
    res.status(404);
    throw new Error('Person not found');
  }
  res.status(200).send(person);
};

// @desc    Update a person by ID
const updatePerson = async (req, res) => {
  const person = await Person.findByIdAndUpdate(req.params.id, req.body);
  if (!person) {
    res.status(404);
    throw new Error('Person not found');
  }
  res.status(200).send(person);
};

// @desc    Delete a person by ID
const deletePerson = async (req, res) => {
  const person = await Person.findByIdAndDelete(req.params.id);
  if (!person) {
    res.status(404);
    throw new Error('Person not found');
  }
  res.status(200).send({ message: "Person deleted" });
};

module.exports = {
  createPerson,
  getAllPeople,
  getPersonById,
  updatePerson,
  deletePerson,
};
