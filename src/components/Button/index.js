import './Button.css';

const Button = (props) => {
    return (
        <button className='button'>
            {props.children} {/* Children: permite que você coloque o que quiser dentro do elemento, como texto ou icon */}
        </button>
    )
}

export default Button;