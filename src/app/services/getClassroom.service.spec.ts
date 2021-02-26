/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetClassroomService } from './getClassroom.service';

describe('Service: GetClassroom', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetClassroomService]
    });
  });

  it('should ...', inject([GetClassroomService], (service: GetClassroomService) => {
    expect(service).toBeTruthy();
  }));
});
