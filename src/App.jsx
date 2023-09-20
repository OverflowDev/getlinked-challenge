import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from "./components/Home"
import Navbar from "./layouts/Navbar"
import Footer from "./layouts/Footer"

function App() {

  return (
    <div className="font-montserrat min-h-screen text-white">
      <Router>

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  )
}

export default App
