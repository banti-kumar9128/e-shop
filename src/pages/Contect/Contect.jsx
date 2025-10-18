import React from 'react'
import "./contect.css"
const Contect = () => {
  return (
    <div className='contect'>
            <form action="https://formspree.io/f/xwprrboz" method='post'>
                <h1>CONTECT ME</h1>
              <h2>Get in touch me</h2>
            <input type="text" placeholder='Enter  your name...' name='username' required />
            <input type="email" placeholder='Enter your email.' name='email' required />
            <textarea name="message" placeholder='message' id="" required className='tet'></textarea>

            <button className='btn'>submit</button>


            </form>
    
    </div>
  )
}

export default Contect