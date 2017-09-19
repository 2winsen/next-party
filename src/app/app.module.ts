import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CustomCountdownComponent } from './custom-countdown/custom-countdown.component';
import { LvDatePipe } from './lv-date.pipe';
import { InfoPanelComponent } from './info-panel/info-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomCountdownComponent,
    LvDatePipe,
    InfoPanelComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
