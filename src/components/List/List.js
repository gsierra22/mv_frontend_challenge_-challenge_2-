import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ListItem from "../ListItem/ListItem";
import "./List.css";

const List = (props) => {
  const tasks = useSelector((state) => state.tasks); //tasks store

  return (
    <div>
      <h1>My Tasks!</h1>
      <div className="List-Card">
        {/* map through listItem */}
        {tasks.map((tasks) => (
          <ListItem
            id={tasks.id}
            task={tasks.task}
            completed={tasks.completed}
          />
        ))}
      </div>
    </div>
  );
};

export default List;
