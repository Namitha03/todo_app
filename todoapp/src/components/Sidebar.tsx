import "./Sidebar.css";
import {
  IoIosCheckmarkCircle,
  IoIosAddCircle,
  IoMdAlbums,
  IoIosSpeedometer,
} from "react-icons/io";

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li className="list">
          <IoIosSpeedometer />
          Dashboard
        </li>
        <li className="list">
          <IoMdAlbums />
          All Tasks
        </li>
        <li className="list">
          <IoIosCheckmarkCircle />
          Compelted
        </li>
        <li className="list">
          <IoIosAddCircle />
          Add Task
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
