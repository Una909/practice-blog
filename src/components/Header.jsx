import React from 'react'
import { Link } from 'react-router-dom'
import placeh from '../assets/placeh.jpg'
import { FaBars } from "react-icons/fa"
import { AiOutlineClose } from "react-icons/ai"

const Header = () => {
  return (
    <nav>
      <div className="container navContainer">
        <Link to="/" className='navLogo'>
          <img src={placeh} alt='Logo' />
        </Link>
        <ul className="navMenu">
          <li><Link to="/profile/test">profile</Link></li>
          <li><Link to="/create">Post</Link></li>
          <li><Link to="/dashboard">dashboard</Link></li>
        </ul>
        <button className="navToggle-btn">
          <AiOutlineClose/>
        </button>
      </div>
    </nav>
  )
}

export default Header
