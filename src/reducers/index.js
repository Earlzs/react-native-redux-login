
import { combineReducers } from 'redux';         //combineReducers是将应用的state进行组合。
import userReducer from './user';
//前demo中只有用户信息，所以只看到userStore这一个key，
//在一个业务复杂的应用里，需要保存很多应用和用户交互产生的信息（比如说用户聊天列表等信息）。
export default combineReducers({
    userReducer,
});
