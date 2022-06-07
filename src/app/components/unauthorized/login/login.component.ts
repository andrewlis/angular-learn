import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Actions, Store } from '@ngxs/store';
import { Auth } from '../../../states/auth/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

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

  login() {
    if (this.loginForm.valid) {
      this.store.dispatch(new Auth.Login(this.loginForm.value))
    }
  }

}
