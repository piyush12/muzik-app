export interface ThemeType {
  body?: string;
  text?: string;
  primary?: string;
  darkGrey?: string;
  lightGrey?: string;
  input?: string;
}

export const darkTheme: ThemeType = {
  body: "#18181b",
  text: "#fff",
  primary: "#00acc1",
  darkGrey: "#222",
  lightGrey: "#717379",
  input: "#363636",
};

export const lightTheme: ThemeType = {
  ...darkTheme,
  body: "#fff",
  text: "#18181b",
  darkGrey: "#f2f2f2",
  input: "#d4d4d4",
};
