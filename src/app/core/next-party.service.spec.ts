import { TestBed, inject } from '@angular/core/testing';
import * as moment from 'moment'
import { NextPartyService } from './next-party.service';

describe('NextPartyService', () => {
  let service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NextPartyService]
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

    it('should find correct next party date this year', () => {
      const today = moment('2017-09-01');
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
  });

  describe('isToday()', () => {
    it('should return false for date in past', () => {
      const today = moment('2017-09-09');
      const nextParty = moment('2017-09-10');
      expect(service.isToday(today, nextParty.toDate())).toEqual(false);
    });

    it('should return false for date in future', () => {
      const today = moment('2017-09-11');
      const nextParty = moment('2017-09-10');
      expect(service.isToday(today, nextParty.toDate())).toEqual(false);
    });

    it('should return false for 1 day before a party', () => {
      const today = moment('2017-09-10 21:00');
      const nextParty = moment('2017-09-11');
      expect(service.isToday(today, nextParty.toDate())).toEqual(false);
    });

    it('should return true', () => {
      const today = moment('2017-09-11');
      const nextParty = moment('2017-09-11');
      expect(service.isToday(today, nextParty.toDate())).toEqual(true);
    });

    it('should return true for a party end', () => {
      const today = moment('2017-09-11 23:59');
      const nextParty = moment('2017-09-11');
      expect(service.isToday(today, nextParty.toDate())).toEqual(true);
    });
  });

  describe('toAddtoCalendarStart()', () => {
    it('should return date and time in correct format', () => {
      const date = moment('2017-09-10').toDate();
      expect(service.toAddtoCalendarStart(date)).toEqual('2017-09-10 10:00:00');
    });
  });

  describe('toAddtoCalendarEnd()', () => {
    it('should return date and time in correct format', () => {
      const date = moment('2017-09-10').toDate();
      expect(service.toAddtoCalendarEnd(date)).toEqual('2017-09-10 23:00:00');
    });
  });
});
