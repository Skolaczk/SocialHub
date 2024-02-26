export const getNotificationMessage = (type: string) => {
  let message = '';

  switch (type) {
    case 'follow':
      message = 'started follows you!';
      break;
    case 'like':
      message = 'liked your post!';
      break;
    case 'comment':
      message = 'commented your post!';
      break;
  }

  return message;
};
