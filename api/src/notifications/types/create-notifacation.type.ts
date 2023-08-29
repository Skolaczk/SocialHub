export type CreateNotifacation = {
  type: 'Like' | 'Follow' | 'Comment';
  postId: number;
  userId: number;
  senderId: number;
};
