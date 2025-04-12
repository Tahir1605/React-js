import { createContext} from 'react'
import './App.css'
import ChildA from './components/ChildA'

// step -> 1 create context  and export it
// step -> 2 Wrap child content inside a provider
// step -> 3 pass Value
// step -> 4 jar dorkar se ei value ta consume kore nebe

const UserContext = createContext()

function App() {
 
  return (
 <>
 <UserContext.Provider value = "Tahirul islam">
  <ChildA/>
 </UserContext.Provider>
 </>
  )
}

export default App
export {UserContext}


