import React, { useState, useEffect } from 'react';

const App = () => {
  const [task, setTask] = useState("");
  const [todo, setTodo] = useState([]);

  

  useEffect(() => {
      const gettodos = JSON.parse(localStorage.getItem("todos"))
      if(gettodos) setTodo(gettodos)
  },[])

  useEffect(() => {
      localStorage.setItem("todos",JSON.stringify(todo))
  }, [todo])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: task.trim(),
      isCompleted: false,
      isEditing: false,
    };

    setTodo([...todo, newTask]);
    setTask("");
  };

  const handleDelete = (id) => {
    setTodo(todo.filter(item => item.id !== id));
  };

  const toggleComplete = (id) => {
    setTodo(todo.map(item =>
      item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
    ));
  };

  const toggleEdit = (id) => {
    setTodo(todo.map(item =>
      item.id === id ? { ...item, isEditing: !item.isEditing } : item
    ));
  };

  const handleEditChange = (id, newText) => {
    setTodo(todo.map(item =>
      item.id === id ? { ...item, text: newText } : item
    ));
  };

  const handleCancelEdit = (id) => {
    setTodo(todo.map(item =>
      item.id === id ? { ...item, isEditing: false } : item
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center px-4 py-10">
      <div className="bg-gray-800 rounded-3xl p-8 w-full max-w-2xl shadow-2xl border border-gray-700">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">✅ Todo List</h1>

        <form onSubmit={handleSubmit} className="flex gap-4 mb-8">
          <input
            type="text"
            className="flex-1 px-5 py-3 rounded-2xl bg-gray-900 text-white border border-gray-600 placeholder-gray-400 text-lg outline-none focus:ring-2 focus:ring-green-400"
            placeholder="What do you need to do?"
            onChange={(e) => setTask(e.target.value)}
            value={task}
          />
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 transition-all text-white font-semibold px-6 py-3 rounded-2xl text-lg shadow-md"
          >
            Add
          </button>
        </form>

        <ul className="space-y-4 max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 pr-1">
          {todo.map((item) => (
            <li
              key={item.id}
              className="bg-gray-700 hover:bg-gray-600 transition-all px-5 py-4 rounded-2xl text-white text-lg border border-gray-600 flex justify-between items-center shadow"
            >
              <div className="flex items-center gap-4 flex-1">
                <input
                  type="checkbox"
                  checked={item.isCompleted}
                  onChange={() => toggleComplete(item.id)}
                  className="w-5 h-5 cursor-pointer accent-green-500"
                />
                {item.isEditing ? (
                  <input
                    type="text"
                    value={item.text}
                    onChange={(e) => handleEditChange(item.id, e.target.value)}
                    className="bg-gray-900 text-white px-4 py-2 rounded-lg border border-gray-500 w-full outline-none text-base"
                  />
                ) : (
                  <span className={`break-all ${item.isCompleted ? "line-through text-gray-400" : ""}`}>
                    {item.text}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2 ml-4">
                {item.isEditing ? (
                  <>
                    <button
                      onClick={() => toggleEdit(item.id)}
                      className="bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-2 rounded-xl transition-all"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => handleCancelEdit(item.id)}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white text-sm px-4 py-2 rounded-xl transition-all"
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => toggleEdit(item.id)}
                      disabled={item.isCompleted}
                      className={`${item.isCompleted
                          ? "bg-gray-500 cursor-not-allowed"
                          : "bg-blue-500 hover:bg-blue-600"
                        } text-white text-sm px-4 py-2 rounded-xl transition-all`}
                      title={item.isCompleted ? "Can't edit a completed task" : "Edit task"}
                    >
                      Edit
                    </button>
                  </>
                )}
                <button
                  onClick={() => handleDelete(item.id)}
                  className="bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-2 rounded-xl transition-all"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
