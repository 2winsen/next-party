import { TestBed, async } from '@angular/core/testing';
import { NextPartyPanelComponent } from './next-party-panel.component';
import { ComponentFixture } from '@angular/core/testing';
import { Pipe, PipeTransform, NO_ERRORS_SCHEMA } from '@angular/core';

@Pipe({ name: 'latvianDate' })
class LatvianDateMockPipe implements PipeTransform {
  transform(value: Date) {
    return value;
  }
}

describe('NextPartyPanelComponent', () => {
  let fixture: ComponentFixture<NextPartyPanelComponent>;
  let component: NextPartyPanelComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NextPartyPanelComponent,
        LatvianDateMockPipe,
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextPartyPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should show today\'s party label', () => {
    component.isToday = true;
    fixture.detectChanges();
    const el = fixture.nativeElement;
    expect(el.querySelector('.next-party-panel-today__label').textContent).toEqual('ŠODIEN!!!');
    expect(el.querySelector('.next-party-panel__date')).toEqual(null);
    expect(el.querySelector('app-next-party-countdown')).toEqual(null);
  });

  it('should show next party date, countdown and add to calendar component', () => {
    component.isToday = false;
    component.nextParty = new Date('February 4, 2016 10:13:00');
    fixture.detectChanges();
    const el = fixture.nativeElement;
    expect(el.querySelector('app-next-party-countdown')).toBeDefined();
    expect(el.querySelector('app-add-to-calendar')).toBeDefined();
    expect(el.querySelector('.next-party-panel-today__label')).toEqual(null);
  });
});
