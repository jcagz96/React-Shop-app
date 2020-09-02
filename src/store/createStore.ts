import { createStore, applyMiddleware,Reducer , Middleware, compose } from 'redux';
import { AuthState, AuthAction } from './modules/auth/types';
import { CarState } from './modules/car/types';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ThemeState } from './modules/theme/types';


export interface StoreState{
    auth: AuthState;
    car: CarState;
    theme: ThemeState;
}

export type StoreAction = AuthAction;


export default (reducers: Reducer<StoreState,StoreAction>, middlewares: Middleware[]) =>{
    //const enhancer = applyMiddleware(...middlewares);

    const enhancer = compose(
        applyMiddleware(...middlewares),
        (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    )
    
    return  createStore(reducers,enhancer);

}