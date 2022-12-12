import type { AppProps } from "next/app";
import { Provider } from "react-redux";

import AppTheme from "@components/AppTheme";
import { ThemeContextProvider } from "@context/ThemeContext";
import { store } from "@store/store";

import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <AppTheme>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </AppTheme>
    </ThemeContextProvider>
  );
}
