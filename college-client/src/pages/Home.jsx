import { useEffect, useState } from "react"
import axios from "axios"

import Navbar from "../components/Navbar"
import CollegeCard from "../components/CollegeCard"

import { Link } from "react-router-dom"

function Home() {

  const [colleges, setColleges] = useState([])

  useEffect(() => {

    const fetchColleges = async () => {

      try {

        const res = await axios.get(
          "https://miniature-space-chainsaw-69w6qxx46v59crjrv-5000.app.github.dev/api/colleges"
        )

        setColleges(res.data)

      } catch (error) {

        console.log(error)
      }
    }

    fetchColleges()

  }, [])

  return (

    <div className="bg-gray-100 min-h-screen">

      <Navbar />

      {/* HERO SECTION */}

      <div className="bg-yellow-500 text-black py-24 px-8 text-center">

        <h1 className="text-6xl font-bold mb-6">
          Find Your Dream College
        </h1>

        <p className="text-2xl mb-10">
          Search, Compare and Explore Top Colleges
        </p>

        <Link
          to="/colleges"
          className="bg-black text-white px-8 py-4 rounded-xl text-lg font-semibold"
        >
          Explore Colleges
        </Link>

      </div>

      {/* FEATURED COLLEGES */}

      <div className="px-8 py-20">

        <h2 className="text-5xl font-bold text-center mb-14">
          Featured Colleges
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {colleges.map((college) => (

            <CollegeCard
              key={college._id}
              college={college}
            />

          ))}

        </div>

      </div>

      {/* COMPARE SECTION */}

      <div className="bg-black text-white py-24 text-center">

        <h2 className="text-5xl font-bold mb-6">
          Compare Colleges Easily
        </h2>

        <p className="text-2xl mb-10">
          Compare placements, ratings and fees
        </p>

        <Link
          to="/compare"
          className="bg-yellow-500 text-black px-8 py-4 rounded-xl text-lg font-bold"
        >
          Start Comparing
        </Link>

      </div>

    </div>
  )
}

export default Home