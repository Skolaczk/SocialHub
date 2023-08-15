export interface IComment {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  userId: number;
  postId: number;
  user: {
    username: string;
    image: string;
  };
}