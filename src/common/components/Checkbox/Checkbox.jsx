import styles from './Checkbox.module.css'

function Checkbox({ children, errors, checked, onHandlerChange }) {
    return (
        <label className={styles.containers}>
            <p className={styles.content}>
                <input type="checkbox" className={styles.checkBoxes} checked={checked} onChange={onHandlerChange} />
                {
                    children
                }
            </p>
            <br />
            <span className={styles.errorMessage}>{errors}</span>
        </label>
    )
}

export default Checkbox