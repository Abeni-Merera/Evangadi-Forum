import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext';
import './Header.css'

const Header = () => {

  return (
    <div className='header'>
      <Link to="/">
      <div className='header__logo'>
        <img src='https://www.evangadi.com/themes/humans//assets/images/misc/evangadi-logo-home.png' />
      </div>
      </Link>
      
        <div className='header__links'>
        
          <Link to='/'>Home</Link>

          <a href='https://www.evangadi.com/explained/'>How it works</a>
          <button>Sign in</button>
        </div>
    
    </div>

  )
}

export default Header