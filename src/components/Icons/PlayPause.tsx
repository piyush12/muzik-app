import { FC, ReactElement } from "react";
import { SVGStyle } from "./Mute";
import { PlayIconProps } from "./types";

export const PlayPause: FC<PlayIconProps> = ({
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
      <path d='M22,21c-.553,0-1-.448-1-1V4c0-.552,.447-1,1-1s1,.448,1,1V20c0,.552-.447,1-1,1Zm-4,0c-.553,0-1-.448-1-1V4c0-.552,.447-1,1-1s1,.448,1,1V20c0,.552-.447,1-1,1Zm-13.673-.271c-.509,0-1.023-.122-1.509-.367-1.139-.578-1.818-1.683-1.818-2.958V6.597c0-1.275,.679-2.381,1.817-2.958,1.119-.567,2.452-.457,3.46,.285l7.368,5.402c.86,.631,1.354,1.606,1.354,2.674s-.494,2.043-1.355,2.674l-7.368,5.403c-.588,.432-1.265,.651-1.949,.651Z' />
    </SVGStyle>
  );
};

export default PlayPause;
