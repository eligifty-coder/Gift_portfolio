import React from 'react'
import './Social.css'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaInstagram} from 'react-icons/fa'

function Social() {
   return (
      <div className="social">
         <a href="https://twitter.com/GiftChukwunwei1"> <FaTwitter/></a>
         <a href="https://www.instagram.com/gift_chukwunweike/"><FaInstagram/></a>
         <a href="https://www.linkedin.com/in/gift-chukwunweike-b1249b141"><FaLinkedinIn/></a>
      </div>
   )
}

export default Social
