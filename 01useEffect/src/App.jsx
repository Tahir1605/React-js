
import { useEffect, useState } from 'react';
import './App.css'
import Counter from './components/Counter';
import Timer from './components/Timer';

function App() {
// const [count,setCount] = useState(0);
// const [counter,setCounter] = useState(20);
// combination 1 -> it is run on every render
// useEffect(() => {
//    alert("i will run on every render")
// })

// combination 2 -> it is run on first render
// useEffect(() => {
//    alert('i will run on first render')
// },[])

// combination 3 -> it is run only when counter updated

// useEffect(()=>{
//   alert('i will run when count will be updated')

// },[count])

// combination 4 -> it is run on multiple dependencies

// useEffect(()=>{
//   alert('i will run when count will be updated')

// },[count,counter])

// combination 5 -> let's write cleanup code

// useEffect(()=>{
//   alert('i will run when count will be updated')

//   return () => {
//     alert('count is unmounted')
//   }

// },[count])

// function changeCounter()
// {
//   setCount(count+1)
// }
// function changeCounter1()
// {
//   setCounter(counter-1)
// }

  return (
    // <div>
    //  <p>Increment : {count}</p> <br />
    //  <button onClick={changeCounter}>Click 1</button> <br /> <br />
    //  <p>Decrement : {counter}</p> <br />
    //  <button onClick={changeCounter1}>click 2</button>
    // </div>


    <div>
      {/* <Counter/> */}
      <Timer/>
    </div>
  );
}

export default App
