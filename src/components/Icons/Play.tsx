import { ReactElement } from "react";
import { SVGStyle } from "./Mute";
import { PlayIconProps } from "./types";

export const Play: React.FC<PlayIconProps> = ({
  width = 50,
  height = 50,
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
      <path d='M20.492,7.969,10.954.975A5,5,0,0,0,3,5.005V19a4.994,4.994,0,0,0,7.954,4.03l9.538-6.994a5,5,0,0,0,0-8.062Z' />
    </SVGStyle>
  );
};

export default Play;
