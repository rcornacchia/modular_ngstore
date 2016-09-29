import { OpaqueToken } from '@angular/core';
import { NgModule, Inject } from '@angular/core';
import { Store, StoreModule, combineReducers } from '@ngrx/store';
import { ActionReducer, Action } from '@ngrx/store';
import { rootReducer } from './app.store';
import { Observable } from 'rxjs/Rx'


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


export const STORE_PROVIDER_TOKEN = new OpaqueToken('StoreProvider');

export abstract class StoreProvider<T> {
    abstract name(): string;
    abstract reducer(state: T, action: Action): T;
}


export let store;
export let globalReducer;

@NgModule({
    imports: [ StoreModule.provideStore({}) ],
    providers: [
        {
            provide: "rootReducer",
            deps: [ STORE_PROVIDER_TOKEN ],
            useFactory: function(providers: StoreProvider<any>[]) {
                const obj = providers.reduce((o, provider) => {
                    o[provider.name()] = provider.reducer;
                    return o;
                }, {});

                return combineReducers(obj);
            }
        }
    ]
})


export class MyStoreModule {
    constructor(@Inject("rootReducer") private reducer) {
        console.log('starting up');
        // store = StoreModule.provideStore(reducer);
        store = new Store(null, reducer, Observable.of({}));
        console.log(store);
        globalReducer = reducer;

    }
}



