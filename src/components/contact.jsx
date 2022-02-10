import React from 'react'

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="heading">
                <h2><span>T</span>ouch <span>w</span>ith <span>m</span>e</h2>
            </div>
            <div className="form-container">
                <div className="name-email">
                    <input class="name-input" name="name" type="text" placeholder='Name' />
                    <input class="email-input" name="email" type="email" placeholder='Email' />
                </div>
                <input name="subject" type="text" placeholder='Subject' />
                <textarea name="subject" type="text" placeholder='Message' />
                <button className="submit-button">Submit</button>
            </div>
        </div>
    )
}

export default Contact