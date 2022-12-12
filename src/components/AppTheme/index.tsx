import { FC, ReactElement } from "react";
import { useAppTheme } from "src/context/ThemeContext";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "styles/globalStyles";
import { darkTheme, lightTheme, ThemeType } from "styles/theme";

const AppTheme: FC<{
  children: ReactElement;
}> = ({ children }): ReactElement => {
  const { theme } = useAppTheme();
  const themeMode:ThemeType = theme === "dark" ? darkTheme : lightTheme;
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default AppTheme;
