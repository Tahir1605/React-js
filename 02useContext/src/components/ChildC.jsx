import { useContext } from "react"
import { UserContext } from "../App"



function ChildC(){ 
  const user = useContext(UserContext)
    return(
        <> 
         {user}
        </>
    )
}

export default ChildC