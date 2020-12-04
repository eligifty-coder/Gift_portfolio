import React from 'react'
import {NavLink} from 'react-router-dom'
import './NavItem.css'
function NavItem({ children, loc, className, itemClicked,activeName}) {
   return (
      <div>
         <NavLink activeClassName={activeName} to={loc} exact className={className} onClick={itemClicked}>{children}</NavLink>
      </div>
   )
}

export default NavItem
