import style from './DisplayName.module.css';
import avatarDefault from '../../../../assets/avatar.png';
import SubMenubar from './SubMenubar/SubMenubar';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { userDataSelector } from '../../../../redux/selector';
function Display() {
    const { userInfo } = useSelector(userDataSelector)
    const { photoURL, displayName, email } = userInfo
    const imageLink = !photoURL ? avatarDefault : photoURL
    const userDisplayName = displayName ? displayName : email
    const displayClass = clsx({
        [style.displayText]: true,
        [style.email]: displayName === '',
        [style.name]: displayName !== ''
    })
    

    return (
        <>
            <div className={style.wrapper}>
                <div className={style.avatarContainer} >
                    <img className={style.avatar} src={imageLink} title={displayName} alt="user avatar" />
                </div>
                <p className={displayClass}>{userDisplayName}</p>
                <div className={style.subMenubar}>
                    <SubMenubar />
                </div>
            </div>
        </>
    )
}

export default Display