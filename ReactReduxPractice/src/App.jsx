import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment } from './features/counter/counterSlice';

function App() {
 
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  }
  const handleDecrement = () => {
    dispatch(decrement());
  }
  return (
    <div>
      <h1>Learn Redux Toolkit</h1>
      <div className='container'>
          <button onClick={handleIncrement}>Increment</button>
           <h2>Count : {count} </h2>
          <button onClick={handleDecrement}>Decrement</button>
      </div>
    </div>
  )
}

export default App
