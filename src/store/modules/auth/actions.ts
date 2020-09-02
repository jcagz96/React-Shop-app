import { action } from "typesafe-actions";


export function signInRequest({ email, password}: {email: string; password: string}, history : any){
    return action('@auth/SIGN_IN_REQUEST', {
        email,
        password,
        history
    });
}
export function signInSucess({ username, token }: {username: string | null, token : string;}){
    return action('@auth/SIGN_IN_SUCESS', {
        username,
        token
    });
}

export function signInFailure(){
    return action('@auth/SIGN_IN_FAILURE');
}