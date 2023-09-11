import { api } from '@/api';
import { AxiosError } from 'axios';
import { IError, IResponse, IUser } from '@/interfaces';

interface IBody {
  username?: string;
  bio?: string;
  image?: (File & { preview: string }) | undefined | null;
}

export const editUser = async (body: IBody): Promise<IResponse<IUser>> => {
  try {
    const { data } = await api.patch('users', body, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return { data };
  } catch (e) {
    const { response } = e as AxiosError;
    return { error: response?.data as IError };
  }
};
