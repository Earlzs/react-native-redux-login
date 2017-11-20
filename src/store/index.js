'use strict';


import { applyMiddleware, createStore } from 'redux';

import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import reducers from '../reducers';
import thunk from 'redux-thunk'


const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);  //applyMiddleware添加中间件处理异步函数

function configureStore(onComplete: ? () => void) {
    const store = autoRehydrate()(createStoreWithMiddleware)(reducers);
    persistStore(store, {
        storage: AsyncStorage
    }, onComplete);

    return store;
}

export default configureStore;


