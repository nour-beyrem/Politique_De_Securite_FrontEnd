import { TestBed } from '@angular/core/testing';

import { ExterneService } from './externe.service';

describe('ExterneService', () => {
  let service: ExterneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExterneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
