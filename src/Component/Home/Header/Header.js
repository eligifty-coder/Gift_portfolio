import React, {useState} from 'react'
import './Header.css'
import Typwriting from './Typerwriting/Typewriting'
import Btn from '../../Buttons/Btn'
function Header() {
   let btnClassName = ['btn','btnColor']
   return (
      <section className="banner">
         <div className="container">
            <h2>Hello, I'm <span>Gift Chukwunweike</span></h2>
            <Typwriting>
               {["I'm a Front End Web Developer", "I write JavaScript and React"]}
            </Typwriting>
            <Btn path="/about" className={btnClassName.join(" ")}>About Me</Btn>
         </div>
      </section>
   )
}

export default Header
