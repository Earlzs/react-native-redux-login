'use strict';


import { applyMiddleware, createStore } from 'redux';
// import thunk from 'redux-thunk';
// import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import reducers from '../reducers';
import thunk from 'redux-thunk'


const creatStoreWithMiddleware = applyMiddleware(thunk)(createStore);  //applyMiddleware添加中间件处理异步函数
const configureStore = () => {
    return creatStoreWithMiddleware(reducers)
}

const store = configureStore()
export default store;


