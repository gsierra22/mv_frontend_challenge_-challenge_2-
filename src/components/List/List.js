import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ListItem from "../ListItem/ListItem";

const List = (props) => {
  const tasks = useSelector((state) => state.tasks);

  return (
    <div>
      {tasks.map((tasks) => (
        <ListItem id={tasks.id} task={tasks.task} completed={tasks.completed} />
      ))}
    </div>
  );
};

export default List;
