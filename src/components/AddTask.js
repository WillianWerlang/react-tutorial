import { useState } from 'react';

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [date, setDate] = useState('');
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert('Please enter a Task');
      return;
    }

    setText('');
    setDate('');
    setReminder(false);

    onAdd({ text, date, reminder });
  };

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Task</label>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type='text'
          placeholder='Add Task'
        />
      </div>
      <div className='form-control'>
        <label>Date Time</label>
        <input
          value={date}
          onChange={(e) => setDate(e.target.value)}
          type='text'
          placeholder='Add Date Time'
        />
      </div>
      <div className='form-control form-control-check'>
        <label>Set Reminder</label>
        <input
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
          type='checkbox'
        />
      </div>
      <input type='submit' value='Add Task' className='btn btn-block' />
    </form>
  );
};

export default AddTask;
