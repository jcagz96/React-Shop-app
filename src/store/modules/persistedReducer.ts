
import rootReducer from './rootReducer';


import  { persistReducer }  from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { Reducer } from 'react';


const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer : Reducer<any,any> = persistReducer(persistConfig,rootReducer);

export default persistedReducer;