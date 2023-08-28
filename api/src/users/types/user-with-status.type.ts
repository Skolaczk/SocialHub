import { User } from '@prisma/client';

export type UserWithStatus = User & {
  isFollowing: boolean;
  isCurrentUserProfile: boolean;
};
