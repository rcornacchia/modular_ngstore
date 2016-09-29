import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { INCREMENT, DECREMENT, RESET } from './reducers/counter';
import { AppState } from './store/AppState';
import { UserService } from './app.service';

@Component({
    selector: 'my-app',
    template: `
        <p *ngIf="todos">
            <i>Todos: {{todos}}</i>
        </p>
        <counter></counter>
        <counter2></counter2>
        <ngrx-store-log-monitor toggleCommand="ctrl-h" positionCommand="ctrl-m"></ngrx-store-log-monitor>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent {
    counter$: Observable<number>;
    user = '';
    todos = ['hello', 'there'];

    constructor(private store: Store<AppState>, userService: UserService) {
        this.counter$ = store.select<number>('counter');
        this.user = userService.userName;
        this.todos = userService.todos;
    }

    increment() {
        this.store.dispatch({ type: 'INCREMENT' });
    }

    decrement() {
        this.store.dispatch({ type: 'DECREMENT' });
    }
}
