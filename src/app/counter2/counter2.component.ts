import { Component, Inject } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { AppState } from '../store/AppState';
import { UserService } from '../app.service';
import { counter2 } from './counter2.reducer';

@Component({
    selector: 'counter2',
    template: `
        <p *ngIf="user">
           <i>Welcome, {{user}}</i>
        <p>
        <p *ngIf="todos">
            <i>Todos: {{todos}}</i>
        </p>
        <h1>Counter2</h1>
        <button (click)="increment()">+</button>
        <button (click)="decrement()">-</button>
        <h3>{{counter$ | async}}</h3>
    `
})

export class CounterComponent2 {
    counter$: Observable<number>;
    user = '';
    todos = ['hello', 'there'];

    constructor(private store: Store<any>, userService: UserService) {
        console.log(store);
        this.counter$ = store.select<number>('counter2');
        this.user = userService.userName;
        userService.todos.push('test');
        this.todos = userService.todos;
    }

    increment() {
        this.store.dispatch({ type: 'INCREMENT_2' });
    }

    decrement() {
        this.store.dispatch({ type: 'DECREMENT_2' });
    }
}