import Left from "./ReactDesign_PATTERNS/Components/Left";
import Right from "./ReactDesign_PATTERNS/Components/Right";
import Split from "./ReactDesign_PATTERNS/Components/Split";

function App() {
  return (
    <Split leftwidth={60} rightwidth={40}>
      <Left />
      <Right />
    </Split>
  );
}

export default App;
