import { Component, OnInit } from '@angular/core';
import { NextPartyService } from './../core/next-party.service';
import * as moment from 'moment';
import { now } from '../utils/date-utils';


@Component({
  selector: 'app-next-party-panel',
  templateUrl: './next-party-panel.component.html',
  styleUrls: ['./next-party-panel.component.scss'],
  providers: [NextPartyService]
})
export class NextPartyPanelComponent implements OnInit {
  isToday: boolean;
  nextParty: Date;

  constructor(private nextPartyService: NextPartyService) { }

  ngOnInit(): void {
    this.nextParty = this.nextPartyService.getNextDate(moment());
    this.isToday = this.nextPartyService.isToday(
      moment(now()),
      moment(this.nextParty)
    );
  }

  onCompleted(completed: boolean) {
    this.isToday = completed;
  }
}
