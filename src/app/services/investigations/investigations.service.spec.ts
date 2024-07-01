import { TestBed } from '@angular/core/testing';

import { InvestigationsService } from './investigations.service';

describe('InvestigationsService', () => {
  let service: InvestigationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvestigationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
