import "./App.css"
import React, { useEffect, useState, useRef } from "react"
import { useLocation } from "react-router-dom"
import { Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar"
import Home from "./pages/Home"
import Auth from "./pages/Auth"
import SignupPage from "./pages/Signup"

function App() {
  const [hideNav, setHideNav] = useState(false)
  const location = useLocation()
  const prevLocation = useRef(location)

  useEffect(() => {
    if (location.pathname.includes("app")) {
      setHideNav(true)
    } else {
      setHideNav(false)
    }
  }, [location])

  useEffect(() => {
    prevLocation.current = location
  }, [location])

  return (
    <>
      {!hideNav && <NavBar />}
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/app/login" exact element={<Auth />} />
        <Route path="/app/register" exact element={<SignupPage />} />
      </Routes>
    </>
  )
}

export default App
