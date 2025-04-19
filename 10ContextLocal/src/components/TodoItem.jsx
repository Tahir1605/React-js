import React, { useState } from 'react'
import { UseLocalContext } from '../contexts/LocalContext'

function TodoItem({ todo }) {
    const [todoMsg, setTodoMsg] = useState(todo.todo)
    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const { deleteTodo, updateTodo, todoComplete } = UseLocalContext()

    const editTodo = () => {
        updateTodo(todo.id, { ...todo, todo: todoMsg })
        setIsTodoEditable(false)
    }

    const toggle = () => {
        todoComplete(todo.id)
    }

    return (
        <div className={`px-3 py-1.5  rounded-md text-black font-semibold flex items-center my-5 justify-between ${todo.complete ? "bg-green-300" : "bg-slate-300"} `}>
            <div>
                <input type="checkbox" className='cursor-pointer'
                    checked={todo.complete}
                    onChange={toggle}
                />
                <input type="text" className={`outline-none rounded-md bg-transparent px-3 py-1 ${isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                    } ${todo.complete ? "line-through" : ""}`}
                    readOnly={!isTodoEditable}
                    value={todoMsg}
                    onChange={(e) => setTodoMsg(e.target.value)}
                />
            </div>
            <div className='flex gap-2'>
                <button
                    onClick={() => {
                        if (todo.complete) return
                        if (isTodoEditable) {
                            editTodo()
                        }
                        else {
                            setIsTodoEditable((prev) => !prev)
                        }
                    }}
                    disabled={todo.completed}
                >{isTodoEditable ? "📁" : "✏️"}</ button>
                <button onClick={() => deleteTodo(todo.id)}>❌</button>
            </div>
        </div>
    )
}

export default TodoItem
