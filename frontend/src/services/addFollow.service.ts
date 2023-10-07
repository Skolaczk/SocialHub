import { api } from '@/api';

export const addFollow = async (followerId: number) => {
  await api.post(`follows/${followerId}`);
};
