import React from 'react'
import "./Portfolio.css"
import img from "../assets/Vector (11).png"
import img1 from "../assets/Screenshot 2024-08-29 at 21.59.48.png"
import img2 from "../assets/Screenshot 2024-08-29 at 22.00.28.png"
import img3 from "../assets/Screenshot 2024-08-29 at 22.00.44.png"
import right from "../assets/right-up.png"

function Portfolio() {
    const data = [
        { img: img1, nomi: "Sabio Price Attack", tavsif: "Happy Cyber Monday, trader! SabioTrade’s conditions were hacked by unknown intruders.", link: "https://attack-hacker.netlify.app/" },
        {
            img: img2, nomi: "Flower Shop", tavsif: "Flowers, 🌻 what the world needs Browse between hounders of flowers", link: "https://flower-shop-no1.netlify.app/"
        },
        { img: img3, nomi: "Lexus Test Driving", tavsif: "Test driving platfor to all countries" },
    ]
    return (
        <div className='Portfolio' id="portfolio">
            <div className="recent">
                <h2>Recent Projects <br /> <h1>My Portfolio</h1></h2>
                <button><img src={img} alt="..." /> Visit My Dribble </button>
            </div>
            <div className="bottom-cards">
                {
                    data.map((item, index) => (
                        <div key={index} className="incard">
                            <img src={item.img} alt="" />
                            <h1>{item.nomi}</h1>
                            <p>{item.tavsif}</p>
                            <button><a href={item.link}>View In Dribbble </a> <img src={right} alt="" /></button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Portfolio