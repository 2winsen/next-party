import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NextPartyService } from './core/next-party.service';
import { MockComponent } from 'ng2-mock-component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let nextPartyService: NextPartyService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule
      ],
      declarations: [
        AppComponent,
        MockComponent({ selector: 'next-party-panel', inputs: ['nextParty', 'isToday'] })
      ],
      providers: [NextPartyService]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    nextPartyService = fixture.debugElement.injector.get(NextPartyService);
    nextPartyService.getNextDate = jasmine.createSpy('getNextDate');
    nextPartyService.isToday = jasmine.createSpy('isToday');
  }));

  it('should show preloader', async(() => {
    const el = fixture.nativeElement;
    expect(el.querySelector('.preloader').getAttribute('hidden')).toEqual(null);
  }));
});
