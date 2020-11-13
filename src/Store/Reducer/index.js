import {combineReducers} from 'redux'
import Home_reducer from './Home_reducer'
import Mobile_reducer from './Mobile.reducer'

export default combineReducers ({
    Home: Home_reducer,
    Mobile: Mobile_reducer
})