import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PhoneDetailComponent } from './components/phone-detail/phone-detail.component';
import { PhoneListContainer } from './containers/phone-list/phone-list.container';

@NgModule({
  declarations: [
    AppComponent,
    PhoneDetailComponent,
    PhoneListContainer
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
