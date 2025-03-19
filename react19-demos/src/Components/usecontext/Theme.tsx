import { createContext, ReactNode, useState } from "react";
import Card from "./Card";

// Define the type for the context value
interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

// Create context with an initial undefined state
export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

// ThemeProvider props type
interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const Theme = () => {
  return (
    <ThemeProvider>
      <Card />
    </ThemeProvider>
  );
};

export default Theme;
