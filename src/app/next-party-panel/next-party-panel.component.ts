import { Component, Input } from '@angular/core';

@Component({
  selector: 'next-party-panel',
  templateUrl: './next-party-panel.component.html',
  styleUrls: ['./next-party-panel.component.css']
})
export class NextPartyPanelComponent {
  @Input() nextParty: Date;
  @Input() isToday: Boolean;
}
