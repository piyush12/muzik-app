import { ReactElement } from "react";
import Avatar from "../Avatar";
import ListItem from "../List/ListItem";

const PlayerInfo = (): ReactElement => {
  return (
    <ListItem
      primary='Stay'
      secondary='The Kid Laroi, Justin BieberThe Kid Laroi, Justin Bieber'
    >
      <Avatar
        src='https://via.placeholder.com/300/09f/fff.png'
        alt='Test'
        sx={{
          width: "60px",
          height: "60px",
        }}
      />
    </ListItem>
  );
};

export default PlayerInfo;
