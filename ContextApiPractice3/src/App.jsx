import React, { useState } from 'react';

const App = () => {
  const [task, setTask] = useState("");
  const [todo, setTodo] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === "") return;

    const newTask = {
      id:Date.now(),
      text:task.trim()
    }

    setTodo([...todo, newTask]);
    setTask("");
  };

  const handleDelete = (id) => {
    const updatedTodo = todo.filter(item => item.id !== id)
    setTodo(updatedTodo);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center px-4">
      <div className="bg-gray-700 rounded-2xl p-8 w-full max-w-xl shadow-lg">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">Todo List</h1>

        <form onSubmit={handleSubmit} className="flex gap-4 mb-6">
          <input
            type="text"
            className="flex-1 px-4 py-3 rounded-xl bg-gray-900 text-white border border-gray-600 placeholder-gray-400 text-lg outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Add a task..."
            onChange={(e) => setTask(e.target.value)}
            value={task}
          />
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 transition-all text-white font-semibold px-6 py-3 rounded-xl text-lg shadow cursor-pointer"
          >
            Add
          </button>
        </form>

         <ul className="space-y-4 max-h-80 overflow-y-auto">
          {todo.map((item) => (
            <li
              key={item.id}
              className="bg-gray-800 px-5 py-3 rounded-xl text-white text-lg border border-gray-600 flex justify-between items-center"
            >
              {item.text}
              <button
                onClick={() => handleDelete(item.id)}
                className="bg-red-500 cursor-pointer hover:bg-red-600 text-white text-sm px-3 py-1 rounded-lg transition-all"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
