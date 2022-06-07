import { Injectable } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { IAuthModel } from './auth-model.interface';
import { AUTH_DEFAULTS } from './auth-defaults.const';
import { Auth } from './auth.actions';
import { catchError, tap } from 'rxjs/operators';
import { patch } from '@ngxs/store/operators';
import { Navigate } from '@ngxs/router-plugin';

@State<IAuthModel>({
  name: 'auth',
  defaults: AUTH_DEFAULTS
})
@Injectable()
export class AuthState {
  constructor(private service: AuthService) {
  }

  @Selector()
  static token(state: IAuthModel) {
    return state.token;
  }

  @Action(Auth.Login)
  login(ctx: StateContext<IAuthModel>, action: Auth.Login) {
    return this.service.login(action.user).pipe(
      tap(payload => {
        return ctx.setState(
          patch({
            token: payload.access_token
          }
        ));
      }),
      tap(() => ctx.dispatch(new Navigate(['']))),
      catchError(err => {
        throw new Error()
      })
    )
  }

  @Action(Auth.Logout)
  logout(ctx: StateContext<IAuthModel>, action: Auth.Logout) {
    ctx.setState(AUTH_DEFAULTS);
    ctx.dispatch(new Navigate(['/login']))
  }
}