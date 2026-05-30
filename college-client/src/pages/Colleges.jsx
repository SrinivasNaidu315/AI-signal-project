import { useEffect, useState } from "react"
import axios from "axios"

import Navbar from "../components/Navbar"
import CollegeCard from "../components/CollegeCard"

function Colleges() {

  const [colleges, setColleges] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {

    const fetchColleges = async () => {

      try {

        const res = await axios.get(
          "https://ai-signal-project.onrender.com/"
        )

        setColleges(res.data)

      } catch (error) {

        console.log(error)
      }
    }

    fetchColleges()

  }, [])

  const filteredColleges = colleges.filter((college) =>
    college.name.toLowerCase().includes(search.toLowerCase())
  )

  return (

    <div className="bg-gray-100 min-h-screen">

      <Navbar />

      <div className="px-8 py-16">

        <h1 className="text-5xl font-bold text-center mb-12">
          Explore Colleges
        </h1>

        <div className="flex justify-center mb-14">

          <input
            type="text"
            placeholder="Search Colleges..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-2xl px-5 py-4 rounded-xl border border-gray-300 outline-none shadow-sm"
          />

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {filteredColleges.map((college) => (

            <CollegeCard
              key={college._id}
              college={college}
            />

          ))}

        </div>

      </div>

    </div>
  )
}

export default Colleges