import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type ThemeAction = ActionType<typeof actions>;

export interface ThemeState{
    dark: boolean;
}