import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { now, parseMillisecondsLeft } from '../../utils/date-utils';

@Component({
  selector: 'app-next-party-countdown',
  templateUrl: './next-party-countdown.component.html',
  styleUrls: ['./next-party-countdown.component.scss'],
})
export class NextPartyCountdownComponent implements OnInit {
  private TICK_DURATION = 1000;
  private COMPLETED_THRESHOLD = 100;

  days: string;
  seconds: string;
  minutes: string;
  hours: string;
  @Input() end: Date;
  @Output() completed: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.onTick();
    window.setTimeout(() => this.onTick(), this.TICK_DURATION);
  }

  onTick() {
    const end = this.end.valueOf();
    const current = now().valueOf();
    const dateDifference = end - current;
    if (dateDifference < this.COMPLETED_THRESHOLD) {
      this.completed.next(true);
    } else {
      const unitsLeft = parseMillisecondsLeft(dateDifference);
      this.days = this.pad(unitsLeft.days);
      this.hours = this.pad(unitsLeft.hours);
      this.minutes = this.pad(unitsLeft.minutes);
      this.seconds = this.pad(unitsLeft.seconds);
      window.setTimeout(() => this.onTick(), this.TICK_DURATION);
    }
  }

  private pad(unit: number) {
    return unit.toString().padStart(2, '0');
  }
}
