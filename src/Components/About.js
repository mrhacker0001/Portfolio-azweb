import React from 'react'
import "./About.css"
import img from "../assets/Screenshot 2024-08-29 at 21.28.36.png"


function About() {
  return (
    <div className='About' id='about'>
        <img src={img} alt="..." />
        <div className="right-card">
            <h2>About <br /> <h1>About me</h1></h2>

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac adipiscing velit non nulla in amet pellentesque.</p>
              <p>  Sit turpis pretium eget maecenas. Vestibulum dolor mattis consectetur eget commodo vitae. Amet pellentesque sit pulvinar lorem mi a, euismod risus r.</p>
        </div>
    </div>
  )
}

export default About