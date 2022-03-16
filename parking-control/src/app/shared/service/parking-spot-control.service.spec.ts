import { TestBed } from '@angular/core/testing';

import { ParkingSpotControlService } from './parking-spot-control.service';

describe('ParkingSpotControlService', () => {
  let service: ParkingSpotControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParkingSpotControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
