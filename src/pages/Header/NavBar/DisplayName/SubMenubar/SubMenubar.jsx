import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { userDataSelector } from '../../../../../redux/selector'
import { logOutRequest } from '../../../../../redux/thunk/userThunk'
import styles from './SubMenubar.module.css'


function SubMenubar() {
    const { userInfo } = useSelector(userDataSelector)

    const dispatch = useDispatch()
    const handleSignOut = () => {
        dispatch(logOutRequest())
    }
    return (
        <ul className={styles.list}>
            <li className={styles.items}>
                <Link className={styles.itemLinks} to={`/${userInfo.uid}/profile`}>Profile</Link>
            </li>
            <li className={styles.items}>
                <Link className={styles.itemLinks} to={`/setting`} >Setting</Link>
            </li>
            <li className={styles.items}>
                <p to="" className={styles.itemLinks} onClick={handleSignOut}>Sign Out</p>
            </li>
        </ul>
    )
}

export default SubMenubar