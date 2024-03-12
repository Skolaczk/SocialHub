export type TUser = {
  bio: string;
  createdAt: string;
  email: string;
  id: number;
  image: string;
  updatedAt: string;
  username: string;
  // posts: IPost[];
  _count: {
    posts: number;
    followers: number;
    following: number;
  };
  isFollowing: boolean;
  isCurrentUserProfile: boolean;
};
