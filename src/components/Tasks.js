import TaskItem from "./TaskItem";

const Tasks = ({ tasks, OnDeleteTask, OnDoubleClicked }) => {
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          OnDelete={OnDeleteTask}
          DoubleClicked={OnDoubleClicked}
        ></TaskItem>
      ))}
    </div>
  );
};

export default Tasks;
