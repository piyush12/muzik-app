import { ComponentType, FC, ReactElement, useCallback, useState } from "react";
import {
  NextIcon,
  PauseIcon,
  PlayIcon,
  PreviousIcon,
  Repeaticon,
  ShuffleIcon,
} from "@components/Icons";
import styled from "styled-components";
import PlayerButton from "./PlayerButton";

interface PlayerButtonConfigProps {
  name: string;
  width: number;
  height: number;
  Icon: ComponentType | keyof JSX.IntrinsicElements;
}

const playerButtonConfig: PlayerButtonConfigProps[] = [
  { name: "Repeat", Icon: Repeaticon, width: 20, height: 20 },
  {
    name: "Previous",
    Icon: PreviousIcon,
    width: 20,
    height: 20,
  },
  { name: "Play", Icon: PlayIcon, width: 20, height: 20 },
  { name: "Pause", Icon: PauseIcon, width: 20, height: 20 },
  { name: "Next", Icon: NextIcon, width: 20, height: 20 },
  {
    name: "Shuffle",
    Icon: ShuffleIcon,
    width: 20,
    height: 20,
  },
];

const Player = (): ReactElement => {
  const [onPlay, setOnPlay] = useState(false);

  const handleClick = useCallback((name: string) => {
    if (name === "Play") {
      setOnPlay(true);
    }
    if (name === "Pause") {
      setOnPlay(false);
    }

    const audio  = new Audio("https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/a5/79/7e/a5797ee9-a15a-4f3b-0a68-0ac53b28ae86/mzaf_14258047481717338383.plus.aac.ep.m4a");
  }, []);

  return (
    <PlayerContainer>
      {playerButtonConfig.map((item) => {
        if (item.name === "Play" && onPlay) return null;
        if (item.name === "Pause" && !onPlay) return null;
        return (
          <PlayerButton item={item} onClick={handleClick} key={item.name} />
        );
      })}
    </PlayerContainer>
  );
};

export default Player;

const PlayerContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 25px;
`;
