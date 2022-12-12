import { FC } from "react";
import { SVGStyle } from "./Mute";
import { PlayIconProps } from "./types";

export const Repeat: FC<PlayIconProps> = ({
  width = 50,
  height = 50,
  fill = "#fff",
}) => {
  return (
    <SVGStyle
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      width={width}
      height={height}
      fill={fill}
    >
      <path d='M24,12c0,4.411-3.589,8-8,8H3l2.5,2.5-1.414,1.414-3.5-3.5c-.78-.779-.78-2.049,0-2.828l3.5-3.5,1.414,1.414-2.5,2.5h13c3.309,0,6-2.691,6-6h2ZM8,6h13l-2.5,2.5,1.414,1.414,3.5-3.5c.78-.779,.78-2.049,0-2.828L19.914,.086l-1.414,1.414,2.5,2.5H8C3.589,4,0,7.589,0,12H2c0-3.309,2.691-6,6-6Z' />
    </SVGStyle>
  );
};

export default Repeat;
