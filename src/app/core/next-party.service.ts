import { Injectable } from '@angular/core';
import { Moment } from 'moment';
import * as moment from 'moment';

interface MomentsMap {
  [value: number]: Moment;
}

@Injectable()
export class NextPartyService {
  private static readonly ADD_TO_CALENDAR_FORMAT = 'YYYY-MM-DD HH:mm:ss';

  private readonly CUSTOM_PARTY_DATES_MAP: MomentsMap = {
    2019: moment('2019-10-05 00:00'),
  };

  constructor() {
  }

  public getNextDate(momentNow: Moment): Date {
    return this.calculateNextPartyDate(momentNow).toDate();
  }

  private getSeptember2ndSaturday(momentNow: Moment): Moment {
    return momentNow
      .clone()
      .month('September')
      .startOf('month')
      .day('Saturday')
      .add(1, 'day')
      .day('Saturday')
      .startOf('day');
  }

  private calculateNextPartyDate(momentNow: Moment): Moment {
    let thisYearsParty = this.getSeptember2ndSaturday(momentNow);
    const partyIsNextYear = !this.isToday(momentNow, thisYearsParty) && momentNow.isAfter(thisYearsParty);
    if (partyIsNextYear) {
      const nextYear = momentNow.clone().add(1, 'year');
      thisYearsParty = this.getSeptember2ndSaturday(nextYear);
    }
    return this.tryToOverrideWithCustomDate(thisYearsParty);
  }

  private tryToOverrideWithCustomDate(nextPartyDate: Moment): Moment {
    const customDate = this.CUSTOM_PARTY_DATES_MAP[nextPartyDate.year()];
    return customDate || nextPartyDate;
  }

  public isToday(momentNow: Moment, nextParty: Moment): boolean {
    const diff = moment(nextParty).diff(momentNow, 'hours', true);
    const HOURS_IN_A_DAY = 24;
    // -24 < diff <= 0
    return diff <= 0 && diff > -HOURS_IN_A_DAY;
  }

  public addToCalendarStart(date: Date): string {
    return moment(date)
      .startOf('day')
      .hour(10)
      .format(NextPartyService.ADD_TO_CALENDAR_FORMAT);
  }

  public addToCalendarEnd(date: Date): string {
    return moment(date)
      .startOf('day')
      .hour(23)
      .format(NextPartyService.ADD_TO_CALENDAR_FORMAT);
  }
}
