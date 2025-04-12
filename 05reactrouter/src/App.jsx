import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Dashboard from "./components/Dashboard"
import Navbar from "./components/Navbar"
import Paramcom from "./components/Paramcom"
import Result from "./components/Result"
import Cources from "./components/Cources"
import Notfound from "./components/Notfound"
const router = createBrowserRouter(
  [
    {
      path:"/",
      element:
      <div>
      <Navbar/>
      <Home/>
      </div>
    },
    {
      path:"/about",
      element:
      <div>
      <Navbar/>
      <About/>
      </div>
    },
    {
      path:"/dashboard",
      element:
      <div>
      <Navbar/>
      <Dashboard/>
      </div>,
      children:[
       {
        path:'cources',
        element:<Cources/>
       },
       {
        path:'result',
        element:<Result/>
       }
      ]
    },
    {
      path:"/student/:id",
      element:
      <div>
      <Navbar/>
      <Paramcom/>
      </div>
    },
    {
      path:'*',
      element:<Notfound/>
    }
  ]
)

function App() {
  
  return (
   <div>
   <RouterProvider router={router} />
   </div>
     
  )
}

export default App
