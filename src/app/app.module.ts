import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CountDown} from "ng2-date-countdown";

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    CountDown
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
