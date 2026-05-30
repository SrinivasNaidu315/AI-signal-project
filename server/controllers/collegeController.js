const College = require("../models/College")

const getColleges = async (req, res) => {

  try {

    const colleges = await College.find()

    res.json(colleges)

  } catch (error) {

    res.status(500).json({
      message: error.message,
    })
  }
}

module.exports = {
  getColleges,
}