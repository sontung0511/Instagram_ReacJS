// import { CircleAvatar } from "../../components/circle_avatar/profile_circle";
// import Avastoryuser from "../../components/user_avar_story/Avastoryuser";

import { ListFeeds } from "../../components/data/ListFeeds";

import Feeds from "../Feeds/Feeds";

import UserStory from "../usersotries/UserStory";
import Styles from "./styles.module.css";

export default function Home(): JSX.Element {
  return (
    <div className="relative">
      <div className="flex  w-[820px]  ">
        <div className={` w-full `}>
          <UserStory />
        </div>
      </div>
      <div
        className={`${Styles.suggestions} absolute inset-y-0 right-0 w-16 mt-14 mr-[64px] bg-zinc-400`}
      >
        right
      </div>
      {ListFeeds && ListFeeds.map((e) => <Feeds post={e} key={e.id} />)}
    </div>
  );
}
