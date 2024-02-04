import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const styles = {
    listStyle : "none",
    display: "flex",
    gap:"10px"
  }
  return (
    <header className='Header'>
        <h1>Redux Blog</h1>
        <nav>
            <ul style={styles}>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='post'>Post</Link></li>
            </ul>
        </nav>
        </header>
  )
}

export default Header