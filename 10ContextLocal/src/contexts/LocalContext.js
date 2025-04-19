import { createContext, useContext } from "react";


export const LocalContext = createContext({
    todos : [
        {
           id:1,
           todo:"Todo msg",
           complete:false,
        }
    ],
    addTodo: (id) => {},
    deleteTodo: (id) => {},
    updateTodo: (id,todo) => {},
    todoComplete: (id) => {}
})

export const LocalContextProvider = LocalContext.Provider

export const UseLocalContext = () =>{
    return useContext(LocalContext)
}