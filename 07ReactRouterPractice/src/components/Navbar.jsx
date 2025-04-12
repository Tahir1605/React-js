import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <nav className='flex justify-around p-3 items-center shadow-md'>
                <div className='font-sans font-bold text-2xl cursor-pointer'>
                 Your <span className='text-red-600 cursor-pointer'>Logo</span>
                </div>
                <ul className='flex'>
                    <li className='mx-4 font-semibold font-sans cursor-pointer'>
                        <NavLink to='/' className={({isActive}) => isActive?"text-red-600":""}>Home</NavLink>
                    </li>
                    <li className='mx-4 font-semibold font-sans cursor-pointer'>
                        <NavLink to='/about' className={({isActive}) => isActive?"text-red-600":""}>About</NavLink>
                    </li>
                    <li className='mx-4 font-semibold font-sans cursor-pointer'>
                        <NavLink to='/contact' className={({isActive}) => isActive?"text-red-600":""}>Contact</NavLink>
                    </li>
                    <li className='mx-4 font-semibold font-sans cursor-pointer'>
                        <NavLink to='/github' className={({isActive}) => isActive?"text-red-600":""}>Github</NavLink>
                    </li>
                </ul>
                <ul className='flex items-center'>
                    <li className='mx-3 font-semibold font-sans text-xl cursor-pointer'>Login</li>
                    <li className='mx-3 bg-red-600 py-2 px-3 rounded-md text-white font-semibold font-sans cursor-pointer'>Get Started</li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
