import React from "react";
import { useDispatch } from "react-redux";

const ListItem = ({ id, task, completed }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <input type="checkbox" checked={completed}></input>
      {task}
      <button>Delete</button>
    </div>
  );
};

export default ListItem;
