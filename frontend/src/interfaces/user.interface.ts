import { IPost } from './post.interface';

export interface IUser {
  bio: string;
  createdAt: string;
  email: string;
  id: number;
  image: string;
  updatedAt: string;
  username: string;
  posts: IPost[];
  _count: {
    posts: number;
    followers: number;
    following: number;
  };
  isFollowing: boolean;
  isCurrentUserProfile: boolean;
}

export const userMock: IUser = {
  bio: 'To jest moje bio',
  createdAt: '2023-09-30',
  email: 'mojemail@example.com',
  id: 1,
  image: 'https://i.postimg.cc/GpjBs2yq/sbcf-default-avatar.png',
  updatedAt: '2023-09-30',
  username: 'mojusername',
  posts: [],
  _count: {
    posts: 0,
    followers: 0,
    following: 0,
  },
  isFollowing: false,
  isCurrentUserProfile: true,
};
