import "./App.css";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState(["Enter a note in the box below !"]);
  const [itemValue, setItemValue] = useState("");
  return (
    <div className="App">
      <Header />
      <div className="container">
      <div className = "task-list">
        {tasks.map((task, index) => {
          return (
            <TaskList
              note={task}
              key={index}
              id={index}
              tasks={tasks}
              setTasks={setTasks}
            />
          );
        })}
</div>
        <AddTask
          setItemValue={setItemValue}
          itemValue={itemValue}
          setTasks={setTasks}
          tasks={tasks}
        />
      </div>
      <Footer />
    </div>
  );
};

export default App;
