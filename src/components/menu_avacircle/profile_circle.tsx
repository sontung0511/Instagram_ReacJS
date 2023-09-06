export const CircleAvatarMenu = ({
  url,
  size,
  isActive,
  onClick,
}: {
  url: string;
  size?: number;
  isActive: boolean;
  onClick: () => void;
}): JSX.Element => {
  return (
    <img
      src={url}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        border: isActive ? "2px solid #000" : "none",
      }}
      alt=""
      onClick={onClick}
      className="rounded-full border-[1px]"
    />
  );
};
