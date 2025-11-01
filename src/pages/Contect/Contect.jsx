import React, { useEffect } from 'react'
import "./contec.css"


const Contect = () => {
  return (


    <div className='contect'>
            <form action="https://formspree.io/f/xwprrboz" method='post'>
                <h1>CONTECT ME</h1>
              <h2>Get in touch me</h2>
            <input type="text" placeholder='Enter  your name...' name='username' required />
            <input type="email" placeholder='Enter your email.' name='email' required />
            <input type="number" placeholder='Enter your number.' name='number' required />
            <textarea name="message" placeholder='message' id="" required className='tet'></textarea>

            <button className='btn'>submit</button>

            <p>Thank you for contacting us!</p>

            </form>
    
    </div>
  )
}

export default Contect