import React, { useContext, useState } from 'react'
import UserContext from '../context/userContext'

function Login() {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
            e.preventDefault()
            setUser({username,password})
    }
    return (
        <div>
            <h1>Login</h1>
            <input type="text" placeholder='User name' value={username} onChange={(e)=>{setUsername(e.target.value)}}/> <br/> <br />
            <input type="text" placeholder='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} /> <br/> <br />
            <button onClick={handleSubmit}>Submit</button> <br/> <br />
        </div>
    )
}

export default Login
