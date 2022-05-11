import { ILogin } from '../../components/unauthorized/interfaces/login.interface';

export interface IAuthModel {
  user: ILogin,
  token: string
}