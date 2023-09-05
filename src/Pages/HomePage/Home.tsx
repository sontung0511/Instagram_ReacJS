import Styles from "./styles.module.css";

export default function Home(): JSX.Element {
  return (
    <div className="flex justify-center flex-row">
      <div className={`${Styles.container_feed} `}>
        list story
        <div>
          <div className="flex flex-col">story</div>
        </div>
      </div>
      <div className={`${Styles.suggestions} bg-zinc-400`}>right</div>
    </div>
  );
}
