import ModalBody from "./ModalBody";
import ModalFooter from "./ModalFooter";
import ModalTitle from "./ModalTitle";

const Modal = ({
  children,
  onClose,
}: {
  children: React.ReactNode;
  onClose: () => void;
}) => {
  return (
    <div className="mt-4">
      <p className="text-gray-500 text-xs border border-solid">
        {children}
        <button
          className="bg-black text-white border border-solid rounded  px-5 py-5"
          onClick={onClose}
        >
          close
        </button>
      </p>
    </div>
  );
};

Modal.title = ModalTitle;
Modal.Body = ModalBody;
Modal.footer = ModalFooter;

export default Modal;
