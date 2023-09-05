import Modalpopup from "../../components/popup/modalpopup";
import Styles from "./styles.module.css";
export default function Search(): JSX.Element {
  return (
    <div className={`${Styles.layout}`}>
      <Modalpopup></Modalpopup>;
    </div>
  );
}
