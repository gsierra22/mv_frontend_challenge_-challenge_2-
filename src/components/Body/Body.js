import { useEffect, useState } from "react";
import react from "react";
import "./Body.css";
import { Card } from "react-bootstrap";
import NewTask from "../newTask/newTask";
import List from "../List/List";

function Body(props) {
  //const [name, setName]=useState(null);
  let diamond = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-diamond-fill"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.482 1.482 0 0 1 0-2.098L6.95.435z"
      />
    </svg>
  );
  return (
    <div>
      <nav class="navbar">
        <span class="diamonds">
          {" "}
          {/* little diamond icons  */}
          {diamond}
          {diamond}
          {diamond}
          {diamond}
          {diamond}
          {diamond}
          {diamond}
          {diamond}
          {diamond}
        </span>
      </nav>
      <div className="Input-Div">
        <p></p>
        <Card className="Input-Card">
          <Card.Header className="Input-Header">To Do List</Card.Header>
          <NewTask /> {/* input componenet */}
        </Card>{" "}
        {/* list component  */}
      </div>
      <List />
    </div>
  );
}

export default Body;
