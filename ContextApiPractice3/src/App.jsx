import Input from "./components/Input"
import TodoList from "./components/TodoList"

const App = () => {
  return(
    <div>
      <div className="m-10">
        <Input/>
        <TodoList/>
      </div>
    </div>
  )
}
export default App