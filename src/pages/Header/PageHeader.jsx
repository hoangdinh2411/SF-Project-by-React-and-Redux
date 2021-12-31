import style from './PageHeader.module.css'
import HeaderLogo from "./Logo/HeaderLogo"
import HeaderNavBar from "./NavBar/HeaderNavBar"
import NavbarActions from "./NavBar/Actions/NavbarActions"
import Display from "./NavBar/DisplayName/Display"
import { useSelector } from 'react-redux'
import { userDataSelector } from '../../redux/selector'
// React bootstrap

function PageHeader({ setShowModal }) {
    const { userInfo } = useSelector(userDataSelector)

    return (
        <div className={style.wrapper}>
            <div className={style.menuTop}>
                <div className={style.logoContainer}>
                    <HeaderLogo />
                </div>
                <HeaderNavBar />
                <div className={style.navbarActionContainer}>
                    {
                        (userInfo  &&
                            <Display />
                        ) ||
                        <NavbarActions setShowModal={setShowModal} />
                    }
                </div>
            </div>
        </div>
    )
}

export default PageHeader