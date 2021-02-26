/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SharedDataService } from './sharedData.service';

describe('Service: SharedData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SharedDataService]
    });
  });

  it('should ...', inject([SharedDataService], (service: SharedDataService) => {
    expect(service).toBeTruthy();
  }));
});
