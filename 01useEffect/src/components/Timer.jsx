import { useEffect, useState } from "react"

function Timer(){
    const [seconds , setSeconds] = useState(0);

   useEffect(() => {
    const start = setInterval(() => {
        console.log("set Interval executed");
        
        setSeconds(prevSecond => prevSecond+1)
    },1000)
    return () => {
        console.log("it is stop")
         clearInterval(intervalId)
    }
   },[])

    return(
        <div>
         <h1>Seconds : {seconds}</h1>
        </div>
    )
}
export default Timer