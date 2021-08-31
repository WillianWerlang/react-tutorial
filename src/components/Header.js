import Button from './Button';

const Header = (props) => {
  return (
    <div>
      <header className='header'>
        <h1>{props.title}</h1>
        <Button color='green' text='Add' onClick={props.onClick} />
      </header>
    </div>
  );
};

export default Header;
