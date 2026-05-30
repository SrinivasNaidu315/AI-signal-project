const SavedCollege = require("../models/SavedCollege")

const saveCollege = async (req, res) => {

  try {

    const savedCollege =
      await SavedCollege.create(req.body)

    res.status(201).json(savedCollege)

  } catch (error) {

    res.status(500).json({
      message: error.message,
    })
  }
}

const getSavedColleges = async (req, res) => {

  try {

    const colleges =
      await SavedCollege.find()

    res.json(colleges)

  } catch (error) {

    res.status(500).json({
      message: error.message,
    })
  }
}

module.exports = {
  saveCollege,
  getSavedColleges,
}