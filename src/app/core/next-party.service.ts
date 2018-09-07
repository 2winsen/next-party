import { Injectable } from '@angular/core';
import * as moment from 'moment'

@Injectable()
export class NextPartyService {

  private nextDate: Date;
  private static readonly ADD_TO_CALENDAR_FORMAT: string = 'YYYY-MM-DD HH:mm:ss';

  constructor() { }

  public getNextDate(momentNow): Date {
    if (!this.nextDate) {
      this.nextDate = this.getNextSeptember2ndSaturday(momentNow);
    }
    return this.nextDate;
  }

  private getSeptember2ndSaturday(momentNow) {
    return momentNow
      .clone()
      .month('September')
      .startOf('month')
      .day('Saturday')
      .add(1, 'day')
      .day('Saturday')
      .startOf('day');
  }

  private getNextSeptember2ndSaturday(momentNow): Date {
    const thisYear = this.getSeptember2ndSaturday(momentNow);
    if (momentNow.isAfter(thisYear)) {
      return this.getSeptember2ndSaturday(
        momentNow
          .clone()
          .add(1, 'year')
      ).toDate();
    }
    return thisYear.toDate();
  }

  public isToday(momentNow, nextParty) {
    const diff = moment(nextParty).diff(momentNow, 'hours', true);
    const HOURS_IN_A_DAY = 24;
    // -24 < diff <= 0
    return diff <= 0 && diff > -HOURS_IN_A_DAY;
  }

  public toAddtoCalendarStart(date: Date) {
    return moment(date)
      .startOf('day')
      .hour(10)
      .format(NextPartyService.ADD_TO_CALENDAR_FORMAT);
  }

  public toAddtoCalendarEnd(date: Date) {
    return moment(date)
      .startOf('day')
      .hour(23)
      .format(NextPartyService.ADD_TO_CALENDAR_FORMAT);
  }
}
