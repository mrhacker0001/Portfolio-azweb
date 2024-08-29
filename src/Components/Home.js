import React from 'react'
import "./Home.css"
import img from "../assets/Screenshot 2024-08-29 at 20.54.22.png"

function Home() {
  return (
    <div className='Home'>
      <div className="first-card">
        <span>Hey, I am Azweb</span>
        <h1>I create product design and brand experience</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
      </div>

      <div className="second-card">
<img src={img} alt="..." />
      </div>
    </div>
  )
}

export default Home