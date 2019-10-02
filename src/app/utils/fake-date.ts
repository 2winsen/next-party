import * as moment from 'moment';

let date: Date;
let interval: number;

export const fakeDate = (dateString: string) => {
  if (!interval) {
    date = moment(dateString).toDate();
    interval = window.setInterval(() => {
      date.setMilliseconds(date.getMilliseconds() + 1000);
    }, 1000);
  }
  return date;
};
