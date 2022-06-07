import { TestBed } from '@angular/core/testing';

import { WorldService } from './world.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('WorldService', () => {
  let service: WorldService;
  let httpTestingController: HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(WorldService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
