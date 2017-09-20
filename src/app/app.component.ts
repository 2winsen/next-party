import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { NextPartyService } from './core/next-party.service';
import * as moment from 'moment'


@Component({
  selector: 'app-root',
  animations: [
    trigger('visibilityChanged', [
      state('shown', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0, display: 'none' })),
      transition('* => *', animate('.5s'))
    ])
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NextPartyService]
})
export class AppComponent implements OnInit {
  isToday: boolean;
  nextParty: any;
  preloaderVisibility: String = 'shown';
  preloaderHidden: Boolean = false;

  constructor(private nextPartyService: NextPartyService) { }

  ngOnInit(): void {
    this.preloaderHidden = true;
    this.preloaderVisibility = 'hidden'
    this.nextParty = this.nextPartyService.getNextDate(moment());
    this.isToday = this.nextPartyService.isToday(moment(), this.nextParty);
  }

}
