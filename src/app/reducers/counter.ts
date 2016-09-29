import { ActionReducer, Action } from '@ngrx/store';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

export const INCREMENT_2 = 'INCREMENT_2';
export const DECREMENT_2 = 'DECREMENT_2';
export const RESET_2 = 'RESET_2';

export const counter: ActionReducer<number> = (state: number = 0, action: Action) => {
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        case RESET:
            return 0;
        default:
            return state;
    }
};

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