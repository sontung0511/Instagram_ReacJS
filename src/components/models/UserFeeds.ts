import { User } from "./User";

export interface UserFeeds {
  id: string;
  caption: string;
  images: string[];
  haveLike: boolean;
  totallike: number;
  totalcomment: number;
  user:User;
}
