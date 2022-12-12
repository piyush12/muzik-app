import Image from "next/image";
import styled from "styled-components";
import { FC, ReactElement } from "react";

interface AvatarProps {
  src: string;
  alt?: string;
  variant?: "square" | "circle";
  sx?: {
    width: string;
    height: string;
  };
  hoverEffect?: boolean;
  hoverContent?: ReactElement | ReactElement[];
}

type AvatarContainerProps = Pick<AvatarProps, "sx" | "variant">;

const Avatar: FC<AvatarProps> = ({
  src,
  alt = "",
  sx = { width: "", height: "" },
  variant = "square",
  hoverEffect = false,
  hoverContent,
}): ReactElement => {
  return (
    <AvatarContainer sx={sx} variant={variant}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} />
      {hoverEffect && <div className='itemHover'>{hoverContent}</div>}
    </AvatarContainer>
  );
};

export default Avatar;

const AvatarContainer = styled.div<AvatarContainerProps>`
  position: relative;
  width: 40px;
  height: 40px;
  overflow: hidden;
  border-radius: ${({ variant }) => (variant === "circle" ? "50%" : "0")};
  ${(props) => props.sx};

  img {
    position: absolute;
    inset: 0px;
    box-sizing: border-box;
    padding: 0px;
    border: none;
    margin: auto;
    display: block;
    width: 0px;
    height: 0px;
    min-width: 100%;
    max-width: 100%;
    min-height: 100%;
    max-height: 100%;
    vertical-align: middle;
  }
`;
