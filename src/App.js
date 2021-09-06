import { useState, useEffect } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [tasks, setTasks] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };

    getTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json();
    return data;
  };

  const onToggleAddForm = () => {
    setShowAddForm(!showAddForm);
  };

  const onAdd = (task) => {
    var id = Math.floor(Math.random() * 1000 + 1);
    var newTask = { ...task, id };

    setTasks([...tasks, newTask]);
  };

  const onDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const onToggle = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className='container'>
      <Header
        title='Task Tracker'
        onClick={onToggleAddForm}
        showAddForm={showAddForm}
      />

      {showAddForm && <AddTask onAdd={onAdd} />}

      {tasks.length > 0 ? (
        <Tasks onDelete={onDelete} onToggle={onToggle} tasks={tasks} />
      ) : (
        'No tasks to show'
      )}
    </div>
  );
}

export default App;
