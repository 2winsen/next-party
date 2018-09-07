import { TestBed, async } from '@angular/core/testing';
import { NextPartyPanelComponent } from './next-party-panel.component';
import { MockComponent } from 'ng2-mock-component';
import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { LatvianDatePipe } from './../core/latvian-date.pipe';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'latvianDate' })
class MockLatvianDatePipe implements PipeTransform {
  transform(value) {
    return value;
  }
}

describe('NextPartyPanelComponent', () => {
  let fixture: ComponentFixture<NextPartyPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NextPartyPanelComponent,
        MockLatvianDatePipe,
        MockComponent({ selector: 'next-party-countdown', inputs: ['units', 'end'] })
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(NextPartyPanelComponent);
  }));

  it('should show party today label and hide next party labels', async(() => {
    const comp = fixture.componentInstance;
    comp.isToday = true;
    fixture.detectChanges();
    const el = fixture.nativeElement;
    expect(el.querySelector('.next-party-panel-today__label').textContent).toEqual('ŠODIEN. JĒĒI!!!');
    expect(el.querySelector('.next-party-panel__date')).toEqual(null);
    expect(el.querySelector('next-party-countdown')).toEqual(null);
  }));

  it('should show next party labels and hide today label', async(() => {
    const comp = fixture.componentInstance;
    comp.isToday = false;
    comp.nextParty = new Date('February 4, 2016 10:13:00');
    fixture.detectChanges();
    const el = fixture.nativeElement;
    expect(el.querySelector('.next-party-panel__date').textContent).toMatch(/Thu Feb 04 2016 10:13:00/);
    expect(el.querySelector('next-party-countdown')).toBeDefined();
    expect(el.querySelector('.next-party-panel-today__label')).toEqual(null);
  }));

});
