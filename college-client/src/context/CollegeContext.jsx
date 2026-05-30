import { createContext, useEffect, useState } from "react"

export const CollegeContext = createContext()

function CollegeProvider({ children }) {

  const [savedColleges, setSavedColleges] = useState(() => {
    const stored = localStorage.getItem("savedColleges")

    return stored ? JSON.parse(stored) : []
  })

  useEffect(() => {
    localStorage.setItem(
      "savedColleges",
      JSON.stringify(savedColleges)
    )
  }, [savedColleges])

  const saveCollege = (college) => {

    const exists = savedColleges.find(
      (item) => item.id === college.id
    )

    if (!exists) {
      setSavedColleges([...savedColleges, college])
    }
  }

  const removeCollege = (id) => {
    setSavedColleges(
      savedColleges.filter(
        (college) => college.id !== id
      )
    )
  }

  return (
    <CollegeContext.Provider
      value={{
        savedColleges,
        saveCollege,
        removeCollege,
      }}
    >
      {children}
    </CollegeContext.Provider>
  )
}

export default CollegeProvider