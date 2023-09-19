import { Link } from "react-router-dom"
import { useState } from "react"

import Menu from '../assets/menu.svg'
import Close from '../assets/close.svg'

function Navbar() {

  const [isOpen, setIsOpen] = useState(false)
  const closeMenu = () => setIsOpen(false)  

  return (
    <navbar className='md:px-24 px-8 flex justify-between items-center py-6 border-b border-gray-500'>
      <div className="font-clash-display">
          <Link to='/' className="text-2xl">get<span className="text-secondary font-bold">linked</span></Link>
      </div>
      {/* Mobile icon  */}
      <button className="md:hidden z-50" onClick={() => setIsOpen(!isOpen)}>
        {!isOpen ? (
          <img src={Menu} alt="menu" />
          ) : (
            <img src={Close} alt="close" />
        )}
      </button>
      
      {/* Large screen  */}
      <div className="md:flex md:items-center md:space-x-12 hidden">
        <Link to='/timeline'>Timeline</Link>
        <Link to='/overview'>Overview</Link>
        <Link to='/faqs'>FAQs</Link>
        <Link to='/contact'>Contact</Link>
        <div>
            <Link to='register' className="bg-gradient-to-r from-lgrad to-grad py-2 px-8 md:ml-36 rounded-sm">Register</Link>
        </div>
      </div>

      {/* Mobile Menu  */}
      <div className={` md:hidden flex flex-col bg-main absolute top-0 w-full h-96 py-24 px-12 gap-6 delay-100 duration-500 z-10 ${isOpen ? 'left-0' : 'left-[-100%]'}`}>
        <Link to='/timeline'>Timeline</Link>
        <Link to='/overview'>Overview</Link>
        <Link to='/faqs'>FAQs</Link>
        <Link to='/contact'>Contact</Link>
        <div>
            <Link onClick={closeMenu} to='register' className="bg-gradient-to-r from-lgrad to-grad py-2 px-8 md:ml-36 rounded-sm">Register</Link>
        </div>
      </div>

    </navbar>
  )
}

export default Navbar