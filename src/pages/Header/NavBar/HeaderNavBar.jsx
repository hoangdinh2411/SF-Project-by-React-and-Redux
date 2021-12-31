import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { userDataSelector } from '../../../redux/selector';
import styles from './HeaderNavBar.module.css'

function HeaderNavBar() {
    const { userInfo } = useSelector(userDataSelector)

    return (
        <ul className={styles.list}>
            <li className={styles.items}>
                <Link to="/" className={styles.links}>Home</Link>
            </li>
            <li className={styles.items}>
                <Link to="/lessons" className={styles.links}>Lessons</Link>
            </li>
            
            <li className={styles.items}>
                <Link to="/tutorial" className={styles.links} >Tutorial</Link>
            </li>

        </ul>
    );
}

export default HeaderNavBar;