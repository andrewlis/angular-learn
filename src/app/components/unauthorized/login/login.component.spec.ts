import { ComponentFixture, fakeAsync, flush, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { Actions, NgxsModule, ofActionSuccessful, Store } from '@ngxs/store';
import { AuthState } from '../../../states/auth/auth.state';
import { WorldsState } from '../../../states/worlds/worlds.state';
import { HttpClientModule } from '@angular/common/http';
import { AbstractControl, FormControl, ReactiveFormsModule } from '@angular/forms';
// @ts-ignore
import jasmine = require('jasmine');
import { Auth } from '../../../states/auth/auth.actions';
import { Navigate } from '@ngxs/router-plugin';
import { tap } from 'rxjs/operators';

export enum Emails {
  invalidEmailPattern = 'john@mail.',
  invalidLengthPattern = 'j@m.r',
  invalidRequiredPattern = '',
  valid = 'john@mail.ru'
}

export enum Passwords {
  invalidLengthPattern = '123',
  invalidRequiredPattern = '',
  valid = 'changeme'
}

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let store: Store;
  let email: AbstractControl | null;
  let password: AbstractControl | null;
  let storeSpy: jasmine.Spy;
  let actions$: Actions;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        ReactiveFormsModule,
        HttpClientModule,
        NgxsModule
        .forRoot(
          [
            AuthState,
          ]
        ),
      ],
      providers: [
        { provide: Store, useValue: storeSpy }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    store = TestBed.inject(Store);
    storeSpy = spyOn(store, 'dispatch').and.callThrough()
    actions$ = TestBed.inject(Actions);
    component = fixture.componentInstance;
    email = component.loginForm.get('username');
    password = component.loginForm.get('password');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('login control scenaries', () => {

    it('should failed login validation based on email', () => {
      email?.setValue(Emails.invalidEmailPattern);
      expect(email?.invalid)
        .withContext('invalid login value')
        .toBeTruthy();
    });

    it('should failed login validation based in length', () => {
      email?.setValue(Emails.invalidLengthPattern);
      expect(email?.invalid)
        .toBeTruthy();
    });

    it('should failed login validation based in required', () => {
      email?.setValue(Emails.invalidRequiredPattern);
      expect(email?.invalid)
        .toBeTruthy();
    });

    it('should pass login validation', () => {
      email?.setValue(Emails.valid);
      expect(email?.invalid)
        .toBeFalse();
    });

    it('should pass password validation', () => {
      password?.setValue(Passwords.valid);
      expect(email?.invalid)
        .toBeFalse();
    });
  })

  describe('handling store actions', () => {

    it('should fail validation and do nothing', () => {
      email?.setValue(Emails.invalidRequiredPattern);
      password?.setValue(Passwords.invalidLengthPattern);

      component.login();
      expect(storeSpy).toHaveBeenCalledTimes(0)
    });

    it('should pass validation call service', () => {
      email?.setValue(Emails.valid);
      password?.setValue(Passwords.valid);
      component.login();
      expect(storeSpy).toHaveBeenCalledTimes(1);
      expect(storeSpy).toHaveBeenCalledWith(new Auth.Login({
        username: Emails.valid,
        password: Passwords.valid
      }));
      // todo не покрыт кейс с onActionSuccessfull и переходом по роуту
    });
  })


});
