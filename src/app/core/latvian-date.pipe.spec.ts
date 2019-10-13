import { LatvianDatePipe } from './latvian-date.pipe';
import * as moment from 'moment';

describe('LatvianDatePipe', () => {
  it('should translate date to latvian date format', () => {
    const pipe = new LatvianDatePipe();
    expect(pipe.transform(moment('2017-01-25').toDate())).toEqual('2017. gada 25. janvārī');
    expect(pipe.transform(moment('2017-02-25').toDate())).toEqual('2017. gada 25. februārī');
    expect(pipe.transform(moment('2017-03-25').toDate())).toEqual('2017. gada 25. martā');
    expect(pipe.transform(moment('2017-04-25').toDate())).toEqual('2017. gada 25. aprīlī');
    expect(pipe.transform(moment('2017-05-25').toDate())).toEqual('2017. gada 25. maijā');
    expect(pipe.transform(moment('2017-06-25').toDate())).toEqual('2017. gada 25. jūnijā');
    expect(pipe.transform(moment('2017-07-25').toDate())).toEqual('2017. gada 25. jūlijā');
    expect(pipe.transform(moment('2017-08-25').toDate())).toEqual('2017. gada 25. augustā');
    expect(pipe.transform(moment('2017-09-25').toDate())).toEqual('2017. gada 25. septembrī');
    expect(pipe.transform(moment('2017-10-25').toDate())).toEqual('2017. gada 25. oktobrī');
    expect(pipe.transform(moment('2017-11-25').toDate())).toEqual('2017. gada 25. novembrī');
    expect(pipe.transform(moment('2017-12-25').toDate())).toEqual('2017. gada 25. decembrī');
  });
});
