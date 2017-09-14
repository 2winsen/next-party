import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomCountdownComponent } from './custom-countdown/custom-countdown.component';
import { LvDatePipe } from './lv-date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CustomCountdownComponent,
    LvDatePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
