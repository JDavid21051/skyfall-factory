import { TestBed } from '@angular/core/testing';

import { NgxTableNestedService } from './ngx-table-nested.service';

describe('NgxTableNestedService', () => {
  let service: NgxTableNestedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxTableNestedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
