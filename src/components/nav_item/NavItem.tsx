import "bootstrap/dist/css/bootstrap.min.css";
import "./NavItem.css";

export default function NavItem({
  icon,
  activeIcon,
  title,
  isActive,
  onClick,
}: {
  icon: JSX.Element;
  activeIcon: JSX.Element;
  title: string;
  isActive: boolean;
  onClick: () => void;
}): JSX.Element {
  return (
    <div className="NavItem pl-[0.75rem]" onClick={onClick}>
      {isActive ? activeIcon : icon}
      <p
        className={`text-base pl-4`}
        style={{ fontWeight: isActive ? "600" : "normal" }}
      >
        {title}
      </p>
    </div>
  );
}
