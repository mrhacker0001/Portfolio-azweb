import React from 'react'
import "./Skills.css"
import img from "../assets/Strategy & Direction.png"
import img1 from "../assets/Branding & Logo.png"
import img2 from "../assets/UI & UX Design.png"
import img3 from "../assets/Webflow Development.png"

function Skills() {
    const data = [
        { img: img, h2: "Strategy & Direction", p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique." },
        { img: img1, h2: "Branding & Logo", p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique." },
        { img: img2, h2: "UI & UX Design", p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique." },
        { img: img3, h2: "Webflow Development", p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique." },
    ]
    return (
        <div className='Skills'>
            <h4>My Skills <br /> <h1>My Expertise</h1></h4>

            <div className="cards">
                {
                    data.map((item, index) => (
                        <div key={index} className="cart" >
                            <img src={item.img} alt="..." />
                            <h2>{item.h2}</h2>
                            <p>{item.p}</p>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Skills