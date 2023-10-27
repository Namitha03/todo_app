import { SetStateAction, useState } from "react";
import "./Todolist.css";

export default function TodoApp() {
  const [value, setValue] = useState("");
  const [task, setTask] = useState([
    {
      title: "food",
      description: "have fruits",
      isDone: true,
    },
    {
      title: "water",
      description: "have water all time",
      isDone: false,
    },
    {
      title: "sleep",
      description: "for 8 hours",
      isDone: true,
    },
  ]);

  const addTask = () => {
    setTask([...task, { title: value, description: "", isDone: true }]);
    setValue("");
  };
  const deleteTask = (index: number) => {
    const updatedTask = [...task];
    updatedTask.splice(index, 1);
    setTask(updatedTask);
  };

  const TaskDone = (index: number) => {
    const updatedTask = [...task];
    updatedTask[index].isDone = !updatedTask[index].isDone;
    setTask(updatedTask);
  };

  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    setValue(e.target.value);
  };

  return (
    <div className="App">
      <h1>TO-DO- LIST</h1>
      <input value={value} onChange={handleChange} className="input" />
      <button className="add-button" onClick={addTask}>
        Add
      </button>
      <div>
        {task.map((ele, index) => (
          <div key={index} className="task-container">
            <div className="item-container">
              <h2 className="title-description">
                {ele.title}:{ele.description}
              </h2>

              <button
                className="delete-button"
                onClick={() => deleteTask(index)}
              >
                X
              </button>

              <button
                className="done-button"
                onClick={() => TaskDone(index)}
                style={{
                  backgroundColor: ele.isDone ? "green" : "orange",
                }}
              >
                {ele.isDone ? "Done" : "Not Done"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
