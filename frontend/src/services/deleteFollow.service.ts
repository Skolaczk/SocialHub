import { api } from '@/api';

export const deleteFollow = async (followerId: number) => {
  await api.delete(`follows/${followerId}`);
};
