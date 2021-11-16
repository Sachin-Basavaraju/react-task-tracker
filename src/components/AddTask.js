import { useState } from "react";

const AddTask = ({ onSubmitForm }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onFormSubmit = (e) => {
    e.preventDefault();
    onSubmitForm({ text, day, reminder });

    setText("");
    setDay("");
    setReminder(false);
  };
  return (
    <form className="addTask" onSubmit={onFormSubmit}>
      <div className="controls">
        <label htmlFor="taskText">Task</label>
        <input
          id="taskText"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add task"
        ></input>
      </div>
      <div className="controls">
        <label htmlFor="dayText">Day</label>
        <input
          id="dayText"
          type="text"
          value={day}
          onChange={(e) => setDay(e.target.value)}
          placeholder="Add date and time"
        ></input>
      </div>
      <div className="controlsCheckbox">
        <label htmlFor="reminderCheckbox">Set reminder</label>
        <input
          id="reminderCheckbox"
          checked={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
          type="checkbox"
        ></input>
      </div>
      <input type="submit" value="Save Task" className="button"></input>
    </form>
  );
};

export default AddTask;
