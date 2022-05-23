import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Actions, ofActionSuccessful, Store } from '@ngxs/store';
import { Auth } from '../../../states/auth/auth.actions';
import { tap } from 'rxjs/operators';
import { Navigate } from '@ngxs/router-plugin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(
    private store: Store,
    private actions$: Actions,
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      username: ['john@mail.ru', [Validators.required, Validators.email, Validators.minLength(6)]],
      password: ['changeme', [Validators.required, Validators.minLength(6)]],
    })
  }

  ngOnInit() {
    this.actions$.pipe(
      ofActionSuccessful(Auth.Login),
      tap(() => {
        this.store.dispatch(new Navigate(['']));
      })
    ).subscribe()
  }

  login() {
    this.loginForm.markAllAsTouched();
    if (this.loginForm.valid) {
      this.store.dispatch(new Auth.Login(this.loginForm.value))
    }
  }

}
