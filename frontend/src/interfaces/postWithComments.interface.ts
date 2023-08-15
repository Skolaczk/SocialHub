import { IPost } from './post.interface';
import { IComment } from './comment.interface';

export interface IPostWithComments extends IPost {
  comments: IComment[];
}
