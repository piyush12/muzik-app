import { Sun } from "@components/Icons";
import { ReactElement } from "react";
import { useAppTheme } from "src/context/ThemeContext";
import { ButtonStyle } from "styles/globalStyledComponents";
import styles from "./TopBar.module.css";

const TopBar = (): ReactElement => {
  const { theme, setTheme } = useAppTheme();

  return (
    <div className={styles.topBar}>
      <div className={styles.leftPanel}>
        <h3>Muzik</h3>
        <div className={styles.search}>
          <input type='text' placeholder='Search, Artist, Songs, Playlist' />
        </div>
      </div>
      <div className={styles.rightPanel}>
        <ButtonStyle
          onClick={() =>
            setTheme(() => {
              if (theme === "dark") return "light";
              return "dark";
            })
          }
        >
          <Sun width={20} />
        </ButtonStyle>
      </div>
    </div>
  );
};

export default TopBar;
