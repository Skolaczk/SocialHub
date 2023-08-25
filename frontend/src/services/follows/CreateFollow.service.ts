import { api } from '@/api';

export const createFollow = async (userId: number) => {
  return await api.post(`follows/${userId}`);
};
