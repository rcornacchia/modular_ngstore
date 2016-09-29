import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CounterComponent2 } from './counter2.component';
import { counterRouting2 } from './counter2.routes';
import { CommonModule } from '@angular/common';
import { UserService } from '../app.service';
import { Action, ActionReducer } from '@ngrx/store';
import { StoreProvider, STORE_PROVIDER_TOKEN } from '../MyStoreModule';

export const INCREMENT_2 = 'INCREMENT_2';
export const DECREMENT_2 = 'DECREMENT_2';
export const RESET_2 = 'RESET_2';

class MyStoreProvider extends StoreProvider<number> {
    name() { return 'counter2'; }

    reducer(state: number = 0, action: Action) {
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
    }
}

@NgModule({
    declarations: [
        CounterComponent2,
    ],
    imports: [
        RouterModule,
        counterRouting2,
        CommonModule,
    ],
    exports: [ CounterComponent2 ],
    providers: [{
        provide: STORE_PROVIDER_TOKEN,
        useClass: MyStoreProvider,
        multi: true
    }]
})

export class CounterModule2 {}
