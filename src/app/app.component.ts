import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DatePipe } from '@angular/common';
import { NextPartyService } from './next-party.service';
import * as moment from 'moment'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NextPartyService]
})
export class AppComponent implements OnInit {
  nextParty: Date;

  constructor(private nextPartyService: NextPartyService) { }

  ngOnInit(): void {
    this.nextParty = this.nextPartyService.getNextDate(moment());
  }

}
