import { useEffect, useState } from "react";

const Usewithout = () => {
  const [theme, setheme] = useState<string>("light");
  useEffect(() => {
    const stored = window.localStorage.getItem("theme");
    if (stored) {
      setheme(JSON.parse(stored));
      //   console.log(stored);
    }
  }, []);
  const toggletheme = () => {
    const newtheme = theme === "light" ? "dark" : "light";
    setheme(newtheme);
    window.localStorage.setItem("theme", JSON.stringify(newtheme));
  };
  return (
    <div
      style={{
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        padding: "20px",
      }}
    >
      <h1>Current Theme:{theme}</h1>
      <button onClick={toggletheme}>Toggle Theme</button>
    </div>
  );
};

export default Usewithout;
