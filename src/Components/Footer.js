import React from 'react'
import "./Footer.css"
import logo from "../assets/Screenshot 2024-03-07 at 21.47.46.png"
import facebook from "../assets/Facebook.png"
import instagram from "../assets/Instagram.png"
import twitter from "../assets/Twitter.png"
import linked from "../assets/LinkedIn.png"

function Footer() {
    return (
        <div className='Footer'>
            <div className="footer-card">
                <img src={logo} alt="" />
                <div className="text-cart">
                    <a href="...">Home</a>
                    <a href="...">Portfolio</a>
                    <a href="...">About me</a>
                    <a href="...">Contact</a>
                    <a href="...">Testimonials</a>
                </div>
                <div className="imgs">
                    <img src={facebook} alt="" />
                    <img src={instagram} alt="" />
                    <img src={twitter} alt="" />
                    <img src={linked} alt="" />
                </div>
            </div>

            <div className="bottom-card">
                <span>Made with AZWEB</span>
                <div className="tripple">
                    <a href="...">Privacy Policy</a>
                    <a href="...">Terms of Service</a>
                    <a href="...">Cookies Settings</a>
                </div>
            </div>

        </div>
    )
}

export default Footer