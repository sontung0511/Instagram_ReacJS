import "bootstrap/dist/css/bootstrap.min.css";
import logoImage from "../../components/images/ava.jpg";
import "./Sidebar.css";
import { InstagramLogo } from "../images";
import NavItem from "../nav_item/NavItem";
import { IconHome } from "../icon/Icon_Home";
import { IconHomeActive } from "../icon/Icon_Home_active";
import { IconSearch } from "../icon/Icon_Search";
import { IconSearchActive } from "../icon/Icon_Search_active";
import { IconExplore } from "../icon/Icon_Explo";
import { IconExploreActive } from "../icon/Icon_Explore_active";
import { IconReels } from "../icon/Icon_Reels";
import { IconReelsActive } from "../icon/Icon_Reels_active";
import { IconMessage } from "../icon/Icon_message";
import { IconMessageActive } from "../icon/Icon_message_active";
import { IconNofitication } from "../icon/Icon_nofitication";
import { IconNofiticationActive } from "../icon/Icon_nofitication_active";
import { IconCreate } from "../icon/Icon_create";
import { IconCreateActive } from "../icon/Icon_create_active";
import { IconSettings } from "../icon/Icon_More";
import { IconSettingsActive } from "../icon/Icon_More_active";
import { CircleAvatarMenu } from "../menu_avacircle/profile_circle";
import { useState } from "react";
import Search from "../../Pages/Search/search";
import { IconInstagram } from "../icon/Icon_instagram";

export default function Sidebar({
  tabActive,
  onClickTab,
}: {
  tabActive: String;
  onClickTab: (s: string) => void;
}): JSX.Element {
  const ava_cir = logoImage;
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };
  return (
    <>
      <div className={`sidebar   ${collapsed ? "collapsed" : ""}`}>
        <div
          className={`cursor-pointer mb-2 mt-[20px] px-[12px] pt-[25px] pb-[16px] `}
        >
          <InstagramLogo />
        </div>
        <div
          className={`show_icon_logo cursor-pointer mb-2 mt-[20px] px-[12px] pt-[25px] pb-[16px]`}
        >
          <IconInstagram />
        </div>
        <div className={`grow `}>
          <NavItem
            icon={<IconHome />}
            activeIcon={<IconHomeActive />}
            title="Home"
            isActive={tabActive === ""}
            onClick={() => onClickTab("")}
          />
          <NavItem
            icon={<IconSearch />}
            activeIcon={<IconSearchActive />}
            title="Search"
            isActive={false}
            onClick={toggleSidebar}
          />
          <NavItem
            icon={<IconExplore />}
            activeIcon={<IconExploreActive />}
            title="Explore"
            isActive={tabActive === "explore"}
            onClick={() => onClickTab("explore")}
          />
          <NavItem
            icon={<IconReels />}
            activeIcon={<IconReelsActive />}
            title="Reels"
            isActive={tabActive === "reels"}
            onClick={() => onClickTab("reels")}
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
            isActive={tabActive === "profile"}
            onClick={() => onClickTab("profile")}
          />
        </div>
        <div className="mb-6">
          <NavItem
            icon={<IconSettings />}
            activeIcon={<IconSettingsActive />}
            title="More"
            isActive={true}
            onClick={() => console.log("aa")}
          />
        </div>
      </div>
      {/* <div className={`  sidebar2 ${collapsed ? "collapsed" : ""}`}>
        <Search />
      </div> */}
    </>
  );
}
