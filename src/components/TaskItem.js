import { FaTimes } from "react-icons/fa";

const TaskItem = ({ task, OnDelete, DoubleClicked }) => {
  return (
    <div
      className={task.reminder ? `taskItem reminder` : `taskItem`}
      onDoubleClick={() => DoubleClicked(task.id)}
    >
      <div>
        <h2>
          {task.text}{" "}
          <FaTimes
            onClick={() => OnDelete(task.id)}
            style={{ color: "red", cursor: "pointer" }}
          />
        </h2>
        <h5>{task.day}</h5>
      </div>
    </div>
  );
};

export default TaskItem;
