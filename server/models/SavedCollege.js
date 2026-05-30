const mongoose = require("mongoose")

const savedCollegeSchema = new mongoose.Schema({

  name: String,
  location: String,
  rating: String,
  fees: String,
  image: String,

})

module.exports = mongoose.model(
  "SavedCollege",
  savedCollegeSchema
)