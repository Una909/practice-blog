import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <ul className="footerCategories">
        <li><Link to="/posts/categories/Anime">Anime</Link></li>
        <li><Link to="/posts/categories/Series">Series</Link></li>
        <li><Link to="/posts/categories/Manga">Manga</Link></li>
        <li><Link to="/posts/categories/Movies">Movies</Link></li>
        <li><Link to="/posts/categories/Music">Music</Link></li>
      </ul>
      <div className='footerCopyright'>
        <small>All Rights Reserved &copy; Copyright, A.S</small>
      </div>
    </footer>
  )
}

export default Footer
