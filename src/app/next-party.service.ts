import { Injectable } from '@angular/core';
import * as moment from 'moment'

@Injectable()
export class NextPartyService {

  constructor() { }

  getNextDate(momentNow): Date {
    return this.getNextSeptember2ndSaturday(momentNow);
  }

  private getSeptember2ndSaturday(momentNow) {
    return momentNow
      .clone()
      .month('September')
      .startOf('month')
      .day('Saturday')
      .add(1, 'day')
      .day('Saturday')
      .startOf('day')
  }

  private getNextSeptember2ndSaturday(momentNow): Date {
    var thisYear = this.getSeptember2ndSaturday(momentNow);
    if (momentNow.isAfter(thisYear)) {
      return this.getSeptember2ndSaturday(
        momentNow
          .clone()
          .add(1, 'year')
      ).toDate()
    }
    return thisYear.toDate()
  }

  isToday(momentNextParty) {
    return moment(momentNextParty).diff(moment(), 'days') === 0;
  }
}
