import React, { ReactNode } from "react";
import Sidebar from "../../Pages/Sidebar/Sidebar";

interface Props {
  children: ReactNode;
}

const DefaultLayout = ({ children }: Props) => {
  return (
    <div>
      <div className="">
        aaa
        <Sidebar />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default DefaultLayout;
