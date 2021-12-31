import { Link } from 'react-router-dom';
import styles from './HeaderLogo.module.css'
import logo from "../../../assets/your-logo.png";
function HeaderLogo() {
    return (
        <div className={styles.wrapper} >
            <Link to="/" >
                <img src={logo} className={styles.image} title="Logo" alt="logo" />
            </Link>
        </div>
    );
}

export default HeaderLogo;