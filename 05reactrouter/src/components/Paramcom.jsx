import React from 'react'
import { useParams } from 'react-router-dom'

function Paramcom() {
    const {id} = useParams()
    return (
        <div>
        Params : {id}
        </div>
    )
}

export default Paramcom
