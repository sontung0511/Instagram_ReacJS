import { IconComment } from "../../components/icon/Icon_comment";
import { IconHeart } from "../../components/icon/Icon_heart";
import { IconSave } from "../../components/icon/Icon_save";
import { IconSent } from "../../components/icon/Icon_sent";

export default function Icon_feeds(): JSX.Element {
  return (
    <div>
      <button className="mr-[10px]">
        <IconHeart />
      </button>
      <button className="mr-[10px]">
        <IconComment />
      </button>
      <button className="mr-[10px]">
        <IconSent />
      </button>
      <button className="absolute inset-y-0 right-0">
        <IconSave />
      </button>
    </div>
  );
}
