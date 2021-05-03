import React, { useState } from 'react'
import {BiMenu} from 'react-icons/bi'
import {GrClose} from 'react-icons/gr'
import {Link} from 'react-router-dom'
import './navbar.css'
const Navbar = () => {
  const [clicked, setClicked] = useState(false)

  const closeMenu = () => {
    setClicked(!clicked)
  }
  return (
    <div className='navItems'>
      <div className='nav-logo'>
        <div className='logo-container'>
          <h2>My Beach</h2>
        </div>
        <ul className={clicked ? 'nav-options active' : 'nav-options'}>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <li className='nav-link' onClick={() => closeMenu()}>
              Home
            </li>
          </Link>
          <Link to='/rooms' style={{ textDecoration: 'none' }}>
            <li className='nav-link' onClick={() => closeMenu()}>
              Rooms
            </li>
          </Link>
        </ul>
      </div>
      <div className='mobile-menu' onClick={() => setClicked(!clicked)}>
        {clicked ? (
          <GrClose size={50} style={{ color: '#fff' }} />
        ) : (
          <BiMenu size={50} />
        )}
      </div>
    </div>
  )
}

export default Navbar
