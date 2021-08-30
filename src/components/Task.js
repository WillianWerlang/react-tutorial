import { FaTimes } from "react-icons/fa";

const Task = ({ task, onToggle, onDelete }) => {
  return (
    <div className="task" onDoubleClick={() => onToggle(task.id)}>
      <h3 key={task.id}>
        {task.text}
        <FaTimes
          onClick={() => onDelete(task.id)}
          style={{ color: "red", cursor: "pointer" }}
        />
      </h3>
      <p>{task.date}</p>
    </div>
  );
};

export default Task;
