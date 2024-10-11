import { TestBed } from '@angular/core/testing';

import { SerachserviceService } from './serachservice.service';

describe('SerachserviceService', () => {
  let service: SerachserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SerachserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
