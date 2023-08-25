import { api } from '@/api';

export const deleteFollow = async (userId: number) => {
  return await api.delete(`follows/${userId}`);
};
