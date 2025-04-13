import { useState } from "react";
import Modal from "./ReactDesign_PATTERNS/Challenges/CompoundComponents/Modal";

const App = () => {
  const [isopen, setopne] = useState(false);

  return (
    <>
      {!isopen && (
        <button
          className="bg-black text-white border border-solid rounded px-10 py-10"
          onClick={() => setopne(true)}
        >
          Click
        </button>
      )}

      {isopen && (
        <Modal onClose={() => setopne(false)}>
          <Modal.title>This is the Modal Title</Modal.title>
          <Modal.Body>This is the Modal Body</Modal.Body>
          <Modal.footer>This is the Modal Footer</Modal.footer>
        </Modal>
      )}
    </>
  );
};

export default App;
