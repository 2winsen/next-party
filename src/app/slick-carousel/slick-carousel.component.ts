import { Component, AfterViewInit, ElementRef, NgZone } from '@angular/core';
import * as $ from 'jquery';
import 'slick-carousel';

@Component({
  selector: 'app-slick-carousel',
  templateUrl: './slick-carousel.component.html',
  styleUrls: ['./slick-carousel.component.scss'],
})
export class SlickCarouselComponent implements AfterViewInit {
  $carousel: JQuery;

  constructor(private el: ElementRef, private zone: NgZone) {
  }

  ngAfterViewInit() {
    const $el: any = $(this.el.nativeElement);
    this.zone.runOutsideAngular(() => {
      this.$carousel = $el.slick({
        dots: true,
        rows: 0
      });
    });
  }
}
