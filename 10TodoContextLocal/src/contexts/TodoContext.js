import { useContext } from "react";
import { createContext } from "react";


export const TodoContext = createContext({
    todos : [
        {
            id : 1,
            todo : "hello",
            completed : false,
        },
    ],
    addTodo: (todo) => {},
    deleteTodo: (id) => {},
    updateTodo: (id,todo) => {},
    toggleComplete: (id) => {}
})



// Type -> 1 Provider

export const TodoProvider = TodoContext.Provider


// Type -> 2 Provider

//const TodoProvider = TodoContext.Provider
// export TodoProvider



// Type -> 1 UseContext

export const useTodo = () =>{
    return useContext(TodoContext)
}



// Type -> 2 UseContext

// export default function useTodo(){
//     return useContext(TodoContext)
// }

// Type -> 3 UseContext

// function useTodo(){
//     return useContext(TodoContext)
// }

// export default useTodo