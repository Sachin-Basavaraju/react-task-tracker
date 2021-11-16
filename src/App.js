import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState, useEffect } from "react";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTask] = useState([]);

  useEffect(() => {
    const fetchTask = async () => {
      const res = await fetch("http://localhost:5000/tasks");
      const data = await res.json();
      setTask(data);
    };

    fetchTask();
  }, []);

  const AddedTask = async (task) => {
    // const id = Math.floor(Math.random() * 1000) + 1;
    // const newTask = { id, ...task };

    const res = await fetch(`http://localhost:5000/tasks/`, {
      method: "post",
      body: JSON.stringify(task),
      headers: { "content-type": "application/json" },
    });

    const data = await res.json();

    setTask([...tasks, data]);
  };

  const DeleteTaskEvent = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "delete",
    });
    setTask(tasks.filter((task) => task.id !== id));
  };

  const ToggleTask = async (id) => {
    const datas = await fetch(`http://localhost:5000/tasks/${id}`);
    const taskNeedToBeToggle = await datas.json();

    const toggledTask = {
      ...taskNeedToBeToggle,
      reminder: !taskNeedToBeToggle.reminder,
    };
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "put",
      body: JSON.stringify(toggledTask),
      headers: { "content-type": "application/json" },
    });

    const data = await res.json();

    setTask(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  };

  const OnAddButtonClicked = () => {
    setShowAddTask(!showAddTask);
  };

  return (
    <Router>
      <div className="container">
        <Header
          title="Task Tracker"
          onClicked={OnAddButtonClicked}
          showAddTaskProp={showAddTask}
        />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <>
                {showAddTask && <AddTask onSubmitForm={AddedTask} />}
                {tasks.length > 0 ? (
                  <Tasks
                    tasks={tasks}
                    OnDeleteTask={DeleteTaskEvent}
                    OnDoubleClicked={ToggleTask}
                  ></Tasks>
                ) : (
                  "No tasks are added"
                )}
              </>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>

        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
