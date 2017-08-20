import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { PhoneDetailComponent } from './components/phone-detail/phone-detail.component';
import { PhoneListContainer } from './containers/phone-list/phone-list.container';

import reducers from './store/reducers';

@NgModule({
  declarations: [
    AppComponent,
    PhoneDetailComponent,
    PhoneListContainer
  ],
  imports: [
    BrowserModule,
    StoreModule.provideStore(reducers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
