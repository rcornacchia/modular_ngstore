import { counter } from './counter/counter.reducer';
import { counter2 } from './counter2/counter2.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';
import { Store, StoreModule } from '@ngrx/store';
import { UserService } from './app.service';

console.log(UserService);

export const rootReducer = {
    counter,
}


// console.log(rootReducer);
// export const store = StoreModule.provideStore(rootReducer);