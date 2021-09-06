import Button from './Button';

const Header = ({ onClick, showAddForm }) => {
  return (
    <div>
      <header className='header'>
        <h1>Task Manager</h1>
        <Button
          color={showAddForm ? 'red' : 'green'}
          text={showAddForm ? 'Close' : 'Add'}
          onClick={onClick}
        />
      </header>
    </div>
  );
};

export default Header;
