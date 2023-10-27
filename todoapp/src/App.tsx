// import React from "react";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Tasks from "./components/Tasks";
import "./App.css";
// import TodoApp from "./components/Todolist";
// import Button from "./components/Button";

const App = () => {
  return (
    <>
      <div className="navbarContainer">
        <Navbar />
      </div>
      <div className="bodyContainer">
        <Sidebar />
        <Tasks />
      </div>
      {/* <div className="Add-btn">
        <Button />
      </div> */}
    </>
  );
};

export default App;
