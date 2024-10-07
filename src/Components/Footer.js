import React from 'react'
import "./Footer.css"
import logo from "../assets/Screenshot 2024-03-07 at 21.47.46.png"
import { GitHub, Instagram, Telegram } from '@mui/icons-material'

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
                    <a href="https://www.instagram.com/16.sharifjanof?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><Instagram /></a>
                    <a href="https://t.me/Azweb_off"><Telegram /></a>
                    <a href="https://github.com/"><GitHub /></a>
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