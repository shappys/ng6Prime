import { TestBed } from '@angular/core/testing';

import { TempservService } from './tempserv.service';

describe('TempservService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TempservService = TestBed.get(TempservService);
    expect(service).toBeTruthy();
  });
});
