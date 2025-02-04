/* eslint-disable */

import { useState } from "react";

function AddToDo({ onNewItem }) {
  const [taskName, setTaskName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleTaskNameChange = (event) => {
    setTaskName(event.target.value);
  };

  const handleDueDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddClick = () => {
    if (taskName && dueDate) {
      onNewItem(taskName, dueDate);
      setTaskName("");
      setDueDate("");
    } else {
      alert("Please enter both a task and a due date.");
    }
  };

  return (
    <div className="row text-center">
      <div className="col-sm-12 col-md-6 col-lg-4">
        <input
          type="text"
          placeholder="Enter Todo"
          value={taskName}
          onChange={handleTaskNameChange}
        />
      </div>
      <div className="col-sm-12 col-md-6 col-lg-4">
        <input
          type="date"
          name="date-todo"
          id="date-picker"
          value={dueDate}
          onChange={handleDueDateChange}
        />
      </div>
      <div className="col-sm-12 col-md-12 col-lg-4">
        <button className="btn btn-success" onClick={handleAddClick}>
          ADD
        </button>
      </div>
    </div>
  );
}

export default AddToDo;
