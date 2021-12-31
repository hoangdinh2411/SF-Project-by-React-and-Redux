import styles from './Button.module.css'
import clsx from 'clsx'
function Button(props) {
    const { title, variant, onHandlerClick, name,refInputs} = props;
    const btnStyle = clsx(
        styles.btn,
        variant);
    return (
        <div >
            <button 
            className={btnStyle} 
            name={name} 
            onClick={(e)=>onHandlerClick(e,refInputs)} >{title}</button>
        </div>
    )
}

export default Button