import React, { useState } from 'react'
import { UseUserContext } from '../context/UserContext'

const Login = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const {setUser} = UseUserContext();
    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({name,email})
    }
  return (
    <div className='px-6 py-4 border border-amber-50 rounded-lg flex flex-col gap-5'>
        <input type="text" className='px-4 py-2 border border-amber-50 rounded-lg outline-none text-xl text-white' placeholder='Name' onChange={(e) => setName(e.target.value)} value={name}/> 
        <input type="text" className='px-4 py-2 border border-amber-50 rounded-lg outline-none text-xl text-white' placeholder='Email' onChange={(e) => setEmail(e.target.value)} value={email}/> 
        <button className='px-4 py-2 bg-green-500 text-xl font-semibold cursor-pointer text-white rounded-lg' onClick={handleSubmit}>Login</button>
    </div>
  )
}

export default Login