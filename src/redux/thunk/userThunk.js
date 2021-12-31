import {getErrorMessage } from '../actions/userAction'
import { auth, } from '../../utils/firebase';
import { signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'


export function sigInRequest(email, password) {
    return (dispatch) => {
        return signInWithEmailAndPassword(auth, email, password)
            .then(res => {
                return
            })
            .catch(error => {
                dispatch(getErrorMessage(error.message))
            })
    }
}
export function registerAccountRequest(email, password) {
    return (dispatch) => {
        return createUserWithEmailAndPassword(auth, email, password)
            .then(res => {
                return
            })
            .catch(error => {
                dispatch(getErrorMessage(error.message))
            })
    }
}
export function logOutRequest() {
    return (dispatch) => {
        return signOut(auth)
            .then(() => {
                return
            })
            .catch(error => {
                dispatch(getErrorMessage(error.message))
            })
    }
}
