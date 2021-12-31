import styles from './NavbarActions.module.css'


function NavBarActions({ setShowModal }) {
    const handleShowLoginForm = () => {
        setShowModal({
            isShowed: true,
            showLoginForm: true,
            showRegisterForm: false,
        })
    }
    const handleShowRegisterForm = () => {
        setShowModal({
            isShowed: true,
            showLoginForm: false,
            showRegisterForm: true
        })
    }
    return (
        <ul className={styles.list}>
            <li className={styles.items}>
                <p to="" className={styles.links} onClick={handleShowLoginForm}>Login</p>
            </li>
            <li className={styles.items}>
                <p to="" className={styles.links} onClick={handleShowRegisterForm}>Register</p>
            </li>
        </ul>
    );
}

export default NavBarActions;