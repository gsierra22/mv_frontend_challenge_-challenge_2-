import { useState,  } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/taskSlice";
import "./NewTask.css";
import { Form } from "react-bootstrap";

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
    setNewTask('')
  };

  return (
    <Form onSubmit={inputTask}>
      <h1>
        <Form.Label>Enter a New Task! :)</Form.Label>
      </h1>
      <p></p>
      <Form.Control
        type="text"
        placeholder="New Task!"
        value={newTask}
        onChange={(event) => setNewTask(event.target.value)}
      ></Form.Control>
      <div>
        {!newTask ?
      <button disabled type="submit" className="dis">
        Submit
      </button>:
      <button type="submi" className="TaskButton">
        Submit
      </button>}
      </div>
    </Form>
  );
};

export default NewTask;
