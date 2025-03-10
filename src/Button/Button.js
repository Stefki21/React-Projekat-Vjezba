import './Button.css';

function Button (props) {
    return (
        <button type='submit' onClick={props.onSubmit} className={props.className}>{props.children}</button>
    )
}

export default Button;