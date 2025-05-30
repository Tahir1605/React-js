import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/userSlice';

function Login() {
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const dispatch = useDispatch();
  const handleSubmit = (e) =>{
    e.preventDefault()
    dispatch(setUser({username,password}))
  }
  return (
    <div>
       <h2>Login</h2>
       <input
        type="text"
        value={username} 
        onChange={(e) => setUsername(e.target.value)}
         placeholder='Enter Username '
         autoComplete='off' 
         required/><br /><br />
       <input type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
         /><br /><br />
       <button onClick={handleSubmit}>Login</button>
    </div>
  )
}

export default Login