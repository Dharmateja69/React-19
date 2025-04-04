import Content from "./ReactDesign_PATTERNS/Challenges/Splitborders/Content";
import Footer from "./ReactDesign_PATTERNS/Challenges/Splitborders/Footer";
import Header from "./ReactDesign_PATTERNS/Challenges/Splitborders/Header";
import Sidebar from "./ReactDesign_PATTERNS/Challenges/Splitborders/Sidebar";
import SplitScreen from "./ReactDesign_PATTERNS/Challenges/Splitborders/SplitScreen";

function App() {
  return (
    <div>
      <Header />

      <SplitScreen left={30} right={70}>
        <Sidebar />
        <Content />
      </SplitScreen>

      <Footer />
    </div>
  );
}

export default App;
