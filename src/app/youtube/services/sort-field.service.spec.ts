import { TestBed } from '@angular/core/testing';

import { SortFieldService } from './sort-field.service';

describe('SortFieldService', () => {
  let service: SortFieldService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SortFieldService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
