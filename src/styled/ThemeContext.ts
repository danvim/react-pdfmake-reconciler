import { createContext, useContext } from "react";
import { DefaultTheme } from "./types.ts";

const ThemeContext = createContext<DefaultTheme>({});

export const useTheme = (): DefaultTheme => useContext(ThemeContext);

export const ThemeProvider = ThemeContext.Provider;
