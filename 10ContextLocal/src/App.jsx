import { useEffect, useState } from "react"
import { LocalContextProvider } from "./contexts/LocalContext"
import TodoForm from "./components/TodoForm"
import TodoItem from "./components/TodoItem"

function App() {

  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  const todoComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? { ...prevTodo, complete:!prevTodo.complete} : prevTodo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <LocalContextProvider value={{ todos, addTodo, deleteTodo, updateTodo, todoComplete }}>
      <div className="bg-slate-800 h-screen w-full flex justify-center">
        <div>
          <div className="bg-slate-600 p-5 rounded-md my-10">
            <div className="my-3">
              <TodoForm />
            </div>
            <div>
             {todos.map((todo) => (
               <div key={todo.id} className="w-full">
                <TodoItem todo={todo}/>
               </div>
             ))}
            </div>
          </div>
        </div>
      </div>
    </LocalContextProvider>
  )
}

export default App
