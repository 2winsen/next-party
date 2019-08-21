import { Component, Input, OnInit } from '@angular/core';
import { NextPartyService } from './../core/next-party.service';


@Component({
  selector: 'app-next-party-panel',
  templateUrl: './next-party-panel.component.html',
  styleUrls: ['./next-party-panel.component.scss'],
  providers: [NextPartyService]
})
export class NextPartyPanelComponent implements OnInit {
  @Input() nextParty: Date;
  @Input() isToday: Boolean;
  atcStart: String;
  atcEnd: String;

  constructor(private nextPartyService: NextPartyService) { }

  ngOnInit(): void {
    this.atcStart = this.nextPartyService.addToCalendarStart(this.nextParty);
    this.atcEnd = this.nextPartyService.addToCalendarEnd(this.nextParty);
  }
}
