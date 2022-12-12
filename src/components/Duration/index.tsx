import { FC, ReactElement } from "react";
import styled from "styled-components";

interface IDuration {
  totalTime?: string;
  currentTime?: string;
}

const Duration: FC<IDuration> = ({ totalTime, currentTime }): ReactElement => {
  return (
    <PlayBackTime>
      {currentTime && (
        <>
          <span>{currentTime}</span> /{" "}
        </>
      )}{" "}
      {totalTime && <span>{totalTime}</span>}
    </PlayBackTime>
  );
};

export default Duration;

const PlayBackTime = styled.div`
  color:${(props) => props.theme.text};
`;
