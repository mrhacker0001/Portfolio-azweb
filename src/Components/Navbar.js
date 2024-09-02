import React, { useState } from 'react'
import "./Navbar.css"
import logo from "../assets/Screenshot 2024-03-07 at 21.47.46.png"
import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import insta from "..//assets/Instagram.png"
import telegram from "..//assets/telegram.png"

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
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
          <button className='contact-btn'>
            <Link to="contact" smooth={true} duration={600}>
              Contact me
            </Link>
          </button>
        </nav>
      </div>



      <div className="navbar-media">
        <img src={logo} alt="" className='logo' />
        <button className="menu-icon" onClick={() => setShowMenu(!showMenu)}>
          <FontAwesomeIcon icon={showMenu ? faTimes : faBars} className='icon' />
        </button>
        <div className={`mobile-menu ${showMenu ? 'open' : ''}`}>
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

          <div className="medias">
            <a href="https://www.instagram.com/16.sharifjanof?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><button ><img src={insta} alt="..." />16.Sharifjanof</button></a>
            <a href="https://t.me/Azweb_off"><button ><img src={telegram} alt="..." />Azweb off</button></a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar