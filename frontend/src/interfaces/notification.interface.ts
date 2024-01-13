export interface INotification {
  id: number;
  type: 'follow' | 'like' | 'comment';
  postId?: number;
  userId: number;
  senderId: number;
  createdAt: string;
  sender: {
    id: number;
    username: string;
    image: string;
  };
}
