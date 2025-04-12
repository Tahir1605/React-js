import { useEffect, useState } from "react"


function Counter(){
    const [count,setCount] = useState(0)
    useEffect(() => {
        console.log("i will run on rendering count",count);
        
        return () => {
            console.log("i will run on unmount count"); 
        }
    })
    return (
        <div>
         <p>Increment : {count}</p> <br />
         <button onClick={() =>{setCount(count+1)}}>Click me</button>
        </div>
    )
}

export default Counter