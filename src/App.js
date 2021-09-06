import { useState, useEffect } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [tasks, setTasks] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    const getTasks = async () => {
      setTasks(await fetchTasks());
    };

    getTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json();
    return data;
  };

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    return data;
  };

  const onAdd = async (task) => {
    await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(task),
    });

    setTasks(await fetchTasks());
  };

  const onDelete = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, { method: 'DELETE' });

    setTasks(await fetchTasks());
  };

  const onToggleReminder = async (id) => {
    const task = await fetchTask(id);
    task.reminder = !task.reminder;

    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(task),
    });

    setTasks(await fetchTasks());
  };

  const onToggleAddForm = () => {
    setShowAddForm(!showAddForm);
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
        <Tasks
          onDelete={onDelete}
          onToggleReminder={onToggleReminder}
          tasks={tasks}
        />
      ) : (
        'No tasks to show'
      )}
    </div>
  );
}

export default App;
