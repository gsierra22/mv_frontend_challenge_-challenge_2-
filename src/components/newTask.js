import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/taskSlice";

const NewTask = () => {
  const [newTask, setNewTask] = useState("");
  const dispatch = useDispatch();

  const inputTask = (event) => {
    event.preventDefault();
    dispatch(
      addTask({
        task: newTask,
      })
    );
  };

  return (
    <form onSubmit={inputTask} className="form-inline mt-3 mb-3">
      <label className="sr-only">Name</label>
      <input
        type="text"
        className="form-control mb-2 mr-sm-2"
        placeholder="Add todo..."
        value={newTask}
        onChange={(event) => setNewTask(event.target.value)}
      ></input>

      <button type="submit" className="btn btn-primary mb-2">
        Submit
      </button>
    </form>
  );
};

export default NewTask;
