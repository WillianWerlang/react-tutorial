import { useState } from 'react' 
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        text: 'Doctors Appointment'
      },
      {
        id: 2,
        text: 'Meeting at school'
      },
      {
        id: 3,
        text: 'Something something'
      }
    ]
  )

  return (
    <div className="container">
      <Header title='Task Tracker' />
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
