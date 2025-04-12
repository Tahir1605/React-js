import { useState } from "react"
import Login from "./components/Login"
import Logout from "./components/Logout"


function App() {
  const [islogin,setLogin] = useState(false)


  return(
    <div>
      {islogin?<Login/>:<Logout/>}
    </div>
  )

  // if(islogin){
  //   return(
  //     <div>
  //       <Login/>
  //     </div>
  //   )
  // }
  // else{
  //   return(
  //     <div>
  //       <Logout/>
  //     </div>
  //   )
  // }
}

export default App
