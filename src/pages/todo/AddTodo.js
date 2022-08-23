import React from "react";
import { db } from "../../firebase/firebase"
import { collection, addDoc } from "firebase/firestore";

export default function AddTodo() {
  const [title, setTitle] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title !== "") {
      await addDoc(collection(db, "todos"), {
        title,
        completed: false,
      });
      setTitle("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="input_container m-2 p-2 border-[0.5px] border-gray-600 rounded text-gray-500 text-lg font-bold">
        <input
        className="w-full outline-0 focus:outline-0 bg-transparent"
          type="text"
          placeholder="Enter todo..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="btn_container">
        <button className="bg-blue-700 text-white py-2 px-3 m-2 hover:bg-blue-400 rounded ">Add</button>
      </div>
    </form>
  );
}
