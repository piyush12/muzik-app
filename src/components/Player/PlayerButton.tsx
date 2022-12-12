import React, { ComponentType, FC, ReactElement } from "react";
import styled from "styled-components";

interface PlayerButtonProps {
  item: {
    name: string;
    Icon: ComponentType | keyof JSX.IntrinsicElements;
    width: number;
    height: number;
  };
  onClick: (val: string) => void;
}

const PlayerButton: FC<PlayerButtonProps> = ({
  item,
  onClick,
}): ReactElement => {
  const Component = item.Icon;
  return (
    <ButtonStyle onClick={() => onClick(item.name)}>
      <Component width={item.width} height={item.height} />
    </ButtonStyle>
  );
};

export default React.memo(PlayerButton);

const ButtonStyle = styled.button`
  outline: 0;
  border: 0;
  margin: 0;
  padding: 5px;
  height: auto;
  line-height: 1;
  cursor: pointer;
  background: none;
`;
