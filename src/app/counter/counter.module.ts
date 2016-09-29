import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CounterComponent } from './counter.component';
import { counterRouting } from './counter.routes';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        CounterComponent,
    ],
    imports: [
        RouterModule,
        counterRouting,
        CommonModule
    ],
    exports: [ CounterComponent ],
})

export class CounterModule {}
