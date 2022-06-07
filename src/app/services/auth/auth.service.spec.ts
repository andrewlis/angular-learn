import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('AuthService', () => {
  let service: AuthService;
  let httpTestingController: HttpTestingController;
  const accessResponse = { access_token: 'string' };
  const user = {
    username: 'string',
    password: 'string'
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return access token',  () => {
    service.login(user).subscribe(res => {
      expect(res).toEqual(accessResponse)
    })

    const req = httpTestingController.expectOne({
      method: 'POST',
      url: '/api/auth/login',
    });

    req.flush(accessResponse);
  });
});
