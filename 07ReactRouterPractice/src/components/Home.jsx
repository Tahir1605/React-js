import React from 'react'
import img1 from '../assets/img1.svg';
import img2 from '../assets/img2.svg';
function Home() {
    return (
        <div>
        <div className='flex justify-around items-center my-5'>
            <img src={img1} className='w-72 h-72 p-5' />
            <div>
                <h1 className='text-3xl font-bold'>Download Now</h1>
                <h2 className='text-2xl font-semibold'>Lorem ipsum.</h2>
                <button className='px-5 py-2 rounded-md my-3 font-semibold font-sans text-white bg-red-600'>Download Now</button>
            </div>
        </div>
        <div className='flex justify-center items-center'>
        <div className='my-5'>
            <img src={img2} className='w-72 h-72'/>
            <div className='flex justify-center items-center' >
            <p className='font-sans font-semibold text-3xl'>Lorem ipsum dolor.</p>
            </div>
        </div>
        </div>
        
        </div>
    )
}

export default Home
