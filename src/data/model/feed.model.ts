import { ICategory, IUser } from '.';

export interface IFeed {
  _id: string;
  user: IUser;
  category: ICategory;
  title: string;
  mediaUrl: string;
  createdAt: string;
  likesCount: number;
  commentsCount: number;
  page: number;
}
