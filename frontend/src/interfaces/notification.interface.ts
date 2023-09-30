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

export const notificationMock: INotification = {
  id: 1,
  type: 'follow',
  postId: 2,
  userId: 3,
  senderId: 4,
  createdAt: '2023-09-30',
  sender: {
    id: 4,
    username: 'nazwa_uzytkownika',
    image: 'https://i.postimg.cc/GpjBs2yq/sbcf-default-avatar.png',
  },
};
