import { LatvianDatePipe } from './latvian-date.pipe';
import * as moment from 'moment'

describe('LatvianDatePipe', () => {
  it('should translate date to latvian date format', () => {
    const pipe = new LatvianDatePipe();
    expect(pipe.transform(moment('2017-01-25').toDate())).toEqual('25. janvārī 2017. gadā');
    expect(pipe.transform(moment('2017-02-25').toDate())).toEqual('25. februārī 2017. gadā');
    expect(pipe.transform(moment('2017-03-25').toDate())).toEqual('25. martā 2017. gadā');
    expect(pipe.transform(moment('2017-04-25').toDate())).toEqual('25. aprīlī 2017. gadā');
    expect(pipe.transform(moment('2017-05-25').toDate())).toEqual('25. maijā 2017. gadā');
    expect(pipe.transform(moment('2017-06-25').toDate())).toEqual('25. jūnijā 2017. gadā');
    expect(pipe.transform(moment('2017-07-25').toDate())).toEqual('25. jūlijā 2017. gadā');
    expect(pipe.transform(moment('2017-08-25').toDate())).toEqual('25. augustā 2017. gadā');
    expect(pipe.transform(moment('2017-09-25').toDate())).toEqual('25. septembrī 2017. gadā');
    expect(pipe.transform(moment('2017-10-25').toDate())).toEqual('25. oktobrī 2017. gadā');
    expect(pipe.transform(moment('2017-11-25').toDate())).toEqual('25. novembrī 2017. gadā');
    expect(pipe.transform(moment('2017-12-25').toDate())).toEqual('25. decembrī 2017. gadā');
  });
});
