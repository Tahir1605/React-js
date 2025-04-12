import React from 'react'

function Contact() {
    return (
        <div>
           <div className='flex justify-center items-center my-24'>
            <div className='mx-10 bg-slate-200 p-10 rounded-md'>
                <h1 className='font-bold text-3xl mb-2'>Get in touch : </h1>
                <p className='mb-5 font-semibold'>Fill in the form to start conversation</p>
                <ul className='flex my-3'>
                    <li className='mr-7'>&#128205;</li>
                    <li className='mr-5 font-semibold'>Memari , Purba Bardhaman</li>
                </ul>
                <ul className='flex my-3'>
                    <li className='mr-5'>&#128222;</li>
                    <li className='mr-5 font-semibold'>+91 9647938735</li>
                </ul>
                <ul className='flex my-3'>
                    <li className='mr-5'>&#9993;</li>
                    <li className='mr-5 font-semibold'>5566tahirul@gmail.com</li>
                </ul>
            </div>
            <div className='mx-10 p-10'>
                <form>
                    <div>
                    <input type="text" name="name" id="name" placeholder='Full Name' autoComplete='off' className='px-10 py-2 outline-none border-2 border-blue-950 rounded-md mb-5'/>
                    </div>
                    <div>
                    <input type="email" name="email" id="email" placeholder='Email' autoComplete='off' className='px-10 py-2 outline-none border-2 border-blue-950 rounded-md mb-5' />
                    </div>
                    <div>
                    <input type="text" name="number" id="number" placeholder='Mobile' autoComplete='off' className='px-10 py-2 outline-none border-2 border-blue-950 rounded-md mb-5' />
                    </div>
                    <button className='px-6 bg-red-600 py-2 rounded-md text-white font-semibold'>Submit</button>
                </form>
            </div>
           </div>
        </div>
    )
}

export default Contact
