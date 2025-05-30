import { useContext,createContext } from "react";



export const CounterContext = createContext({
    counter : 0,
    increment : () => {},
    decrement : () => {},
})

export const CounterProvider = CounterContext.Provider

export default function useCounter(){
    return useContext(CounterContext)
}