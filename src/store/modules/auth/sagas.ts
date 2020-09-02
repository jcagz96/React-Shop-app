import { takeLatest, call, put, all } from 'redux-saga/effects';
import { ActionType, action } from 'typesafe-actions';
import * as actions from './actions';
import api from '../../../services/api';
//import history from '../../../services/history';



export function* signIn({ payload }  : ActionType<typeof actions.signInRequest>){
    try {
        const { email, password, history } = payload;


        const { data } = yield call(api.post, 'signin', { email, password });

        if(data.error){
            return;
        }

        
        
        yield put(actions.signInSucess({ username: data.username, token : data.token }))
        yield call(history.push, '/homepage');
        //history.push('/create-point');
    } catch (error) {
        yield put(actions.signInFailure());
    }

}

export default all([
    takeLatest('@auth/SIGN_IN_REQUEST', signIn)
]);