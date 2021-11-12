import { TestBed } from '@angular/core/testing';

import { TensionServiceService } from './tension-service.service';

describe('TensionServiceService', () => {
  let service: TensionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TensionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
