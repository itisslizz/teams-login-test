import { TestBed, inject } from '@angular/core/testing';

import { MsGraphService } from './ms-graph.service';

describe('MsGraphService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MsGraphService]
    });
  });

  it('should be created', inject([MsGraphService], (service: MsGraphService) => {
    expect(service).toBeTruthy();
  }));
});
