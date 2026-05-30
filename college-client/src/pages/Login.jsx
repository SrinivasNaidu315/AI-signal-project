import { useState } from "react"

import Navbar from "../components/Navbar"

function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = (e) => {

    e.preventDefault()

    alert("Login Successful 🚀")
  }

  return (

    <div className="bg-gray-100 min-h-screen">

      <Navbar />

      <div className="flex justify-center items-center py-20">

        <form
          onSubmit={handleLogin}
          className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-md"
        >

          <h1 className="text-4xl font-bold text-center mb-8">
            Login
          </h1>

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border px-4 py-3 rounded-lg mb-5 outline-none"
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border px-4 py-3 rounded-lg mb-8 outline-none"
          />

          <button
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-black py-3 rounded-lg font-bold"
          >
            Login
          </button>

        </form>

      </div>

    </div>
  )
}

export default Login