import { Injectable } from '@angular/core';

@Injectable()
export class NextPartyService {

  constructor() { }

  getNextDate(moment): Date {
    return this.getNextSeptember2ndSaturday(moment);
  }

  private getSeptember2ndSaturday(moment) {
    return moment
      .clone()
      .month('September')
      .startOf('month')
      .day('Saturday')
      .add(1, 'day')
      .day('Saturday')
  }

  private getNextSeptember2ndSaturday(moment): Date {
    var thisYear = this.getSeptember2ndSaturday(moment);
    if (moment.isAfter(thisYear)) {
      return this.getSeptember2ndSaturday(moment
        .clone()
        .add(1, 'year')
      ).toDate()
    }
    return thisYear.toDate()
  }
}
