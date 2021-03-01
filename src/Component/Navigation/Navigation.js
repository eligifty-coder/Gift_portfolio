import React, { useState, useEffect } from 'react'
import './Navigation.css'
import Hamburger from '../Hamburger/Hamburger'
import NavItem from './NavItem/NavItem'
function Navigation() {
   const [scrolled, setScrolled] = useState(false)
   const [isClicked, setClicked] = useState(false)
   const handleClick=()=>{
      setClicked(!isClicked)
   }
   const handleLinkClicked=(e)=>{
      setClicked(false)
      console.log(e.target)
   }
   const handleScroll =()=>{
      const offset = window.scrollY
      if(offset>10){
         setScrolled(true)
      }else{
         setScrolled(false)
      }
   }
   let navbarClass = ['navbar']
   let showed = ['smallScreen']
   let Linked = ["Linked"]
   let Logo =["Logo"]
   if(isClicked){
      showed.push("show")
   }
   if(scrolled){
      navbarClass.push('scrolled')
      navbarClass.push('scrollBg')
      Linked.push("scrollLink")
      Logo.push("scrollLogo")
   }
   
   useEffect(()=>{
      window.addEventListener("scroll",handleScroll)
   })
   return (
      <nav>
         <header className={navbarClass.join(" ")}>
            <a className={Logo.join(" ")} href="/">Portfolio</a>
            <div className="hamContainer">
               <Hamburger handleClick={handleClick} isToggle={isClicked} />
            </div>
            <ul className="big">
               <NavItem activeName="nav_active" itemClicked={handleLinkClicked} className={Linked.join(" ")} loc="/">Home</NavItem>
               <NavItem activeName="nav_active" itemClicked={handleLinkClicked} className={Linked.join(" ")} loc="/about">About</NavItem>
               <NavItem activeName="nav_active" itemClicked={handleLinkClicked} className={Linked.join(" ")} loc="/project">Project</NavItem>
               <NavItem activeName="nav_active" itemClicked={handleLinkClicked} className={Linked.join(" ")} loc="/contact">Contact</NavItem>
            </ul>
         </header>
         <div className={showed.join(" ")}>
            <ul className="small">
               <NavItem activeName="nav_active" itemClicked={handleLinkClicked}   className={Linked.join(" ")} loc="/">Home</NavItem>
               <NavItem activeName="nav_active" itemClicked={handleLinkClicked}   className={Linked.join(" ")} loc="/about">About</NavItem>
               <NavItem activeName="nav_active" itemClicked={handleLinkClicked}   className={Linked.join(" ")} loc="/project">Project</NavItem>
               <NavItem activeName="nav_active" itemClicked={handleLinkClicked}   className={Linked.join(" ")} loc="/contact">Contact</NavItem>
            </ul>
         </div>
      </nav>
   )
}

export default Navigation
