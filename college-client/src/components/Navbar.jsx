import { Link } from "react-router-dom"

function Navbar() {

  return (

    <nav className="bg-black text-white px-8 py-5 flex justify-between items-center shadow-lg">

      <Link
        to="/"
        className="text-4xl font-bold text-yellow-500"
      >
        Crack One
      </Link>

      <div className="flex gap-8 text-lg font-medium">

        <Link
          to="/"
          className="hover:text-yellow-400 transition"
        >
          Home
        </Link>

        <Link
          to="/colleges"
          className="hover:text-yellow-400 transition"
        >
          Colleges
        </Link>

        <Link
          to="/compare"
          className="hover:text-yellow-400 transition"
        >
          Compare
        </Link>

        <Link
          to="/login"
          className="hover:text-yellow-400 transition"
        >
          Login
        </Link>

        <Link
          to="/register"
          className="hover:text-yellow-400 transition"
        >
          Register
        </Link>

      </div>

    </nav>
  )
}

export default Navbar