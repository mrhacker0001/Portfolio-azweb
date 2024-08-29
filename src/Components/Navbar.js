import React from 'react'
import "./Navbar.css"
import logo from "../assets/Screenshot 2024-03-07 at 21.47.46.png"

function Navbar() {
  return (
    <div className='Navbar'>
      <nav className='nav'>
        <img src={logo} alt="..." />

        <div className="tags">
          <a href="...">Home</a>
          <a href="...">Portfolio</a>
          <a href="...">About me</a>
          <a href="...">Testimonials</a>
        </div>
        <button>Contact me</button>
      </nav>
    </div>
  )
}

export default Navbar