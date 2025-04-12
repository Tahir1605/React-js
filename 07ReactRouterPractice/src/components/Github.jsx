import React, { useState,useEffect } from 'react'
function Github() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/Tahir1605')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(data)
            })
    }, [])
    return (
        <div>
        <h1 className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
        Github followers : {data.followers}
        </h1>
        <div className='flex justify-center items-center'>
        <img src={data.avatar_url} alt="Git picture" width={300}  className='rounded-md'/>
        </div>
        </div>
    )
}

export default Github
