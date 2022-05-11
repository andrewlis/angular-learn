import { AuthActions } from './auth-actions.const';
import { ILogin } from '../../components/unauthorized/interfaces/login.interface';

export namespace Auth {
  export class Login {
    static readonly type = AuthActions.LOGIN;

    constructor(public user: ILogin) {
    }
  }

  export class Logout {
    static readonly type = AuthActions.LOGOUT;
  }
}