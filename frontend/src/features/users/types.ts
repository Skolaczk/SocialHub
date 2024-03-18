import { TPost } from '@/features/posts';

export type TUser = {
  bio: string;
  createdAt: string;
  email: string;
  id: number;
  image: string;
  updatedAt: string;
  username: string;
  posts: TPost[];
  _count: {
    posts: number;
    followers: number;
    following: number;
  };
  isFollowing: boolean;
  isCurrentUserProfile: boolean;
};
