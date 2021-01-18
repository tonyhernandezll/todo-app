import React, { useState } from "react";
import "./todoapp.css";



function TodoApp() {
  const [task, setTask] = useState("");

  const [tasklist, setTasklist] = useState([])
  

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const AddTask = () => {

  }
  return (
    <div className="todo">
      <input 
        type="text" 
        name="text" 
        id="text" 
        onChange={(e) => handleChange(e)}
        placeholder="Add task here..."
      />
      <button className="add-btn" onClick={AddTask}>Add</button>
    
      
    </div>
  )
}

export default TodoApp