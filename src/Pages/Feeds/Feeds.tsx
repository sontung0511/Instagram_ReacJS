import { IconAdd } from "../../components/icon/Icon_add";
import Avastoryuser from "../../components/user_avar_story/Avastoryuser";
import Icon_feeds from "../Icon_feeds/Icon_feeds";

import { StringUtils } from "../../utils";
import { UserFeeds } from "../../components/models";
import { currentUser } from "../../components/data/CurrentUser";

export default function Feeds({ post }: { post: UserFeeds }): JSX.Element {
  const userNameOfAuthor = StringUtils.displayUserName(post.user.userName);
  return (
    <div className=" ml-[230px] mt-3 w-[470px] max-h-full ">
      <div className="relative ">
        <div className="flex items-center mt-2">
          <Avastoryuser url={post.user.avatar} size={30} handlebefore={false} />
          <b className="text-[14px] flex flex-col grow mx-2  ml-[10px] normal-case align-middle ">
            {userNameOfAuthor}
          </b>

          <div className="absolute inset-y-0 right-0 mt-3">
            <IconAdd />
          </div>
        </div>
        <div className="w-[468px] h-[585px] mb-[-15px]">
          {post.images.map((imageUrl, index) => (
            <img
              className="border-2 border-solid mt-2 w-full max-h-[30rem]"
              src={imageUrl}
              key={index}
              alt=""
            />
          ))}
          <div className="flex mt-[12px]  relative">
            <Icon_feeds />
          </div>
          {post.haveLike ? (
            <div>
              <p className="text-[14px] mt-[4px]">
                Liked by{" "}
                <span className="font-semibold text-[14px]">
                  {StringUtils.displayUserName(currentUser.userName)}
                </span>{" "}
                and{" "}
                <span className="font-semibold text-[14px]">
                  {StringUtils.formatNumber(post.totallike - 1)} others
                </span>
              </p>
            </div>
          ) : (
            <span className="font-semibold text-[14px]">
              {StringUtils.formatNumber(post.totallike - 1)} likes
            </span>
          )}
          <div>
            <span className="text-[14px] font-semibold mr-2 ">
              {userNameOfAuthor}
            </span>
            <span>{post.caption}</span>
          </div>
          {/* total comment*/}
          <div className="my-2 font-medium text-[14px]  text-secondary-text">
            <p>
              view all {StringUtils.formatNumber(post.totalcomment)} comment
            </p>
          </div>

          <p className="font-medium text-[12px] text-secondary-text mt-[-16px]">
            3h time
          </p>

          <p className="text-[14px] font-semibold mt-[-16px]">see transation</p>

          <div className="max-w-full  ">
            <input
              className="w-full text-[14px] focus-visible:outline-none"
              type="text"
              placeholder="add a comment....."
            />
          </div>
          <div className="border border-b-4 mt-4  border-slate-300"></div>
        </div>
      </div>
    </div>
  );
}
