import { NO_USER_LOGGED_IN, GET_USER_INFO, GET_SIGN_IN_USER,GET_ERROR_MESSAGES } from '../constants/userConstant'



export const getUserInfo = (data)=>{
    return {
        type: GET_USER_INFO, 
        payload: data
    }
}
export const noUserLoggedIn = ()=>{
    return {
        type: NO_USER_LOGGED_IN
    }
}

export const getErrorMessage = (data)=>{
    return {
        type: GET_ERROR_MESSAGES,
        payload:data
    }
}



