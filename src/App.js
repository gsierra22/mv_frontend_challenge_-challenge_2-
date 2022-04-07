import logo from "./logo.svg";
import "./App.css";
import NewTask from "./components/newTask/newTask";
import List from "./components/List/List";

function App() {
  return (
    <div className="App">
      <NewTask />
      <List />
    </div>
  );
}

export default App;
