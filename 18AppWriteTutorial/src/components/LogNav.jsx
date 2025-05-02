import React from 'react'
import Logout from './Logout'
function LogNav() {
  return (
    <div className='bg-slate-800 text-white w-full h-auto font-serif font-semibold px-10 py-2 flex justify-between items-center'>
    <h2 className='text-2xl'>
        Nav<span className='text-blue-500'>bar</span>
    </h2>
    <ul className='flex'>
        <li className='mx-1 cursor-pointer px-5 py-1 rounded-md border'>
           <Logout/>
        </li>
    </ul>
</div>
  )
}

export default LogNav