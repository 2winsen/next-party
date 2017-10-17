import { Component, Input, OnInit } from '@angular/core';
import { NextPartyService } from './../core/next-party.service';


@Component({
  selector: 'next-party-panel',
  templateUrl: './next-party-panel.component.html',
  styleUrls: ['./next-party-panel.component.scss'],
  providers: [NextPartyService]
})
export class NextPartyPanelComponent implements OnInit {
  @Input() nextParty: Date;
  @Input() isToday: Boolean;
  isTodayAtcStart: String;
  isTodayAtcEnd: String;

  constructor(private nextPartyService: NextPartyService) { }

  ngOnInit(): void {
    this.isTodayAtcStart = this.nextPartyService.toAddtoCalendarStart(this.nextParty);
    this.isTodayAtcEnd = this.nextPartyService.toAddtoCalendarEnd(this.nextParty);
  }
}
