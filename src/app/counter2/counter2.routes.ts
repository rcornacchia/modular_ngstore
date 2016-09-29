import { RouterModule, Route } from '@angular/router';
import { CounterComponent2 } from './counter2.component';

export const counterRoutes2:Route[] = [
    {
        path: '/counter2',
        component: CounterComponent2
    }
];

export const counterRouting2 = RouterModule.forChild(counterRoutes2);