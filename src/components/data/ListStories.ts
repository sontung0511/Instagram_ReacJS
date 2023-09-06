import { Story, User } from "../models";

export type UserStory = User & Story;

export const ListStories: UserStory[] = [
  {
    id: "1",
    displayName: "trung",
    avatar: "",
    userName: "sontung",
    haveSeenBefore: false,
  },
  {
    id: "2",
    displayName: "trung",
    avatar: "",
    userName: "sontung",
    haveSeenBefore: false,
  },
  {
    id: "3",
    displayName: "trung",
    avatar: "",
    userName: "sontung",
    haveSeenBefore: false,
  },
];
