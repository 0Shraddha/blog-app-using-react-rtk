import React from 'react'
import { NavLink } from 'react-router-dom'
import SaveData from './SaveData'

const Nav = () => {
  const navLinkStyles = ({isActive}) => {
return{
  fontWeight : isActive ? 'bold' : 'normal',
  color : isActive? 'red' : 'blue',
  textDecoration : isActive? 'none' : 'underline',
}
  }
  
 
  return (
    <>
    <nav>
        <ul style={{listStyle:"none", display:'flex', gap: "20px"}}>
            <li>
              {/* NavLink : to create navbar or breadcrumbs
              Link : to navigate routes from other components*/}
            <NavLink to="landing" style={navLinkStyles}>Landing Page</NavLink>
            </li>
            <li><NavLink to="about" style={navLinkStyles}>About</NavLink>
            </li>
            <li><NavLink to="products" style={navLinkStyles}>Products</NavLink>
            </li>
            <li><NavLink to="users" style={navLinkStyles}>Users</NavLink>
            </li>
            <li><NavLink to="profile" style={navLinkStyles}>Profile</NavLink>
            </li>
        </ul>

    </nav>

    </>
  )
}

export default Nav