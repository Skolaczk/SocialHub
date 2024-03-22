export type TPost = {
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
  isLiked: boolean;
};

export type TComment = {
  id: number;
  content: string;
  createdAt: string;
  postId: number;
  user: {
    id: number;
    username: string;
    image: string;
  };
};

export type TCreateCommentCommand = {
  content: string;
  postId: number;
};
