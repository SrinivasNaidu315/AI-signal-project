const express = require("express")

const router = express.Router()

const {
  saveCollege,
  getSavedColleges,
} = require("../controllers/savedCollegeController")

router.post("/", saveCollege)

router.get("/", getSavedColleges)

module.exports = router