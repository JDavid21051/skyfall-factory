import { TestBed } from '@angular/core/testing';

import { NgxHefestoService } from './ngx-hefesto.service';

describe('NgxHefestoService', () => {
  let service: NgxHefestoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxHefestoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
