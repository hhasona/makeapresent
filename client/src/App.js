import "./App.css"
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>
    </>
  )
}

export default App
