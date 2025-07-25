import { useCounterContext } from "./context/counter"

const App = () => {
    const {counter,increment,decrement} = useCounterContext();

    return (

        <div className="h-screen bg-gray-800 flex flex-col gap-5 items-center justify-center">
           <h1 className="text-3xl text-white font-semibold">Counter App Using Context Api</h1>
           <button className="px-4 py-2 bg-blue-400 rounded-lg text-white font-semibold cursor-pointer" onClick={increment}>Increment</button>
           <button className="px-4 py-2 bg-blue-400 rounded-lg text-white font-semibold cursor-pointer" onClick={decrement}>Increment</button>
           <h2 className="text-2xl text-white font-semibold">Counter : {counter}</h2>
        </div>
    )
}

export default App