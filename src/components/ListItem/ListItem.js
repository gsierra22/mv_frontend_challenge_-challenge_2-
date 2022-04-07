import React from "react";
import { useDispatch } from "react-redux";
import { changeStatus } from "../../redux/taskSlice";

const ListItem = ({ id, task, completed }) => {
  const dispatch = useDispatch();

  const completeButton = () => {
    dispatch(changeStatus({ id: id, completed: !completed }));
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={completed}
        onChange={completeButton}
      ></input>
      {task}
      <button>Delete</button>
    </div>
  );
};

export default ListItem;
