import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Styles from "./styles.module.css";
import { useCallback, useEffect, useState } from "react";
import Content from "../content/Content";
export default function Root(): JSX.Element {
  const [tabActive, setTabActive] = useState<string>("");
  const navigate = useNavigate();
  useEffect(() => {
    handleNavigate(tabActive);
  }, [tabActive]);
  const handleNavigate = useCallback(
    (url: string) => {
      navigate(url, { replace: true });
    },
    [navigate]
  );

  return (
    <div className={`${Styles.layout}`}>
      <Sidebar tabActive={tabActive} onClickTab={setTabActive} />
      <Content>
        <Outlet />
      </Content>
    </div>
  );
}
