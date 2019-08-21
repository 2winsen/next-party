import { TestBed, inject } from '@angular/core/testing';
import * as moment from 'moment';
import { NextPartyService } from './next-party.service';
import { MomentsMap } from '../types';

class NextPartyServiceMock extends NextPartyService {
  protected getCustomDatesMap(): MomentsMap {
    return {
      2000: moment('2000-10-05 00:00'),
    };
  }
}

describe('NextPartyService', () => {
  let service: NextPartyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: NextPartyService, useClass: NextPartyServiceMock }
      ]
    });
  });

  beforeEach(inject([NextPartyService], (_service_: NextPartyService) => {
    service = _service_;
  }));

  describe('getNextDate()', () => {
    it('should find correct next party date next year', () => {
      const today = moment('2017-12-25');
      expect(service.getNextDate(today)).toEqual(jasmine.any(Date));
      const nextParty = moment('2018-09-08');
      expect(service.getNextDate(today)).toEqual(nextParty.toDate());
    });

    it('should find correct next party date next year in the next day after party', () => {
      const today = moment('2017-09-10 00:00');
      expect(service.getNextDate(today)).toEqual(jasmine.any(Date));
      const nextParty = moment('2018-09-08');
      expect(service.getNextDate(today)).toEqual(nextParty.toDate());
    });

    it('should find correct next party date this year', () => {
      const today = moment('2017-09-01');
      expect(service.getNextDate(today)).toEqual(jasmine.any(Date));
      const nextParty = moment('2017-09-09');
      expect(service.getNextDate(today)).toEqual(nextParty.toDate());
    });

    it('should find correct next party date this year a day before', () => {
      const today = moment('2017-09-09 23:00');
      expect(service.getNextDate(today)).toEqual(jasmine.any(Date));
      const nextParty = moment('2017-09-09');
      expect(service.getNextDate(today)).toEqual(nextParty.toDate());
    });

    it('should find correct next party date today', () => {
      const today = moment('2017-09-09');
      expect(service.getNextDate(today)).toEqual(jasmine.any(Date));
      const nextParty = moment('2017-09-09');
      expect(service.getNextDate(today)).toEqual(nextParty.toDate());
    });

    it('should find correct next party date today with time', () => {
      const today = moment('2017-09-09 09:00');
      expect(service.getNextDate(today)).toEqual(jasmine.any(Date));
      const nextParty = moment('2017-09-09');
      expect(service.getNextDate(today)).toEqual(nextParty.toDate());
    });

    it('should find correct next party date - custom date', () => {
      const today = moment('2000-08-21 09:00');
      expect(service.getNextDate(today)).toEqual(jasmine.any(Date));
      const nextParty = moment('2000-10-05');
      expect(service.getNextDate(today)).toEqual(nextParty.toDate());
    });

    it('should find correct next party date next year - custom date', () => {
      const today = moment('1999-12-25');
      expect(service.getNextDate(today)).toEqual(jasmine.any(Date));
      const nextParty = moment('2000-10-05');
      expect(service.getNextDate(today)).toEqual(nextParty.toDate());
    });

    it('should find correct next party date next year after custom date', () => {
      const today = moment('2000-10-06');
      expect(service.getNextDate(today)).toEqual(jasmine.any(Date));
      const nextParty = moment('2001-09-08');
      expect(service.getNextDate(today)).toEqual(nextParty.toDate());
    });
  });

  describe('isToday()', () => {
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

  describe('addToCalendarStart()', () => {
    it('should return date and time in correct format', () => {
      const date = moment('2017-09-10').toDate();
      expect(service.addToCalendarStart(date)).toEqual('2017-09-10 10:00:00');
    });
  });

  describe('addToCalendarEnd()', () => {
    it('should return date and time in correct format', () => {
      const date = moment('2017-09-10').toDate();
      expect(service.addToCalendarEnd(date)).toEqual('2017-09-10 23:00:00');
    });
  });
});
