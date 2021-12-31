
import { NO_USER_LOGGED_IN, GET_USER_INFO ,GET_ERROR_MESSAGES} from '../constants/userConstant'

const initialState = {
    isLoading: true,
    userInfo: null,
    message: null
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_INFO:
            return {
                message: null,
                isLoading: false,
                userInfo: action.payload,
            }
        case NO_USER_LOGGED_IN:
            return {
                ...state,
                isLoading: false,
                userInfo: null
            }
      
        case GET_ERROR_MESSAGES:
            return {
                isLoading: false,
                userInfo: null,
                message: action.payload,
            }

        default:
            return state;
    }
}


export default userReducer