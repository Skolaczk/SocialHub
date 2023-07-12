import axios from 'axios';
import { IUser } from '@/interfaces';

export const getUsersByUsername = async (username: string) => {
  const { data } = await axios.post<IUser[]>(
    `http://localhost:8080/users?username=${username}`,
  );
  return data;
};
