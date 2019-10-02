import { Component, Input, OnInit } from '@angular/core';
import { NextPartyService } from 'src/app/core/next-party.service';

@Component({
  selector: 'app-add-to-calendar',
  templateUrl: './add-to-calendar.component.html',
  styleUrls: ['./add-to-calendar.component.scss'],
  providers: [NextPartyService]
})
export class AddToCalendarComponent implements OnInit {
  @Input() nextParty: Date;
  atcStart: string;
  atcEnd: string;

  constructor(private nextPartyService: NextPartyService) {
    this.initAddToCalendar();
  }

  ngOnInit(): void {
    this.atcStart = this.nextPartyService.addToCalendarStart(this.nextParty);
    this.atcEnd = this.nextPartyService.addToCalendarEnd(this.nextParty);
  }

  private initAddToCalendar() {
    const addToCalendarScript = document.createElement('script');
    addToCalendarScript.type = 'text/javascript';
    addToCalendarScript.async = true;
    addToCalendarScript.defer = true;
    addToCalendarScript.src = 'https://addevent.com/libs/atc/1.6.1/atc.min.js';
    const container = document.getElementsByTagName('head')[0];
    container.appendChild(addToCalendarScript);
  }
}
