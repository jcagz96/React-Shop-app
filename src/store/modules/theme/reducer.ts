import { ThemeState, ThemeAction } from './types';

const initialState : ThemeState = {
    dark: false
}

export default function theme(state = initialState, action : ThemeAction) : ThemeState{
    switch(action.type){
        case "@theme/LIGHT":
            return{
                ...state,
                dark: false,             
            }
        case "@theme/DARK":
            return{
                ...state,
                dark: true,    
            }    
        default:
            return state;
    }
}