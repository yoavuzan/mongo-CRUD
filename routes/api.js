const express = require('express');
const asyncHandler = require('express-async-handler');
const {
  createPerson,
  getAllPeople,
  getPersonById,
  updatePerson,
  deletePerson,
} = require('../controllers/personController');

const router = express.Router();

// --- Person Routes ---
router.route('/person').post(asyncHandler(createPerson));

router.route('/people').get(asyncHandler(getAllPeople));

router.route('/person/:id')
  .get(asyncHandler(getPersonById))
  .put(asyncHandler(updatePerson))
  .delete(asyncHandler(deletePerson));


// @route   GET /
// @desc    Welcome message
router.get("/", (req, res) => {
  res.send("MongoDB connected with VS Code!");
});

module.exports = router;
