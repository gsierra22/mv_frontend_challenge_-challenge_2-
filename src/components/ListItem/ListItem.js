import React from "react";
import { useDispatch } from "react-redux";
import { changeStatus, deleteTask } from "../../redux/taskSlice";

const ListItem = ({ id, task, completed }) => {
  const dispatch = useDispatch();

  const completeButton = () => {
    dispatch(changeStatus({ id: id, completed: !completed }));
  };

  const deleteButton = () => {
    dispatch(deleteTask({ id: id }));
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={completed}
        onChange={completeButton}
      ></input>
      {task}
      <button onClick={deleteButton}>Delete</button>
    </div>
  );
};

export default ListItem;
