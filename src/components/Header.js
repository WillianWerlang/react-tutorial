import Button from './Button'

const Header = (props) => {
    const onClick = (e) => {
        console.log('Click');
        console.log(e);
    }

    return (
        <div>
            <header className='header'>
                <h1>{props.title}</h1>
                <Button color='green' text='Add' onClick={onClick} />
            </header>
        </div>
    )
}

export default Header
