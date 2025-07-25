import { createContext, useContext, useState } from "react";

const CounterContext = createContext();

export const CounterProvider = ({children}) => {
    const [counter,setCounter] = useState(0);
    const increment = () => {
        setCounter(counter + 1);
    }
    const decrement = () => {
        setCounter(counter - 1);
    }

    const value = {
        counter,
        increment,
        decrement
    }

    return (
        <CounterContext.Provider value={value}>
            {children}
        </CounterContext.Provider>
    )
}

export const useCounterContext = () => useContext(CounterContext);