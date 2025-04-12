import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    return (
        // <div>
        //     <ul>
        //         <li>
        //             <Link to='/' >Home</Link>
        //         </li>
        //         <li>
        //             <Link to='/about'>About</Link>
        //         </li>
        //         <li>
        //             <Link to='/dashboard'>Dashboard</Link>
        //         </li>
        //     </ul>
        // </div>

        <div className='navbar'>
        <ul>
            <li>
                <NavLink to='/' className={({isActive}) => isActive ? "active-link":"" } id='link-text'>Home</NavLink>
            </li>
            <li>
                <NavLink to='/about' className={({isActive}) => isActive ? "active-link":"" } id='link-text'>About</NavLink>
            </li>
            <li>
                <NavLink to='/dashboard' className={({isActive}) => isActive ? "active-link":"" } id='link-text'>Dashboard</NavLink>
            </li>
        </ul>
    </div>
    )
}

export default Navbar
