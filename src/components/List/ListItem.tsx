import React, { FC, isValidElement, ReactElement } from "react";
import styled from "styled-components";

interface ListItemProps {
  primary?: string;
  secondary?: string;
  children?: React.ReactElement;
  direction?: string;
}

interface ContainerProps {
  hasChildren: boolean;
  direction: string;
}

const ListItem: FC<ListItemProps> = ({
  primary,
  secondary,
  children,
  direction = "initial",
}): ReactElement => {
  return (
    <ListItemContainer
      hasChildren={isValidElement(children)}
      direction={direction}
    >
      {children}
      <div className='item-text'>
        {primary && <h3>{primary}</h3>}
        {secondary && <p>{secondary}</p>}
      </div>
    </ListItemContainer>
  );
};

export default ListItem;

const ListItemContainer = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  flex-direction: ${({ direction }) => direction};

  .item-text {
    padding: 15px;
    width: ${({ hasChildren, direction }) =>
      hasChildren && direction !== "column" ? "70%" : "100%"};

    h3 {
      margin: 0;
      margin-bottom: 10px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    p {
      margin: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
`;
