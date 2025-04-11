import uselocalhook from "./uselocalhook";

const Withhook = () => {
  const { toggle, theme } = uselocalhook();
  return (
    <div
      style={{
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        padding: "20px",
      }}
    >
      <button onClick={toggle}>Toggle Button</button>
    </div>
  );
};

export default Withhook;
