import React from 'react'

function Footer() {
    return (
        <div className='mt-5 w-full'>
            <footer className='flex justify-around p-5 shadow-md'>
                <div className='text-2xl font-sans font-bold cursor-pointer'>
                    Your <span className='text-red-600'>Logo</span>
                </div>
                <div className='flex'>
                    <ul className='mx-8'>
                        <li className='mb-2 cursor-pointer font-bold'>RESOURCES</li>
                        <li className='mb-2 cursor-pointer'>Home</li>
                        <li className='mb-2 cursor-pointer'>About</li>
                    </ul>
                    <ul className='mx-8'>
                        <li className='mb-2 cursor-pointer font-bold'>FOLLOW US</li>
                        <li className='mb-2 cursor-pointer'>Github</li>
                        <li className='mb-2 cursor-pointer'>Discord</li>
                    </ul>
                    <ul className='mx-8'>
                        <li className='mb-2 cursor-pointer font-bold'>LEGAL</li>
                        <li className='mb-2 cursor-pointer'>Privacy Policy</li>
                        <li className='mb-2 cursor-pointer'>Terms & Conditions</li>
                    </ul>
                </div>
            </footer>
            <div className='flex justify-around shadow-xl p-5'>
                <p> <span className='font-bold'>@2025TahirulIslam.</span> All rights reserved.</p>
                <ul className='flex'>
                    <li className='mx-3 cursor-pointer'>Facebook</li>
                    <li className='mx-3 cursor-pointer'>Twiter</li>
                    <li className='mx-3 cursor-pointer'>Instagram</li>
                    <li className='mx-3 cursor-pointer'>Github</li>
                    <li className='mx-3 cursor-pointer'>Linkdin</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
