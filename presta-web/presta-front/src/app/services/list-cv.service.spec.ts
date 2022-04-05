import { TestBed } from '@angular/core/testing';

import { ListCvService } from './list-cv.service';

describe('ListCvService', () => {
  let service: ListCvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListCvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
