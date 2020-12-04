import React from 'react'
import './Home.css'
import About from '../About/About'
import Header from './Header/Header'
import Project from '../Projects/Project'
import Contact from '../Contact/Contact'
function Home() {
   return (
      <div className="Home">
         <Header/>
         <About/>
         <Project/>
         <Contact/>
      </div>
   )
}

export default Home
