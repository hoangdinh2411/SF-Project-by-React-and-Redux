import styles from './ModalFormRegister.module.css'
import { Input, Button, Checkbox } from '../../../../components'
import { Link } from 'react-router-dom'
import { useState, useEffect, useCallback } from 'react'
import { registerAccountRequest } from '../../../../../redux/thunk/userThunk'
import { showErrorMessageFromServer } from '../../../../hooks/'
import { useSelector, useDispatch } from 'react-redux'
import { userDataSelector } from '../../../../../redux/selector'

function ModalFormRegister({ showModal, setShowModal }) {
    const dispatch = useDispatch();
    const { message } = useSelector(userDataSelector)

    const [fieldsInput, setFields] = useState({
        fields: {},
        errors: {},
        isAgreed: false,
        authError: '',
        formIsValid: false
    })



    const handleValidation = useCallback(() => {
        //Email 

        let errors = {};
        let formIsValid = true;
        let fields = fieldsInput.fields;
        if (typeof fields['email'] !== "undefined") {
            let regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
            if (!regex.test(fields['email'])) {
                formIsValid = false;
                errors['email'] = 'Please enter email'
            }

        }

        //Password
        if (typeof fields['password'] !== "undefined") {
            if ((fields['password'].length) < 6) {
                formIsValid = false;
                errors['password'] = 'The password must be at least 6 characters'
            }
        }

        if (typeof fields['password-confirmation'] !== "undefined") {
            if ((fields['password-confirmation'] !== fields['password'])) {
                formIsValid = false;
                errors['password-confirmation'] = 'The password confirmation does not match '
            }
        }

        setFields(f => {
            return {
                ...f,
                errors,
                formIsValid: formIsValid
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
    const handleChecked = () => {
        setFields({
            ...fieldsInput,
            isAgreed: !fieldsInput.isAgreed
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        let isAgreed = fieldsInput.isAgreed
        let errors = {};
        let formIsValid = true;
        let fields = fieldsInput.fields;
        if (!fields['email']) {
            formIsValid = false;
            errors['email'] = 'Please enter email'
        }

        if (!fields['password']) {
            formIsValid = false;
            errors['password'] = 'Please enter password'
        }
        if (!fields['password-confirmation']) {
            formIsValid = false;
            errors['password-confirmation'] = 'Please enter password confirmation'
        }

        if (isAgreed === false) {
            formIsValid = false;
            errors['policy'] = 'You must accept the privacy policy before registering'
        }
        setFields(f => {
            return {
                ...f,
                errors,
                formIsValid: formIsValid
            }

        })
        if (fieldsInput.formIsValid) {
            const email = fieldsInput.fields['email'];
            const password = fieldsInput.fields['password'];

            //splitting code 
            //import createUserWithEmail function when user click on button from firebase.js
            dispatch(registerAccountRequest(email, password))
            if (message !== null) {
                formIsValid = false;
                errors = showErrorMessageFromServer(message)
                setFields({
                    ...fieldsInput,
                    authError: errors,
                })

            } else {
                setShowModal({
                    ...showModal,
                    isShowed: false,
                    showRegisterForm: false,
                })
            }



        }

    }

    return (
        <form >
            <h1
                className={styles.heading}>
                Register
            </h1>
            <div className={styles.container}>
                <span className={styles.errorMessage}>{fieldsInput.authError}</span>

                <Input
                    name="email"
                    errors={fieldsInput.errors['email']}
                    value={fieldsInput.fields['email']}
                    type="text"
                    variant={styles.inputBoxes}
                    onHandlerChange={handlerChange}
                    placeholder="Enter email or username"
                />
                <Input
                    name="password"
                    errors={fieldsInput.errors['password']}
                    value={fieldsInput.fields['password']}
                    type="password"
                    variant={styles.inputBoxes}
                    onHandlerChange={handlerChange}
                    placeholder="Enter password"
                />
                <Input
                    name="password-confirmation"
                    errors={fieldsInput.errors['password-confirmation']}
                    value={fieldsInput.fields['password-confirmation']}
                    type="password"
                    variant={styles.inputBoxes}
                    onHandlerChange={handlerChange}
                    placeholder="Enter password confirmation"
                />
                <Checkbox
                    errors={fieldsInput.errors['policy']}
                    checked={fieldsInput.isAgreed}
                    onHandlerChange={handleChecked}

                >
                    I agree with the
                    <Link
                        className={styles.policyLink}
                        to="/policy"
                        target="_blank"
                        rel="policy"
                    >
                        Policy
                    </Link>
                    .
                </Checkbox>

                <div>
                    <Button
                        variant={styles.btnRegister}
                        title="Register"
                        onHandlerClick={onSubmit}

                    />
                </div>
            </div>

        </form>
    )
}

export default ModalFormRegister