import React from 'react'
import "./Contact.css"

function Contact() {
    return (
        <div className='Contact'>
            <h4>Get In Touch</h4>
            <h1>Contact me</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <div className="input-cards">
                <div className="input-card">
                    <label>
                        First name
                        <input type="text" name='text' />
                    </label>
                    <label>
                        Last name
                        <input type="text" name='text' />
                    </label>
                    <label>
                        Email
                        <input type="text" name='text' />
                    </label>
                    <label>
                        Phone number
                        <input type="text" name='text' />
                    </label>
                </div>
                <div className="text-card">
                    <label>
                        Choose a topic
                        <select>
                            <option value="Java">Select one</option>
                            <option value="Java">Java Script</option>
                            <option value="Java">React JS</option>
                            <option value="Java">Node js</option>
                            <option value="Java">CSS</option>
                            <option value="Java">HTML</option>
                        </select>
                    </label>
                    <label>
                        Message
                        <input type="text" name='text' placeholder='Type your message...' />
                    </label>
                    <div className="checkbox"><input type="checkbox" name="checkbox" /> <span>I accept the terms</span></div>
                </div>
                <button className='submit'>Submit</button>
            </div>
        </div>
    )
}

export default Contact