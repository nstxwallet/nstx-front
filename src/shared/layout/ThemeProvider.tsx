"use client";

import { Theme } from "@radix-ui/themes";
import React, { createContext, useContext, useEffect, useState } from "react";

type ThemeAppearance = "light" | "dark";

interface ThemeContextProps {
  theme: ThemeAppearance;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeAppearance>("dark");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as ThemeAppearance;
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
    }
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      document.documentElement.classList.toggle("dark", newTheme === "dark");
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Theme appearance={theme}>
        <div className={theme}>{children}</div>
      </Theme>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("wrap your app in ThemeProvider");
  }
  return context;
};
