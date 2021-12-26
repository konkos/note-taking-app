import { TestBed } from '@angular/core/testing';

import { ApiIntegrationDoubleService } from './api-integration-double.service';

describe('ApiIntegrationDoubleService', () => {
  let service: ApiIntegrationDoubleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiIntegrationDoubleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
