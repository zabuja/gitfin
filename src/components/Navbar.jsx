import React from 'react'
import {FaGithub} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types' 

function Navbar({title}) {
  return (
    <Nav className='navbar mb-12 shadow-lg bg-neutral text-neutral-content'>
      <div className='container mx-auto'>
        Navbar
      </div>
    </Nav>
  )
}

Navbar.defaultProps = {
  title: 'Github Finder',  
}

Navbar.PropTypes = {
    title: PropTypes.string,
}

export default Navbar