import React from 'react'
import { Outlet } from 'react-router-dom'

function Dashboard() {
    return (
        <div>
            Dashboard page
            <Outlet/>
        </div>
    )
}

export default Dashboard
