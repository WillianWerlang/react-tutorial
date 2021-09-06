import Task from './Task';

const Tasks = ({ tasks, onToggleReminder, onDelete }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onToggleReminder={onToggleReminder}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default Tasks;
