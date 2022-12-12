import { FC } from "react";
import { SVGStyle } from "./Mute";
import { PlayIconProps } from "./types";

const Right: FC<PlayIconProps> = ({
  width = 50,
  height = 50,
  fill = "#fff",
}) => {
  return (
    <SVGStyle
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 512 512'
      width={width}
      height={height}
      fill={fill}
    >
      <path d='M0 256C0 397.4 114.6 512 256 512s256-114.6 256-256S397.4 0 256 0S0 114.6 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z' />
    </SVGStyle>
  );
};

export default Right;
