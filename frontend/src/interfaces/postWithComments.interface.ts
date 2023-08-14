import { IPost } from './post.interface';
import { Comment } from './comment.interface';

export interface IPostWithComments extends IPost {
  comments: Comment[];
}
