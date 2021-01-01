import { TestBed } from '@angular/core/testing';

import { ValidateServiceService } from './validate-service.service';

describe('ValidateServiceService', () => {
  let service: ValidateServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidateServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
