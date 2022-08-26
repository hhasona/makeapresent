import "./App.css"
import { Routes, Route, Navigate } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar"
import Home from "./pages/Home"
import Auth from "./pages/Auth"
import SignupPage from "./pages/Signup"

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/auth" exact element={<Auth />} />
        <Route path="/auth/sign-up" exact element={<SignupPage />} />
      </Routes>
    </>
  )
}

export default App
