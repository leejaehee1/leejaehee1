import type { FC } from "react";

export type IconProps = {
  name: string;
  style?: React.CSSProperties;
};

export const Icon: FC<IconProps> = ({ name, style }) => {
  return (
    <span className="material-icons" style={style}>
      {name}
    </span>
  );
};
