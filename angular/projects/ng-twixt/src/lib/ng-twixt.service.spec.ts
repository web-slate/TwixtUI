import { TestBed } from '@angular/core/testing';

import { NgTwixtService } from './ng-twixt.service';

describe('NgTwixtService', () => {
  let service: NgTwixtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgTwixtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
