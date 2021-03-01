import React, {useState, useEffect} from 'react'
import './Project.css'
import Buttons from '../Buttons/Btn'
function Project() {
   const [projects, setProjects] = useState([])
   useEffect(()=>{
      setProjects([{ image: '/7.PNG', paths: "https://react-my-burger-49030.web.app/", title: "A platform where a customer  gets authenticated then proceeds to make orders for a sumptuous burger", code: "https://github.com/eligifty-coder/burgerBuilder_with_react", },{ image: '/0.PNG', paths: " https://eligifty-coder.github.io/jsminna-online-store-launching/", title: "New online store asking for product suggestions from customers who will be authenticated using an API", code: "https://github.com/eligifty-coder/jsminna-online-store-launching", },{ image: '/1.PNG', paths: " https://eligifty-coder.github.io/jsTask11/", title: "Lagos State Emergency Phone Numbers", code: "https://github.com/eligifty-coder/jsTask11", }, { image: '/2.PNG', title: "Fetch Countries With An Api", paths: " https://eligifty-coder.github.io/jsMinna-fetching-Api-website/", code: "https://github.com/eligifty-coder/jsMinna-fetching-Api-website", }, { image: '/3.PNG', title: "Easybank Website Frontend Mentor Challenge", paths: " https://eligifty-coder.github.io/jsMinna-Web-pages/", code: "https://github.com/eligifty-coder/jsMinnaFrontendTask1", }, { image: '/4.PNG', title: "Github Profile Finder", paths: "https://eligifty-coder.github.io/github_profile_finder/", code: "https://github.com/eligifty-coder/github_profile_finder", }, { image: '/5.PNG', title: "John Doe Portfolio", paths: "https://eligifty-coder.github.io/grid_portfolio/", code: "https://github.com/eligifty-coder/grid_portfolio", }])
   },[])
   
   let btnRed = ['btn']
   btnRed.push('btnRed')
   let displayed = projects.map((item, index)=>{
      return(
         <article className="singleProject" key={index}>
            <h3>{item.title}</h3>
            <a href={item.paths}><img src={item.image} alt="" /></a> 
            <div className="btnContainer">
               <Buttons path={item.code} className="btn">Code</Buttons>
               <Buttons path={item.paths} className={btnRed.join(" ")}>Demo</Buttons>
            </div>
         </article>
      )
   })
   return (
      <div className="project">
         <div className="projectContainer">
            {displayed}
         </div>
      </div>
   )
}

export default Project
