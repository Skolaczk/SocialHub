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
}
