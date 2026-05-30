import { Link } from "react-router-dom"

function CollegeCard({ college }) {

  return (

    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">

      <img
        src={college.image}
        alt={college.name}
        className="h-56 w-full object-cover"
      />

      <div className="p-6">

        <h2 className="text-3xl font-bold mb-3">
          {college.name}
        </h2>

        <p className="text-gray-600 mb-2">
          📍 {college.location}
        </p>

        <p className="mb-2">
          ⭐ Rating: {college.rating}
        </p>

        <p className="mb-5 font-semibold">
          💰 Fees: {college.fees}
        </p>

        <div className="flex gap-3 flex-wrap">

          <Link
            to="/college-details"
            className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-lg font-semibold"
          >
            View Details
          </Link>

          <Link
            to="/compare"
            className="bg-black text-white px-4 py-2 rounded-lg"
          >
            Compare
          </Link>

        </div>

      </div>

    </div>
  )
}

export default CollegeCard