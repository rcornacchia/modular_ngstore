import { RouterModule, Route } from '@angular/router';
import { CounterComponent } from './counter.component';

export const counterRoutes:Route[] = [
    {
        path: '/counter',
        component: CounterComponent
    }
];

export const counterRouting = RouterModule.forChild(counterRoutes);