import Navbar from "../components/Navbar"

function CollegeDetails() {

  const college = {

    name: "IIT Hyderabad",

    image:
      "https://images.unsplash.com/photo-1562774053-701939374585",

    location: "Hyderabad",

    rating: "4.8",

    fees: "₹2.2 Lakhs",

    placement: "95%",

    description:
      "IIT Hyderabad is one of the top engineering institutes in India known for excellent placements, modern infrastructure and research opportunities.",

    courses: [
      "Computer Science Engineering",
      "Mechanical Engineering",
      "Electrical Engineering",
      "Civil Engineering",
      "Artificial Intelligence",
      "Data Science",
    ],
  }

  return (

    <div className="bg-gray-100 min-h-screen">

      <Navbar />

      <div className="max-w-6xl mx-auto px-8 py-16">

        <img
          src={college.image}
          alt={college.name}
          className="w-full h-[450px] object-cover rounded-2xl shadow-lg"
        />

        <div className="bg-white p-10 rounded-2xl shadow-lg mt-10">

          <h1 className="text-5xl font-bold mb-6">
            {college.name}
          </h1>

          <p className="text-xl mb-3">
            📍 {college.location}
          </p>

          <p className="text-xl mb-3">
            ⭐ Rating: {college.rating}
          </p>

          <p className="text-xl mb-3">
            💰 Fees: {college.fees}
          </p>

          <p className="text-xl mb-8">
            📈 Placement: {college.placement}
          </p>

          <h2 className="text-3xl font-bold mb-4">
            About College
          </h2>

          <p className="text-lg text-gray-700 leading-8 mb-10">
            {college.description}
          </p>

          <h2 className="text-3xl font-bold mb-6">
            Courses Offered
          </h2>

          <div className="grid md:grid-cols-2 gap-5">

            {college.courses.map((course, index) => (

              <div
                key={index}
                className="bg-yellow-100 p-5 rounded-xl font-semibold"
              >
                {course}
              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
  )
}

export default CollegeDetails