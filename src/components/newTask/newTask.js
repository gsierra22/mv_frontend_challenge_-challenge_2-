import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/taskSlice";

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
    <form onSubmit={inputTask}>
      <label>Please Enter a Task</label>
      <input
        type="text"
        placeholder="New Task!"
        value={newTask}
        onChange={(event) => setNewTask(event.target.value)}
      ></input>

      <button type="submit">Submit</button>
    </form>
  );
};

export default NewTask;
