export type CreateNotification = {
  type: 'like' | 'follow' | 'comment';
  postId?: number;
  userId: number;
  senderId: number;
};
