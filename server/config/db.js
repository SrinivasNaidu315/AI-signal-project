const mongoose = require("mongoose")

const connectDB = async () => {

  console.log("Trying MongoDB Connection...")

  try {

    const conn = await mongoose.connect(process.env.MONGO_URI)

    console.log(`MongoDB Connected: ${conn.connection.host}`)

  } catch (error) {

    console.log("MongoDB Error:")
    console.log(error.message)

    process.exit(1)
  }
}

module.exports = connectDB