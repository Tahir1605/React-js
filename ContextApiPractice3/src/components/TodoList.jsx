import { UseTodoContext } from "../context/TodoContext"

const TodoList = () => {
    const {todos,handleDelete,handleCompleted,handleEdit,handleEditChange,handleCancel} = UseTodoContext();
    return(
        <div>
            <ul>
                {todos.map((item) => (
                    <li key={item.id} className="flex justify-between w-[300px] my-2">
                        
                        <input type="checkbox" checked={item.isCompleted} disabled={item.isEditable} onChange={() => handleCompleted(item.id)}/>

                       {item.isEditable ? (
                        <input type="text" className="border border-black outline-none px-2 py-1 w-[150px]" value={item.todo} onChange={(e) => handleEditChange(item.id,e.target.value)}/>
                       ) : (
                         <span className={`px-2 py-1 w-[150px] ${item.isCompleted ? 'line-through bg-gray-500': ''}`}>{item.todo}</span>
                       )}

                        <button className="border border-black px-2 py-1 cursor-pointer"
                        disabled={item.isCompleted}
                         onClick={() => handleEdit(item.id)}>{item.isEditable ? 'Save':'Edit'}</button>

                       {item.isEditable ? (
                         <button className="border border-black px-2 py-1 cursor-pointer" onClick={() => handleCancel(item.id)}>Can</button>
                       ) :(
                         <button className="border border-black px-2 py-1 cursor-pointer" onClick={() => handleDelete(item.id)}>Del</button>
                       )}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList