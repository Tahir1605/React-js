import React from 'react'
import { UseUserContext } from '../context/UserContext'

const Info = () => {
    const { user } = UseUserContext();

    if (!user) {
        return (
            <div className='text-2xl text-white font-semibold'>Please Login !</div>
        )
    } else {
        return (
            <div className='text-2xl text-white font-semibold'>
                <h1>Welcome {user.name} ! </h1>
                <h1>Your Email is {user.email} </h1>
            </div>
        )
    }
}

export default Info