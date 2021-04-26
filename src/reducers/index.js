import { combineReducers } from 'redux'
import reducerNews from './reducer_news'
import reducerLogin from './reducer-login'

export default combineReducers({
    reducerNews,
    reducerLogin
})