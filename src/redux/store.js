import { createStore, combineReducers, applyMiddleware } from 'redux'
import userReducer from './reducers/userReducer'
import lessonReducer from './reducers/lessonReducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
// const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const middleware = [thunk]
const rootReducer = combineReducers({
    userInfo: userReducer,
    lessons: lessonReducer
})


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)))



export default store

