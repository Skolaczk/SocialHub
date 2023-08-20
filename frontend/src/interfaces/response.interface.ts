import { IError } from './error.interface';

export interface IResponse<T> {
  data?: T | null;
  error?: IError | null;
}
