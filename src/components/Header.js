import { useLocation } from 'react-router';
import Button from './Button';

const Header = ({ onClick, showAddForm }) => {
  const location = useLocation();

  return (
    <div>
      <header className='header'>
        <h1>Task Manager</h1>
        {location.pathname === '/' && (
          <Button
            color={showAddForm ? 'red' : 'green'}
            text={showAddForm ? 'Close' : 'Add'}
            onClick={onClick}
          />
        )}
      </header>
    </div>
  );
};

export default Header;
