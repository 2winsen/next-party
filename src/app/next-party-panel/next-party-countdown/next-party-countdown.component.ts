import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'next-party-countdown',
  templateUrl: './next-party-countdown.component.html',
  styleUrls: ['./next-party-countdown.component.css']
})
export class NextPartyCountdownComponent {
  daysLabel: string;
  days: any;
  seconds: any;
  minutes: any;
  hours: any;
  @Input() units: any;
  @Input() end: any;
  @Input() displayString: string = '';
  @Input() text: any;
  @Input() divider: any;
  @Output() reached: EventEmitter<Date> = new EventEmitter();
  displayNumbers: any = [];
  displayNumbersTime: any = [];

  private wasReached = false;

  constructor() {
    setInterval(() => this._displayString(), 100);
  }

  _displayString() {

    if (typeof this.units === 'string') {
      this.units = this.units.split('|');
    }

    let givenDate: any = new Date(this.end);
    let now: any = new Date();

    let dateDifference: any = givenDate - now;

    if (dateDifference < 100 && dateDifference > 0 && !this.wasReached) {
      this.wasReached = true;
      this.reached.next(now);
    }

    let lastUnit = this.units[this.units.length - 1],
      unitConstantForMillisecs = {
        year: (((1000 * 60 * 60 * 24 * 7) * 4) * 12),
        month: ((1000 * 60 * 60 * 24 * 7) * 4),
        weeks: (1000 * 60 * 60 * 24 * 7),
        days: (1000 * 60 * 60 * 24),
        hours: (1000 * 60 * 60),
        minutes: (1000 * 60),
        seconds: 1000
      },
      unitsLeft = {},
      returnText = '',
      returnNumbers = '',
      totalMillisecsLeft = dateDifference,
      i,
      unit: any;
    for (i in this.units) {
      if (this.units.hasOwnProperty(i)) {

        unit = this.units[i].trim();
        if (unitConstantForMillisecs[unit.toLowerCase()] === false) {
          //$interval.cancel(countDownInterval);
          throw new Error('Cannot repeat unit: ' + unit);

        }
        if (unitConstantForMillisecs.hasOwnProperty(unit.toLowerCase()) === false) {
          throw new Error('Unit: ' + unit + ' is not supported. Please use following units: year, month, weeks, days, hours, minutes, seconds, milliseconds');
        }

        unitsLeft[unit] = totalMillisecsLeft / unitConstantForMillisecs[unit.toLowerCase()];

        if (lastUnit === unit) {
          unitsLeft[unit] = Math.ceil(unitsLeft[unit]);
        } else {
          unitsLeft[unit] = Math.floor(unitsLeft[unit]);
        }
        totalMillisecsLeft -= unitsLeft[unit] * unitConstantForMillisecs[unit.toLowerCase()];
        unitConstantForMillisecs[unit.toLowerCase()] = false;

        returnNumbers += ' ' + unitsLeft[unit] + '|';
        returnText += ' ' + unit;
      }
    }
    this.displayDays(returnNumbers);
    this.displayTime(returnNumbers);
  }

  private getDisplayNumbers(returnNumbers: String): Array<String> {
    return returnNumbers
      .slice(0, -1)
      .split('|')
      .map(n => n.trim());
  }

  private displayDays(returnNumbers: String) {
    this.days = this.getDisplayNumbers(returnNumbers)[0];
    this.daysLabel = this.days.charAt(this.days.length - 1) === '1' ? 'diena' : 'dienas';
  }

  private displayTime(returnNumbers: String) {
    var timeNumbers: Array<String> = this.getDisplayNumbers(returnNumbers)
      .slice(-3)
      .map(n => n.padStart(2, '0'));
    this.hours = timeNumbers[0];
    this.minutes = timeNumbers[1];
    this.seconds = timeNumbers[2];
  }
}
