import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_ERROR } from '../constants/lessonConstants'

const initialState = {
    isFetching: false,
    data: null,
    message: null
}

export default function lessonReduce(state = initialState, { type, payload }) {
    switch (type) {
        case FETCH_REQUEST:
            return { ...state, isFetching: true }
        case FETCH_SUCCESS:
            return {
                isFetching: false,
                data: payload,
                message: null
            }
        case FETCH_ERROR:
            return {
                isFetching: false,
                data: null,
                message: payload
             }

        default:
            return state
    }
}
