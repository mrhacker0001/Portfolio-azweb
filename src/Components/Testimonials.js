import React from 'react'
import "./Testimonials.css"
import vector from "../assets/Vector (13).png"
import avatar from "../assets/Avatar.png"

function Testimonials() {
    const data = [
        { star: vector, tavsif: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse varius enim in eros elementum tristique.Duis cursus, mi quis viverra.", avatar: avatar },
        { star: vector, tavsif: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse varius enim in eros elementum tristique.Duis cursus, mi quis viverra.", avatar: avatar },
        { star: vector, tavsif: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse varius enim in eros elementum tristique.Duis cursus, mi quis viverra.", avatar: avatar },
    ]
    return (
        <div className='Testimonials'>
            <h4>Clients Feedback <br /><h1>Customer testimonials</h1></h4>
            <div className="feedbacks">
                {
                    data.map((item, index) => (
                        <div className="feedback">
                            <div className="stars">
                                <img src={item.star} alt="..." />
                                <img src={item.star} alt="..." />
                                <img src={item.star} alt="..." />
                                <img src={item.star} alt="..." />
                                <img src={item.star} alt="..." />
                            </div>
                            <p>{item.tavsif}</p>
                            <img src={item.avatar} alt="..." className='avatar'/>
                        </div>
                    ))
                }


            </div>
        </div>
    )
}

export default Testimonials