import { IPost } from './post.interface';

export interface IUser {
  bio: string;
  createdAt: string;
  email: string;
  id: number;
  image: string;
  password: string;
  updatedAt: string;
  username: string;
  posts: IPost[];
  _count: {
    posts: number;
    followers: number;
    following: number;
  };
  isFollowing: boolean;
}
