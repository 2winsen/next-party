import { parseMillisecondsLeft } from './date-utils';

describe('date-utils.parseMillisecondsLeft', () => {
  it('should parse milliseconds to units - 1', () => {
    const target = parseMillisecondsLeft(86400000 + 3600000 + 60000 + 1000);
    expect(target.days).toEqual(1);
    expect(target.hours).toEqual(1);
    expect(target.minutes).toEqual(1);
    expect(target.seconds).toEqual(1);
  });

  it('should parse milliseconds to units - 2', () => {
    const target = parseMillisecondsLeft(7300000 + 60000 + 1000);
    expect(target.days).toEqual(0);
    expect(target.hours).toEqual(2);
    expect(target.minutes).toEqual(2);
    expect(target.seconds).toEqual(41);
  });

  it('should parse milliseconds to units - ceil fractions of seconds', () => {
    const target = parseMillisecondsLeft(1100);
    expect(target.seconds).toEqual(2);
  });
});
