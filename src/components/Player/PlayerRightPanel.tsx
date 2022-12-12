import { ChangeEvent, ReactElement, useCallback } from "react";
import styled from "styled-components";

import Duration from "@components/Duration";
import { Mute, VolumeHigh, VolumeLow } from "@components/Icons";
import VolumeRange from "./VolumeRange";

const PlayerRightPanel = (): ReactElement => {
  const handleVolumeChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      console.log(event.target.value);
    },
    []
  );

  return (
    <PlayerRightPanelContainer>
      <Duration totalTime='3:30' currentTime='1:12' />
      <ButtonStyle>
        <VolumeHigh width={20} height={20} />
      </ButtonStyle>
      <ButtonStyle>
        <VolumeLow width={20} height={20} />
      </ButtonStyle>
      <ButtonStyle>
        <Mute width={20} height={20} />
      </ButtonStyle>

      <VolumeRange onChange={handleVolumeChange} />
    </PlayerRightPanelContainer>
  );
};

export default PlayerRightPanel;

const PlayerRightPanelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
`;

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
