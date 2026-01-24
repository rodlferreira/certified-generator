import { TestBed } from '@angular/core/testing';

import {Certificate} from '../pages/certificate/certificate';

describe('Certified', () => {
  let service: Certificate;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Certificate);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
