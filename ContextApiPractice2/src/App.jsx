import Info from "./components/Info"
import Login from "./components/Login"


function App() {

  return (
    <div className="bg-gray-800 h-screen flex justify-center items-center flex-col gap-5">
      <Login/>
      <Info/>
    </div>
  )
}

export default App
