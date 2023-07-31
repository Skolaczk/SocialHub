export interface INotification {
  id: number;
  sender: { image: string; username: string };
  type: string;
  createdAt: string;
  message: string;
}
