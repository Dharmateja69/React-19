import { games } from "./ReactDesign_PATTERNS/modals/data";
import GameInfo from "./ReactDesign_PATTERNS/modals/GameInfo";
import Modal from "./ReactDesign_PATTERNS/modals/Modal";

const App = () => {
  return (
    <>
      <Modal>
        <GameInfo data={games} />
      </Modal>
    </>
  );
};

export default App;
