import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { AppState } from '../store/AppState';
import { UserService } from '../app.service';
import { counter } from './counter.reducer';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

@Component({
    selector: 'counter',
    template: `
        <h1>Counter1</h1>
        <button (click)="increment()">+</button>
        <button (click)="decrement()">-</button>
        <h3>{{counter$ | async}}</h3>
    `
})

export class CounterComponent {
    counter$: Observable<number>;

    constructor(private store: Store<AppState>, userService: UserService) {
        this.counter$ = store.select<number>('counter');
        userService.reducers.push(counter);
    }

    increment() {
        this.store.dispatch({ type: 'INCREMENT' });
    }

    decrement() {
        this.store.dispatch({ type: 'DECREMENT' });
    }
}