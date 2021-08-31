import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      date: 'July 1st 14:00',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeting at school',
      date: 'July 3rd 18:00',
      reminder: true,
    },
    {
      id: 3,
      text: 'Food shooping',
      date: 'July 9th 15:30',
      reminder: true,
    },
  ]);

  const [showAddForm, setShowAddForm] = useState(false);

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

  const onToggleAddForm = () => {
    setShowAddForm(!showAddForm);
  };

  const onAdd = (task) => {
    var id = Math.floor(Math.random() * 1000 + 1);
    var newTask = { ...task, id };

    setTasks([...tasks, newTask]);
  };

  return (
    <div className='container'>
      <Header title='Task Tracker' onClick={onToggleAddForm} />

      {showAddForm ? <AddTask onAdd={onAdd} /> : ''}

      {tasks.length > 0 ? (
        <Tasks onDelete={onDelete} onToggle={onToggle} tasks={tasks} />
      ) : (
        'No tasks to show'
      )}
    </div>
  );
}

export default App;
