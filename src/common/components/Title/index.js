import styles from './Title.module.css'
function Title({text}) {

    return (
        <div className={styles.container}>
            <p className={styles.text}>{text}</p>
        </div>
    )
}

export default Title
