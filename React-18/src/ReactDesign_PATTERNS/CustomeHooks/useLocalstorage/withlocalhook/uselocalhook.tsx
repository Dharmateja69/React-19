import { useEffect, useState } from "react";

const uselocalhook = () => {
  const [theme, settheme] = useState("light");
  useEffect(() => {
    const stored = window.localStorage.getItem("theme");
    if (stored) {
      settheme(JSON.parse(stored));
    }
  }, []);
  const toggle = () => {
    const newtheme = theme === "light" ? "dark" : "light";
    settheme(newtheme);
    window.localStorage.setItem("theme", JSON.stringify(newtheme));
  };
  return { toggle, theme };
};

export default uselocalhook;
