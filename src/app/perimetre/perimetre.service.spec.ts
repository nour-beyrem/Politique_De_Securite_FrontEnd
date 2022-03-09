import { TestBed } from '@angular/core/testing';

import { PerimetreService } from './perimetre.service';

describe('PerimetreService', () => {
  let service: PerimetreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerimetreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
