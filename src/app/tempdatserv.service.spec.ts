import { TestBed } from '@angular/core/testing';

import { TempdatservService } from './tempdatserv.service';

describe('TempdatservService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TempdatservService = TestBed.get(TempdatservService);
    expect(service).toBeTruthy();
  });
});
