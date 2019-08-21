import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { NextPartyService } from './core/next-party.service';
import * as moment from 'moment';
import { ICarouselConfig, AnimationConfig } from 'angular4-carousel';


@Component({
  selector: 'app-root',
  animations: [
    trigger('visibilityChanged', [
      state('shown', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0, display: 'none' })),
      transition('* => *', animate('.5s'))
    ])
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [NextPartyService]
})
export class AppComponent implements OnInit {
  isToday: boolean;
  nextParty: Date;
  preloaderVisibility = 'shown';
  preloaderHidden = false;
  hidden = false;

  imageSources: string[] = [
    'assets/2018.jpg',
    'assets/2017.jpg'
  ];

  config: ICarouselConfig = {
    verifyBeforeLoad: true,
    log: false,
    animation: true,
    animationType: AnimationConfig.SLIDE,
    autoplay: false,
    autoplayDelay: 0,
    stopAutoplayMinWidth: 768
  };

  constructor(private nextPartyService: NextPartyService) { }

  ngOnInit(): void {
    this.preloaderHidden = true;
    this.preloaderVisibility = 'hidden';
    this.nextParty = this.nextPartyService.getNextDate(moment());
    this.isToday = this.nextPartyService.isToday(moment(), moment(this.nextParty));
  }

  onToggleVisibility() {
    this.hidden = !this.hidden;
  }

}
