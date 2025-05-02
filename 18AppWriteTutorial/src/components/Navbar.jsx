import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <div className='bg-slate-800 text-white w-full h-auto font-serif font-semibold px-10 py-2 flex justify-between items-center'>
            <h2 className='text-2xl'>
                Navs<span className='text-blue-500'>bar</span>
            </h2>
            <ul className='flex'>
                <Link to='/login'>
                    <li className='mx-1 cursor-pointer px-5 py-1 rounded-md'>
                        Login
                    </li>
                </Link>
                <Link to='/signup'>
                    <li className='mx-1 cursor-pointer px-5 py-1 rounded-md'>
                        Signup
                    </li>
                </Link>
            </ul>
        </div>
    )
}

export default Navbar