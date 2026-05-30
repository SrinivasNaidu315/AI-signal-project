const mongoose = require("mongoose")

const collegeSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true,
  },

  location: {
    type: String,
    required: true,
  },

  rating: {
    type: String,
  },

  fees: {
    type: String,
  },

  image: {
    type: String,
  },

  placement: {
    type: String,
  },

})

module.exports = mongoose.model("College", collegeSchema)