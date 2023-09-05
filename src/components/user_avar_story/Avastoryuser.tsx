import "bootstrap/dist/css/bootstrap.min.css";

import { CircleAvatar } from "../circle_avatar/profile_circle";

export default function Avastoryuser({
  url,
  size,
  handlebefore,
}: {
  url: string;
  size: number;
  handlebefore: boolean;
}): JSX.Element {
  return (
    <div
      className={
        !handlebefore
          ? "  p-[2px] bg-gradient-to-tr from-amber-500 to-fuchsia-500 rounded-full"
          : "border-[1px]"
      }
    >
      <div className=" p-[2px] bg-white rounded-full">
        <CircleAvatar url={url} size={size} onClick={() => console.log("aa")} />
      </div>
    </div>
  );
}
