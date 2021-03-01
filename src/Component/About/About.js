import React from 'react'
import './About.css'
import aboutImage from '../Images/about.jpeg'
function About() {
   return (
      <section className="about">
         {/* <Navigation/> */}
         <div className="containers">
            <h2 className="title">About Me</h2>
            <div className="content">
               <div className="containerText">
                  <p>
                     I am an enthusiastic and detail-oriented frontend developer, I started out learning Html5, Css3, core JavaScript. Currently learning React and Firebase.I care deeply about building interfaces for mobile-first , dynamic web applications that are usable and pleasant for the most number of people possible. I am keen to gain more experience and be up to date with the aforementioned technologies so as to contribute timely tech solutions in the tech community and the world at large. For this reason, I am seeking an entry-level position with tech company .

                     One of my favorite quote is "You may not be the first to do it. But reinvent the wheel so  well that you become a template". You may catch me cooking or watching a movie or reading or at the beach whenever I am not coding.
                  </p>
               </div>
               <div className="containerImage">
                  <img src={aboutImage} alt=""/>
               </div>
            </div>
         </div>
      </section>
   )
}

export default About
