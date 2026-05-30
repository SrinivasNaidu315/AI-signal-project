import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Colleges from "./pages/Colleges"
import Compare from "./pages/Compare"
import Login from "./pages/Login"
import Register from "./pages/Register"
import CollegeDetails from "./pages/CollegeDetails"

function App() {

  return (

    <Routes>

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/colleges"
        element={<Colleges />}
      />

      <Route
        path="/compare"
        element={<Compare />}
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

      <Route
        path="/college-details"
        element={<CollegeDetails />}
      />

    </Routes>

  )
}

export default App