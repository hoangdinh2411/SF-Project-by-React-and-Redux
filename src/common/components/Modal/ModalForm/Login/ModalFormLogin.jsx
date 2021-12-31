import { useState, useEffect, useCallback } from 'react'
import styles from './ModalFormLogin.module.css'
import { Input, Button } from '../../../../components'
import { showErrorMessageFromServer } from '../../../../hooks/'
import { useDispatch, useSelector } from 'react-redux'
import { userDataSelector } from '../../../../../redux/selector'
import { sigInRequest } from '../../../../../redux/thunk/userThunk'
function ModalFormLogin({ showModal, setShowModal }) {
    const dispatch = useDispatch();
    const { message } = useSelector(userDataSelector)
    const [fieldsInput, setFields] = useState({
        fields: {},
        errors: {},
        authError: '',
        formIsValid: false
    })


    const handleValidation = useCallback(() => {
        let fields = fieldsInput.fields;
        let errors = {};
        let formIsValid = true;
        //Email 

        if (typeof fields['email'] !== "undefined") {
            let regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
            if (!regex.test(fields['email'])) {
                formIsValid = false;
                errors['email'] = 'Please enter correct email'
            }

        }

        //Password
        if (typeof fields['password'] !== "undefined") {
            if ((fields['password'].length) < 6) {
                formIsValid = false;
                errors['password'] = 'The password must be at least 6 characters'
            }
        }

        setFields((f) => {
            return {
                ...f,
                errors,
                formIsValid: formIsValid,
            }
        })

    }, [fieldsInput.fields])

    useEffect(() => {
        handleValidation()
    }, [handleValidation])

    const handlerChange = (e) => {
        let field = e.target.name
        let fields = fieldsInput.fields;

        setFields({
            ...fieldsInput,
            fields: {
                ...fields,
                [field]: e.target.value.trim()
            }
        })

    }

    const onSubmit = (e) => {

        e.preventDefault();
        let fields = fieldsInput.fields;
        let errors = {};
        let formIsValid = true;
        if (!fields['email']) {
            formIsValid = false;
            errors['email'] = 'Please enter email'
        }

        if (!fields['password']) {
            formIsValid = false;
            errors['password'] = 'Please enter password'
        }
        setFields({
            ...fieldsInput,
            errors,
        })
        if (formIsValid) {
            const email = fieldsInput.fields['email'];
            const password = fieldsInput.fields['password'];

            //splitting code 

            dispatch(sigInRequest(email, password))
            if (message !== null) {
                const errorMessage = showErrorMessageFromServer(message)
                formIsValid = false;
                errors = errorMessage
                setFields({
                    ...fieldsInput,
                    authError: errors,
                })
            } else {
                setShowModal({
                    ...showModal,
                    isShowed: false,
                    showLoginForm: false,
                })
            }



        }
    }
    return (
        <form >
            <h1 className={styles.heading}>Login</h1>

            <div className={styles.container}>
                <span className={styles.errorMessage}>{fieldsInput.authError}</span>
                <Input
                    name="email"
                    errors={fieldsInput.errors['email']}
                    value={fieldsInput.fields['email']}
                    placeholder="Email or Username"
                    type="text"
                    variant={styles.inputBoxes}
                    onHandlerChange={handlerChange}
                />
                <Input
                    name="password"
                    errors={fieldsInput.errors['password']}
                    value={fieldsInput.fields['password']}
                    placeholder="Password"
                    type="password"
                    variant={styles.inputBoxes}
                    onHandlerChange={handlerChange}
                />
                <p>Forgot password?</p>
                <div>
                    <Button
                        name="login"
                        variant={styles.btnLogin}
                        title="Login"
                        onHandlerClick={onSubmit}
                    />
                </div>
            </div>

        </form>
    )
}

export default ModalFormLogin