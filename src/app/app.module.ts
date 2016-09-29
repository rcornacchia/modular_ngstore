import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { removeNgStyles, createNewHosts } from '@angularclass/hmr';
import { counter, counter2 } from './reducers/counter';
import { store, globalReducer } from './MyStoreModule';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';
import { CounterModule } from './counter/counter.module';
import { CounterModule2 } from './counter2/counter2.module';
import { UserService } from './app.service';
import { Store, StoreModule, combineReducers } from '@ngrx/store';

@NgModule({
  imports: [
    BrowserModule,
    CounterModule,
    CounterModule2,
    StoreModule.provideStore(counter2),
    StoreDevtoolsModule.instrumentStore({
      monitor: useLogMonitor({
        visible: true,
        position: 'right'
      })
    }),
    StoreLogMonitorModule,
  ],
  declarations: [AppComponent],
  providers: [UserService],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(public appRef: ApplicationRef) {}
  hmrOnInit(store) {
    console.log('HMR store', store);
  }
  hmrOnDestroy(store) {
    let cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // recreate elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // remove styles
    removeNgStyles();
  }
  hmrAfterDestroy(store) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}
