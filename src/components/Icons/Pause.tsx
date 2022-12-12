import { FC, ReactElement } from "react";
import { SVGStyle } from "./Mute";
import { PlayIconProps } from "./types";

export const Pause: FC<PlayIconProps> = ({
  width,
  height,
  fill = "#fff",
}): ReactElement => {
  return (
    <SVGStyle
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      width={width}
      height={height}
      fill={fill}
    >
      <path d='M6.5,0A3.5,3.5,0,0,0,3,3.5v17a3.5,3.5,0,0,0,7,0V3.5A3.5,3.5,0,0,0,6.5,0Z' />
      <path d='M17.5,0A3.5,3.5,0,0,0,14,3.5v17a3.5,3.5,0,0,0,7,0V3.5A3.5,3.5,0,0,0,17.5,0Z' />
    </SVGStyle>
  );
};
export default Pause