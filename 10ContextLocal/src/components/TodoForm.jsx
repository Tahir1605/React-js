import React, { useState } from 'react'
import { UseLocalContext } from '../contexts/LocalContext'

function TodoForm() {
   const [todo,setTodo] = useState("")
   const {addTodo} = UseLocalContext()
   function add(e){
      e.preventDefault()
      if(!todo) return
      addTodo({todo,complete:false})
      setTodo("")
   }
    return (
        <div>
            <form className='flex' onSubmit={add}>
                <input
                 type="text"
                 placeholder='Write Todo ...'
                 value={todo}
                 onChange={(e) => setTodo(e.target.value)}
                 className='outline-none rounded-l-md px-5 py-2 w-80 bg-slate-500 text-white font-semibold'
                />
                <button className='px-5 py-2 bg-green-700 rounded-r-md font-semibold text-white'>Add</button>
                
            </form>
        </div>
    )
}

export default TodoForm
