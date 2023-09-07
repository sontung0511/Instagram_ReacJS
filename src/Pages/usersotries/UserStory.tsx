import "bootstrap/dist/css/bootstrap.min.css";
import Avastoryuser from "../../components/user_avar_story/Avastoryuser";
import { ListStories } from "../../components/data/ListStories";
import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";

export default function UserStory(): JSX.Element {
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement>;
  const { events } = useDraggable(ref);
  let scrollPosition = 0;
  const scrollStep = 50; // Adjust the scroll amount as needed

  const handleScrollLeft = () => {
    scrollPosition -= scrollStep;
    if (scrollPosition < 0) {
      scrollPosition = 0;
    }
    if (ref.current) {
      ref.current.style.transform = `translateX(-${scrollPosition}px)`;
    }
  };

  const handleScrollRight = () => {
    if (ref.current) {
      scrollPosition += scrollStep;
      const maxScroll = ref.current.scrollWidth - ref.current.clientWidth;
      if (scrollPosition > maxScroll) {
        scrollPosition = maxScroll;
      }
      ref.current.style.transform = `translateX(-${scrollPosition}px)`;
    }
  };
  return (
    <div className="relative">
      <button
        className="border rounded-full absolute left-[116px] top-6    "
        onClick={handleScrollLeft}
      >
        &lt;
      </button>
      <div className="  mt-14  whitespace-nowrap overflow-x-hidden ml-[55px]  ">
        <div className="" {...events} ref={ref}>
          {ListStories.map((e, index) => {
            return (
              <div
                className="first:lp-3 last:pr-6 cursor-pointer inline-block pl-[20px] "
                key={index}
              >
                <div className="flex flex-col justify-center items-center">
                  <Avastoryuser
                    url={e.avatar}
                    size={51}
                    handlebefore={e.haveSeenBefore}
                  />
                  <p
                    className="text-[10px] text-ellipsis overflow-hidden max-w-[74px] pt-[4px] px-[2px]"
                    style={{ color: e.haveSeenBefore ? "grey" : "black" }}
                  >
                    {e.userName.replace("#", "").trimStart()}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <button
          className="rounded-full border absolute top-6 right-[76px] "
          onClick={handleScrollRight}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
