import { useState } from "react";
import "./Task.css";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { PiNotePencilFill } from "react-icons/pi";

interface Task {
  task1: [string, JSX.Element];
  task2: [string, JSX.Element];
  completed: boolean;
}

function Tasks() {
  const [dataArr, setDataArr] = useState<Task[]>([
    {
      task1: ["Have food", <MdOutlineWorkspacePremium />],
      task2: ["3 Times a day", <PiNotePencilFill />],
      completed: false,
    },
  ]);

  const [newTaskName, setNewTaskName] = useState<string>("");
  const [newTaskDescription, setNewTaskDescription] = useState<string>("");

  const addNewElement = () => {
    if (newTaskName && newTaskDescription) {
      const newElement: Task = {
        task1: [newTaskName, <MdOutlineWorkspacePremium />],
        task2: [newTaskDescription, <PiNotePencilFill />],
        completed: false,
      };

      setDataArr([newElement, ...dataArr]);
      setNewTaskName("");
      setNewTaskDescription("");
    }
  };

  const toggleTaskCompletion = (index: number) => {
    const updatedDataArr = [...dataArr];
    updatedDataArr[index].completed = !updatedDataArr[index].completed;
    setDataArr(updatedDataArr);
  };

  const deletedtask = (indexToDelete: number | undefined) => {
    const updatedDataArr = dataArr.filter(
      (_, index) => index !== indexToDelete
    );
    updatedDataArr.slice(indexToDelete, 1);
    setDataArr(updatedDataArr);
  };
  return (
    <div className="cards">
      <h1>Tasks</h1>

      <div className="add-task">
        <input
          type="text"
          placeholder="Task Name"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Task Description"
          value={newTaskDescription}
          onChange={(e) => setNewTaskDescription(e.target.value)}
        />
        <button onClick={addNewElement}>Add New Task</button>
      </div>

      {dataArr.map((data, index) => (
        <div className="card" key={index}>
          <div className="tasks">
            <span className="task-name">{data.task1[0]}</span>
            <span className="icon">{data.task1[1]}</span>
          </div>
          <div className="tasks">
            <span className="task-description">{data.task2[0]}</span>
            <span className="icon">{data.task2[1]}</span>
          </div>
          <br></br>
          <button
            onClick={() => toggleTaskCompletion(index)}
            className={data.completed ? "done-button" : "undone-button"}
          >
            {data.completed ? "Mark as done" : "Mark as undone"}
          </button>
          <button onClick={() => deletedtask(index)} className="delete-button">
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Tasks;
