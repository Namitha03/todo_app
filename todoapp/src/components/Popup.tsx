import React, { useState } from "react";

// New Button Component
function OpenDialogButton({ onClick }) {
  return <button onClick={onClick}>Add Element</button>;
}

// Dynamic Element Addition Component
function DynamicElementAddition() {
  const [showDialog, setShowDialog] = useState(false);
  const [newElement, setNewElement] = useState("");
  const [elements, setElements] = useState([]);

  const openDialog = () => {
    setShowDialog(true);
  };

  const closeDialog = () => {
    setShowDialog(false);
  };

  const addElement = () => {
    if (newElement.trim() !== "") {
      setElements([...elements, newElement]);
      setNewElement("");
      closeDialog();
    }
  };

  return (
    <div>
      <h1>Dynamic Element Addition</h1>
      <OpenDialogButton onClick={openDialog} />

      <ul>
        {elements.map((element, index) => (
          <li key={index}>{element}</li>
        ))}
      </ul>

      {showDialog && (
        <div className="dialog-box">
          <label htmlFor="new-element">New Element:</label>
          <input
            type="text"
            id="new-element"
            value={newElement}
            onChange={(e) => setNewElement(e.target.value)}
          />
          <button onClick={addElement}>Add</button>
          <button onClick={closeDialog}>Close</button>
        </div>
      )}
    </div>
  );
}

export default DynamicElementAddition;
