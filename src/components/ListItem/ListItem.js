import React from "react";
import { useDispatch } from "react-redux";
import { changeStatus, deleteTask } from "../../redux/taskSlice";
import "./ListItem.css";
import { Card, Button, Modal } from "react-bootstrap";

const ListItem = ({ id, task, completed }) => {
  const dispatch = useDispatch();

  const completeButton = () => {
    //change complete status
    dispatch(changeStatus({ id: id, completed: !completed }));
  };

  const deleteButton = () => {
    //delete a task
    dispatch(deleteTask({ id: id }));
  };

  return (
    <div className="Item">
      <Card className="Card">
        <Card.Header className="Header">{task}</Card.Header>
        <Card.Body>
          <p></p>
          {completed ? (
            <p>
              Task Complete!
              <Button className="ItemButton" onClick={completeButton}>
                Keep working!
              </Button>
            </p>
          ) : (
            <div>
              Must Finish
              <p>
                <Button className="ItemButton" onClick={completeButton}>
                  Task Completed!
                </Button>
              </p>
            </div>
          )}
          <Button className="ItemButton" onClick={deleteButton}>
            Delete!
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ListItem;
