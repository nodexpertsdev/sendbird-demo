import { TestBed } from '@angular/core/testing';

import { SendbirdDashboardService } from './sendbird-dashboard.service';

describe('SendbirdDashboardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SendbirdDashboardService = TestBed.get(SendbirdDashboardService);
    expect(service).toBeTruthy();
  });
});
