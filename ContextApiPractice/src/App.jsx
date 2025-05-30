import { useState } from 'react'
import './App.css'
import { CounterProvider } from './context/Counter';

function App() {
  const [counter,setCounter] = useState(0);
  const increment = () => {
    setCounter(counter+1);
  }
  const decrement = () => {
    setCounter(counter-1);
  }
  return (
    <CounterProvider value={{counter,increment,decrement}}>
      <div>
        <h1>Context Api Tutorial</h1>
         <button onClick={increment}>increment</button>
         <h2>Counter : {counter}</h2>
         <button onClick={decrement}>decrement</button>
      </div>
    </CounterProvider>
  )
}

export default App
