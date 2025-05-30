import React from 'react'
import { useSelector } from 'react-redux'

function Profile() {
  const user = useSelector((state) => state.user.user)
  if(!user)
    {
       return <div>Please Login</div>
    }
  else
    {
       return <div> Welcome {user.username} and your password is {user.password}</div>
    }
}

export default Profile