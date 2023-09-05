// import { CircleAvatar } from "../../components/circle_avatar/profile_circle";
// import Avastoryuser from "../../components/user_avar_story/Avastoryuser";

import UserStory from "../usersotries/UserStory";
import Styles from "./styles.module.css";

export default function Home(): JSX.Element {
  return (
    <div className="flex  ">
      <div className={`mr-[80px] w-[820px] `}>
        <UserStory />
      </div>

      <div className={`${Styles.suggestions} mt-14 bg-zinc-400`}>right</div>
    </div>
  );
}
