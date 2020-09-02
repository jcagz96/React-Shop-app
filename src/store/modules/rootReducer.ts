import { combineReducers } from 'redux';

import authReducer from './auth/reducer';
import carReducer from './car/reducer';
import themeReducer from './theme/reducer';

import { StoreState } from '../createStore';
import  persistedReducer from './persistedReducer';


export default combineReducers<StoreState>({
    auth: authReducer,
    car: carReducer,
    theme: themeReducer
});
