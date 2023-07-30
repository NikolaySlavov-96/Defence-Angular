import { TestBed } from '@angular/core/testing';

import { peroductService } from './product.service';

describe('ApiService', () => {
  let service: peroductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(peroductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
