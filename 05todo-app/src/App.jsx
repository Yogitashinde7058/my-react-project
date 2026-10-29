import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // Add Task
  function addTask() {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  // Delete Task
  function deleteTask(index) {
    setTasks(tasks.filter((item, i) => i !== index));
  }

  return (
    <div className="container">
      <h1>My Todo App</h1>

      <input
        type="text"
        placeholder="Enter your task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTask}>Add Task</button>

      {tasks.map((item, index) => (
        <div key={index}>
          <p>{item}</p>
          <button onClick={() => deleteTask(index)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;