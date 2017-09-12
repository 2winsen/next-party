import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import * as moment from 'moment'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  nextParty: Date;

  ngOnInit(): void {
    this.nextParty = this.getNextSeptember2ndSaturday(moment());
  }

  getSeptember2ndSaturday(startingMoment) {
    return startingMoment
      .clone()
      .month('September')
      .startOf('month')
      .day('Saturday')
      .add(1, 'day')
      .day('Saturday');
  }

  getNextSeptember2ndSaturday(startingMoment): Date {
    var thisYear = this.getSeptember2ndSaturday(startingMoment);
    if (startingMoment.isAfter(thisYear)) {
      return this.getSeptember2ndSaturday(startingMoment
        .clone()
        .add(1, 'year')
      ).toDate()
    }
    return thisYear.toDate();
  }

}
