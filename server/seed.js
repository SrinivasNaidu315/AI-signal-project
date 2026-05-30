const mongoose = require("mongoose")
require("dotenv").config()

const College = require("./models/College")

mongoose.connect(process.env.MONGO_URI)

const colleges = [

  {
    name: "IIT Hyderabad",
    location: "Hyderabad",
    rating: "4.8",
    fees: "₹2.2 Lakhs",
    placement: "95%",
    image: "https://images.unsplash.com/photo-1562774053-701939374585",
  },

  {
    name: "NIT Trichy",
    location: "Tamil Nadu",
    rating: "4.7",
    fees: "₹1.8 Lakhs",
    placement: "93%",
    image:"https://digitallearning.eletsonline.com/wp-content/uploads/2013/06/NIT-Trichy.jpg",
  },

  {
    name: "VIT Vellore",
    location: "Vellore",
    rating: "4.5",
    fees: "₹1.9 Lakhs",
    placement: "90%",
    image:"https://ik.imagekit.io/syustaging/SYU_PREPROD/Vellore-Institute-of-Technology---_VIT-University_-_Vellore-_Tamil-Nadu_5UGuGGGzDd.webp?tr=w-3840",
  },

]

const seedData = async () => {

  try {

    await College.deleteMany()

    await College.insertMany(colleges)

    console.log("College Data Inserted 🚀")

    process.exit()

  } catch (error) {

    console.log(error)

    process.exit(1)
  }
}

seedData()