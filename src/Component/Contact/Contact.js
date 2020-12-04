import React from 'react'
import { FaMapMarkerAlt} from 'react-icons/fa'
import { FaPhoneAlt} from 'react-icons/fa'
import { FaEnvelopeOpen} from 'react-icons/fa'
import Buttons from '../Buttons/Btn'
import './Contact.css'

function Contact() {
   return (
      <div className="contact">
         <div className="titles">
            <h2>Contact Me</h2>
           
         </div>
         <div className="contactcontent">
            <div className="firstContent">
               <h3>Contact Info</h3>
               <article>
                  <span><FaMapMarkerAlt /></span>
                  <div className="paraInfo">
                     <h4>Address</h4>
                     <p>   No. 222b, Freedom way, Ikate, Lekki Lagos</p>
                  </div>
               </article>
               <article>
                  <span> <FaPhoneAlt /></span>
                  <div className="paraInfo">
                     <h4>Phone</h4>
                     <a href="tel : 07068379301">  07068379301</a>
                  </div>
               </article>
               <article>
                  <span><FaEnvelopeOpen /></span>
                  <div className="paraInfo">
                     <h4>Email</h4>
                     <p> gift.weike@gmail.com</p>
                  </div>
               </article>
            </div>
            <div className="formSec">
               <form >
                  <h3>Message me</h3>
                  <input type="text" name="" placeholder="Full Name"/>
                  <input type="email" name=""placeholder="Email" />
                  <textarea name="" placeholder="Your Message"></textarea>
                  <div className="btndiv">
                     <Buttons className='btnColor' path="mailto:donable2009@gmail.com">Send</Buttons>
                  </div>
               </form>
            </div>
         </div>
      </div>
   )
}

export default Contact
