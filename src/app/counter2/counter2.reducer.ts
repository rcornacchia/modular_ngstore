import { ActionReducer, Action } from '@ngrx/store';
import { UserService } from '../app.service';

export const INCREMENT_2 = 'INCREMENT_2';
export const DECREMENT_2 = 'DECREMENT_2';
export const RESET_2 = 'RESET_2';

export const counter2: ActionReducer<number> = (state: number = 0, action: Action) => {
    switch (action.type) {
        case INCREMENT_2:
            return state + 1;
        case DECREMENT_2:
            return state - 1;
        case RESET_2:
            return 0;
        default:
            return state;
    }
};