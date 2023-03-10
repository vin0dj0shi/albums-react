import React from 'react';
import { Link } from 'react-router-dom'

// Navbar component which is used in all the pages
const Navbar = (props) => {

  return (
    <div className='navbar'>
      <h2 onClick={() => props.handleClick(false)}>
        <span className='brand'>Albums List</span>
      </h2>
      <Link to={props.path}><button>{props.page}</button></Link>
    </div>
  )
}

export default Navbar
