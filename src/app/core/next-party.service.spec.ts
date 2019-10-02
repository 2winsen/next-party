import { TestBed, inject } from '@angular/core/testing';
import * as moment from 'moment';
import { NextPartyService } from './next-party.service';
import MomentsMap from '../types/MomentsMap';

class NextPartyMockService extends NextPartyService {
  protected getCustomDatesMap(): MomentsMap {
    return {
      2000: moment('2000-10-05 00:00'),
      2001: moment('2001-10-05 00:00'),
    };
  }
}

describe('NextPartyService', () => {
  let service: NextPartyService;

  beforeEach(() => {
    service = new NextPartyMockService();
  });

  describe('NextPartyService.getNextDate', () => {
    it('should find next party date - this year', () => {
      const today = moment('2017-09-01');
      const nextParty = moment('2017-09-09');
      expect(service.getNextDate(today)).toEqual(nextParty.toDate());
    });

    it('should find next party date - today', () => {
      const today = moment('2017-09-09');
      const nextParty = moment('2017-09-09');
      expect(service.getNextDate(today)).toEqual(nextParty.toDate());
    });

    it('should find next party date - today @ 09:00', () => {
      const today = moment('2017-09-09 09:00');
      const nextParty = moment('2017-09-09');
      expect(service.getNextDate(today)).toEqual(nextParty.toDate());
    });

    it('should find next party - today @ 23:00', () => {
      const today = moment('2017-09-09 23:00');
      const nextParty = moment('2017-09-09');
      expect(service.getNextDate(today)).toEqual(nextParty.toDate());
    });

    it('should find next party date - next year', () => {
      const today = moment('2017-12-25');
      const nextParty = moment('2018-09-08');
      expect(service.getNextDate(today)).toEqual(nextParty.toDate());
    });

    it('should find next party date - next year on the next day after party', () => {
      const today = moment('2017-09-10 00:00');
      const nextParty = moment('2018-09-08');
      expect(service.getNextDate(today)).toEqual(nextParty.toDate());
    });
  });

  describe('NextPartyService.getNextDate - with custom dates', () => {
    it('should find custom next party date - this year before original date', () => {
      const today = moment('2000-08-21');
      const nextParty = moment('2000-10-05');
      expect(service.getNextDate(today)).toEqual(nextParty.toDate());
    });

    it('should find custom next party date - on original date', () => {
      const today = moment('2000-09-09');
      const nextParty = moment('2000-10-05');
      expect(service.getNextDate(today)).toEqual(nextParty.toDate());
    });

    it('should find custom next party date - after original date', () => {
      const today = moment('2000-09-10');
      const nextParty = moment('2000-10-05');
      expect(service.getNextDate(today)).toEqual(nextParty.toDate());
    });

    it('should find custom next party date - next year', () => {
      const today = moment('1999-12-25');
      const nextParty = moment('2000-10-05');
      expect(service.getNextDate(today)).toEqual(nextParty.toDate());
    });

    it('should find custom next party date - next year', () => {
      const today = moment('2001-10-06');
      const nextParty = moment('2002-09-14');
      expect(service.getNextDate(today)).toEqual(nextParty.toDate());
    });

    it('should find custom next party date - next year custom date', () => {
      const today = moment('2000-10-06');
      const nextParty = moment('2001-10-05');
      expect(service.getNextDate(today)).toEqual(nextParty.toDate());
    });
  });

  describe('NextPartyService.isToday', () => {
    it('should return false for date in past', () => {
      const today = moment('2017-09-09');
      const nextParty = moment('2017-09-10');
      expect(service.isToday(today, nextParty)).toEqual(false);
    });

    it('should return false for date in future', () => {
      const today = moment('2017-09-11');
      const nextParty = moment('2017-09-10');
      expect(service.isToday(today, nextParty)).toEqual(false);
    });

    it('should return false for 1 day before a party', () => {
      const today = moment('2017-09-10 21:00');
      const nextParty = moment('2017-09-11');
      expect(service.isToday(today, nextParty)).toEqual(false);
    });

    it('should return true', () => {
      const today = moment('2017-09-11');
      const nextParty = moment('2017-09-11');
      expect(service.isToday(today, nextParty)).toEqual(true);
    });

    it('should return true for a party end', () => {
      const today = moment('2017-09-11 23:59');
      const nextParty = moment('2017-09-11');
      expect(service.isToday(today, nextParty)).toEqual(true);
    });
  });

  describe('NextPartyService.addToCalendarStart', () => {
    it('should return date and time in correct format', () => {
      const date = moment('2017-09-10').toDate();
      expect(service.addToCalendarStart(date)).toEqual('2017-09-10 10:00:00');
    });
  });

  describe('NextPartyService.addToCalendarEnd', () => {
    it('should return date and time in correct format', () => {
      const date = moment('2017-09-10').toDate();
      expect(service.addToCalendarEnd(date)).toEqual('2017-09-10 23:00:00');
    });
  });
});
