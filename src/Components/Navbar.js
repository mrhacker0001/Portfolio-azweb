import React from 'react'
import "./Navbar.css"
import logo from "../assets/Screenshot 2024-03-07 at 21.47.46.png"
import { Link } from 'react-scroll'

function Navbar() {
  return (
    <div className='Navbar'>
      <nav className='nav'>
        <img src={logo} alt="..." />

        <div className="tags">
          <button>
            <Link to="home" smooth={true} duration={600}>
              Home
            </Link>
          </button>
          <button>
            <Link to="portfolio" smooth={true} duration={600}>
              Portfolio
            </Link>
          </button>
          <button>
            <Link to="about" smooth={true} duration={600}>
              About me
            </Link>
          </button>
          <button>
            <Link to="testimonials" smooth={true} duration={600}>
              Testimonials
            </Link>
          </button>
        </div>
        <button>
          <Link to="contact" smooth={true} duration={600}>
            Contact me
          </Link>
        </button>
      </nav>
    </div>
  )
}

export default Navbar