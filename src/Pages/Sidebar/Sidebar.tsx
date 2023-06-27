import "bootstrap/dist/css/bootstrap.min.css";
import logoImage from "../../components/images/ava.jpg";
import "./Sidebar.css";
import { InstagramLogo } from "../../components/images";
import NavItem from "../../components/nav_item/NavItem";
import { IconHome } from "../../components/icon/Icon_Home";
import { IconHomeActive } from "../../components/icon/Icon_Home_active";
import { IconSearch } from "../../components/icon/Icon_Search";
import { IconSearchActive } from "../../components/icon/Icon_Search_active";
import { IconExplore } from "../../components/icon/Icon_Explo";
import { IconExploreActive } from "../../components/icon/Icon_Explore_active";
import { IconReels } from "../../components/icon/Icon_Reels";
import { IconReelsActive } from "../../components/icon/Icon_Reels_active";
import { IconMessage } from "../../components/icon/Icon_message";
import { IconMessageActive } from "../../components/icon/Icon_message_active";
import { IconNofitication } from "../../components/icon/Icon_nofitication";
import { IconNofiticationActive } from "../../components/icon/Icon_nofitication_active";
import { IconCreate } from "../../components/icon/Icon_create";
import { IconCreateActive } from "../../components/icon/Icon_create_active";
import { IconSettings } from "../../components/icon/Icon_More";
import { IconSettingsActive } from "../../components/icon/Icon_More_active";
import { CircleAvatarMenu } from "../../components/menu_avacircle/profile_circle";

export default function Sidebar(): JSX.Element {
  const ava_cir = logoImage;
  return (
    <div className="sidebar">
      <div
        className={`cursor-pointer mb-2 mt-[20px] px-[12px] pt-[25px] pb-[16px] `}
      >
        <InstagramLogo />
      </div>

      <div className="grow">
        <div className={`px-[12px]`}>
          <NavItem
            icon={<IconHome />}
            activeIcon={<IconHomeActive />}
            title="Home"
            isActive={true}
            onClick={() => console.log("aa")}
          />
          <NavItem
            icon={<IconSearch />}
            activeIcon={<IconSearchActive />}
            title="Search"
            isActive={true}
            onClick={() => console.log("aa")}
          />
          <NavItem
            icon={<IconExplore />}
            activeIcon={<IconExploreActive />}
            title="Explore"
            isActive={true}
            onClick={() => console.log("aa")}
          />
          <NavItem
            icon={<IconReels />}
            activeIcon={<IconReelsActive />}
            title="Reels"
            isActive={true}
            onClick={() => console.log("aa")}
          />
          <NavItem
            icon={<IconMessage />}
            activeIcon={<IconMessageActive />}
            title="Message"
            isActive={true}
            onClick={() => console.log("aa")}
          />
          <NavItem
            icon={<IconNofitication />}
            activeIcon={<IconNofiticationActive />}
            title="Nofitication"
            isActive={true}
            onClick={() => console.log("aa")}
          />
          <NavItem
            icon={<IconCreate />}
            activeIcon={<IconCreateActive />}
            title="Create"
            isActive={true}
            onClick={() => console.log("aa")}
          />
          <NavItem
            icon={
              <CircleAvatarMenu
                url={ava_cir}
                size={24}
                isActive={false}
                onClick={() => console.log("aa")}
              />
            }
            activeIcon={
              <CircleAvatarMenu
                url={ava_cir}
                size={24}
                isActive={false}
                onClick={() => console.log("aa")}
              />
            }
            title="Profile"
            isActive={true}
            onClick={() => console.log("aa")}
          />
        </div>
      </div>

      <div className={`mb-6 px-[12px]`}>
        <NavItem
          icon={<IconSettings />}
          activeIcon={<IconSettingsActive />}
          title="More"
          isActive={true}
          onClick={() => console.log("aa")}
        />
      </div>
    </div>
  );
}
