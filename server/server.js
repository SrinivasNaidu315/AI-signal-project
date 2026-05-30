const express = require("express")
const cors = require("cors")
require("dotenv").config()

const connectDB = require("./config/db")
const collegeRoutes = require("./routes/collegeRoutes")
const savedCollegeRoutes =
require("./routes/savedCollegeRoutes")

const app = express()

connectDB()

app.use(cors())
app.use(express.json())
app.use("/api/colleges", collegeRoutes)
app.use(
  "/api/saved-colleges",
  savedCollegeRoutes
)

app.get("/", (req, res) => {
  res.send("Backend Running 🚀")
})

const PORT = 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})