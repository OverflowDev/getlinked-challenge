import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from "./components/Home"
import Navbar from "./layouts/Navbar"

function App() {

  return (
    <div className="font-montserrat min-h-screen text-white">
      <Router>

        {/* <Navbar /> */}

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
