import style from './Modal.module.css'
import { ModalFormLogin } from '../'
import { ModalFormRegister } from '../'
function Modal({ children, showModal, setShowModal }) {

    const handleClose = () => {
        setShowModal({
            isShowed: false,
            showLoginForm: false,
            showRegisterForm: false
        })
    }
    return (
        <div >
            <div className={style.body} >
                <div
                    className={style.overlay}
                    onClick={handleClose} >
                </div>
                <div className={style.form}>
                    {
                        (
                            (showModal.showLoginForm &&
                                <ModalFormLogin showModal={showModal} setShowModal={setShowModal} />)
                            || null
                        )
                        ||
                        (

                            (showModal.showRegisterForm &&
                                <ModalFormRegister showModal={showModal} setShowModal={setShowModal} />)
                            || null
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Modal