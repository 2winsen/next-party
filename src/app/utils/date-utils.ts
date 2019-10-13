import { fakeDate } from './fake-date';
import { environment } from 'src/environments/environment';
import DateTimeLeft from '../types/DateTimeLeft';

export const now = () => {
  if (!environment.production) {
    return fakeDate('2020-09-10 23:59:55');
  }
  return new Date();
};

export const parseMillisecondsLeft = (millisecondsLeft: number): DateTimeLeft => {
  const units = [
    { name: 'days', milliseconds: (1000 * 60 * 60 * 24) },
    { name: 'hours', milliseconds: (1000 * 60 * 60) },
    { name: 'minutes', milliseconds: (1000 * 60) },
    { name: 'seconds', milliseconds: 1000 },
  ];
  const unitsLeft = new DateTimeLeft();
  units.forEach((unit) => {
    unitsLeft[unit.name] = millisecondsLeft / unit.milliseconds;
    if (unit.name === 'seconds') {
      unitsLeft[unit.name] = Math.ceil(unitsLeft[unit.name]);
    } else {
      unitsLeft[unit.name] = Math.floor(unitsLeft[unit.name]);
    }
    millisecondsLeft -= unitsLeft[unit.name] * unit.milliseconds;
  });
  return unitsLeft;
};
