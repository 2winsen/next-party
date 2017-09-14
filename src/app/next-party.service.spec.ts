import { TestBed, inject } from '@angular/core/testing';

import { NextPartyService } from './next-party.service';

describe('NextPartyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NextPartyService]
    });
  });

  it('should be created', inject([NextPartyService], (service: NextPartyService) => {
    expect(service).toBeTruthy();
  }));
});
