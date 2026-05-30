import { useEffect, useState } from "react"
import axios from "axios"

import Navbar from "../components/Navbar"

function Saved() {

  const [savedColleges, setSavedColleges] =
    useState([])

  useEffect(() => {

    const fetchSavedColleges = async () => {

      try {

        const res = await axios.get(
          "https://miniature-space-chainsaw-69w6qxx46v59crjrv-5000.app.github.dev/api/saved-colleges"
        )

        setSavedColleges(res.data)

      } catch (error) {

        console.log(error)
      }
    }

    fetchSavedColleges()

  }, [])

  return (

    <div className="bg-gray-100 min-h-screen">

      <Navbar />

      <div className="p-10">

        <h1 className="text-5xl font-bold mb-10">
          Saved Colleges
        </h1>

        <div className="grid md:grid-cols-3 gap-8">

          {savedColleges.map((college) => (

            <div
              key={college._id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >

              <img
                src={college.image}
                alt={college.name}
                className="h-56 w-full object-cover"
              />

              <div className="p-6">

                <h2 className="text-3xl font-bold mb-3">
                  {college.name}
                </h2>

                <p className="mb-2">
                  📍 {college.location}
                </p>

                <p className="mb-2">
                  ⭐ Rating: {college.rating}
                </p>

                <p className="font-semibold">
                  💰 Fees: {college.fees}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  )
}

export default Saved