import '../stylesheets/buttons.css'

export default function Buttons({ text, isAClickable, handleClick }) {
    //Instead of using props.text, we can directly use text by destructuring it in the parameter list of the function.
    return (
        <button
            className={ isAClickable ? "clickable" : "reset-counter" }
            onClick={ handleClick }
        >
            {text}
        </button>
    )
}
