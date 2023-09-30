import { IComment } from '@/interfaces/comment.interface';

export interface IPost {
  id: number;
  content: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  userId: number;
  user: {
    username: string;
    image: string;
  };
  _count: { comments: number; likes: number };
  comments: IComment[];
  isLiked: boolean;
}

export const postMock: IPost = {
  id: 1,
  content: 'To jest zawartość posta',
  image: 'https://i.postimg.cc/GpjBs2yq/sbcf-default-avatar.png',
  createdAt: '2023-09-30',
  updatedAt: '2023-09-30',
  userId: 2,
  user: {
    username: 'username_uzytkownika',
    image: 'https://i.postimg.cc/GpjBs2yq/sbcf-default-avatar.png',
  },
  _count: {
    comments: 0,
    likes: 0,
  },
  comments: [],
  isLiked: false,
};
