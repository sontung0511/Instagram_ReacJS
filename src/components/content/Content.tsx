import { ReactNode } from "react";
import "./Content.css";
export default function Content({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  return <div className="content">{children}</div>;
}
