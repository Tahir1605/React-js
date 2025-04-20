import AddTodo from "./components/AddTodo"
import Todos from "./components/Todos"

function App() {

  return (
    
    <>
   
   <div className="flex justify-center">
   <AddTodo/>
   </div>
  <div className="mx-44">
  <Todos/>
  </div>
    </>
  )
}

export default App
