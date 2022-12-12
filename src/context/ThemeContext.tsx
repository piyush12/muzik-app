import React, { createContext, useContext, useState } from "react";

interface IContext {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

const ThemeContext = createContext<IContext | null>(null);

const ThemeContextProvider = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const [theme, setTheme] = useState("dark");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useAppTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw Error("Please wrap app inside ThemeContextProvider");
  }
  return context;
};

export { ThemeContext, ThemeContextProvider, useAppTheme };
