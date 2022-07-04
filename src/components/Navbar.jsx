import React from 'react'
import { Link } from 'react-router-dom'
import Home from './Home'

function Navbar() {
    return (
        <ul className='nav'>
            <li>
            <Link to='/'>
            Homepage
            </Link>
            </li>
            <li><Link to='/tools'>
           Tools
            </Link>
            </li>
            <li>
            <Link to='/my-choices'>
            My choices
            </Link>
            </li>
            <li>
            <Link to='/websites-to-follow'>
           Websites to follow
            </Link>
            </li>
            <li>
            <Link to='/seytech'>
          Seytech
            </Link>
            </li>
        </ul>
    )
}

export default Navbar
