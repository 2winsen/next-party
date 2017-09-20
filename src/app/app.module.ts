import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NextPartyCountdownComponent } from './next-party-panel/next-party-countdown/next-party-countdown.component';
import { LatvianDatePipe } from './core/latvian-date.pipe';
import { NextPartyPanelComponent } from './next-party-panel/next-party-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    NextPartyCountdownComponent,
    LatvianDatePipe,
    NextPartyPanelComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
