import { createContext, useContext, useEffect, useState } from "react";

const TodoContext = createContext();
export const TodoContextProvider = ({children}) => {
    const [text,setText] = useState('');
    const [todos,setTodos] = useState([]);

    useEffect(() => {
        const gettodos = JSON.parse(localStorage.getItem("todos"));
        if(gettodos !== null){
            setTodos(gettodos)
        }
    },[])

    useEffect(() => {
        localStorage.setItem("todos",JSON.stringify(todos))
    },[todos])
    
    const handleSubmit = (e) => {
          e.preventDefault();
          if(text.trim() === "") return

          const newTodo = {
            id:Date.now(),
            todo:text,
            isCompleted:false,
            isEditable:false
          }

          setTodos([...todos,newTodo])
          setText('')
    }

    const handleDelete = (id) => {
        setTodos(todos.filter((item) => item.id !== id))
    }

     const handleCompleted = (id) => {
        setTodos(todos.map((item) => item.id === id ? {...item,isCompleted:!item.isCompleted} : item));
    }

    const handleEdit = (id) => {
        setTodos(todos.map((item) => item.id === id ? {...item,isEditable:!item.isEditable} : item));
    }

    const handleEditChange = (id,newText) => {
        setTodos(todos.map((item) => item.id === id ? {...item,todo:newText} : item));
    }

    const handleCancel = (id) => {
         setTodos(todos.map((item) => item.id === id ? {...item,isEditable:!item.isEditable} : item));
    }

    const value = {
        text,
        setText,
        todos,
        handleSubmit,
        handleDelete,
        handleCompleted,
        handleEdit,
        handleEditChange,
        handleCancel
    }

       return(
        <TodoContext.Provider value={value}>
            {children}
        </TodoContext.Provider>
       )
}

export const UseTodoContext = () => useContext(TodoContext);