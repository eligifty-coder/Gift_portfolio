import React from 'react'
import './Hamburger.css'
function Hamburger({ handleClick, isToggle}) {
   let Ham = ['Hamburger']
   if(isToggle){
      Ham.push("applyClass")
   }
   return (
      <div className={Ham.join(" ")}onClick={handleClick}>
         <div className=" div div1"></div>
         <div className=" div div2"></div>
         <div className=" div div3"></div>
      </div>
   )
}

export default Hamburger
