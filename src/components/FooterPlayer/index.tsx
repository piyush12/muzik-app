import { ReactElement } from "react";
import Player from "../Player";
import PlayerConfig from "../Player/PlayerRightPanel";
import PlayerInfo from "../Player/PlayerInfo";
import styles from "./FooterPlayList.module.css";

const FooterPlayList = (): ReactElement => {
  return (
    <div className={styles.footer_holder}>
      <div className={styles.footer_info}>
        <PlayerInfo />
      </div>
      <div className={styles.footer_player}>
        <Player />
      </div>
      <div className={styles.footer_config}>
        <PlayerConfig />
      </div>
    </div>
  );
};

export default FooterPlayList;
