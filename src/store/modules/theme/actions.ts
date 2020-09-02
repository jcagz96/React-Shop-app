import { action } from "typesafe-actions";


export function enableLightTheme(){
    return action('@theme/LIGHT');
}
export function enableDarkTheme(){
    return action('@theme/DARK');
}