import UserData from './UserData';
import UserId from './UserId';
import {combineReducers} from 'redux';

const rootReducer=combineReducers({
    datas:UserData,
    userdata:UserId
})

export default rootReducer