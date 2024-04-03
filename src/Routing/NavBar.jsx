import React from 'react'
import { NavLink } from 'react-router-dom'
const NavBar = () => {
  return (
    <>
    <nav className='Nav-Container'>
        <ul className='List-Container'>
            <NavLink to='/' className="Nav-Button">HOME</NavLink>
            <NavLink to='/event' className="Nav-Button">EVENT</NavLink>
            <NavLink to='/course' className="Nav-Button">COURSE</NavLink>
            <NavLink to='/placement' className="Nav-Button">PLACEMENT</NavLink>
            <NavLink to='/contact' className="Nav-Button">CONTACT</NavLink>
        </ul>
    </nav>
    </>
  )
}

export default NavBar



