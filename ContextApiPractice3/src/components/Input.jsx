import { UseTodoContext } from "../context/TodoContext"

const Input = () => {
    const {handleSubmit,text,setText} = UseTodoContext();
    return(
        <form onSubmit={handleSubmit} className="my-4">
            <input type="text" className="border border-black outline-none px-2 py-1 w-[250px]" value={text} onChange={(e) => setText(e.target.value)}/>
            <button className="border border-black px-2 py-1 cursor-pointer">Add</button>
        </form>
    )
}
export default Input