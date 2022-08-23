import React from "react";
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import EditIcon from '@mui/icons-material/Edit';

import DeleteIcon from "@mui/icons-material/Delete";
export default function Todo({ todo, toggleComplete, handleDelete, handleEdit,}) {
  const [newTitle, setNewTitle] = React.useState(todo.title);

  const handleChange = (e) => {
    e.preventDefault();
    if (todo.complete === true) {
      setNewTitle(todo.title);
    } else {
      todo.title = "";
      setNewTitle(e.target.value);
    }
  };
  return (
    <div className="todo m-2 p-2 border-[0.5px] border-gray-600 rounded text-gray-500 text-lg font-bold flex flex-wrap justify-between">
      <input
        style={{ textDecoration: todo.completed && "line-through" }}
        type="text"
        value={todo.title === "" ? newTitle : todo.title}
        className="list outline-0 focus:outline-0 bg-transparent"
        onChange={handleChange}
      />
      <div >
        <button
          className="button-complete mr-2 text-green-600"
          onClick={() => toggleComplete(todo)}
        >
          <TaskAltIcon id="i" />
        </button>
        <button
          className="button-edit mr-2 text-yellow-600"
          onClick={() => handleEdit(todo, newTitle)}
        >
          <EditIcon id="i" />
        </button>
        <button className="button-delete mr-2 text-red-600" onClick={() => handleDelete(todo.id)}>
          <DeleteIcon id="i" />
        </button>
      </div>
    </div>
  );
}