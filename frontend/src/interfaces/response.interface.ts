import { IError } from './error.interface';

export interface IResponse<T> {
  data?: T;
  error?: IError;
}
