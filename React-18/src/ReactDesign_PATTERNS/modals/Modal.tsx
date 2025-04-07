import { ReactNode, useState } from "react";

interface ModalProp {
  children: ReactNode;
}

const Modal = ({ children }: ModalProp) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section>
        {/* Open Modal Button */}
        <button
          className="border p-5 bg-gray-900 text-white"
          onClick={() => setOpen(true)}
        >
          Show Modal
        </button>

        {/* Overlay + Modal */}
        {open && (
          <section
            className="fixed inset-0 z-10 flex justify-center items-center bg-black bg-opacity-50"
            onClick={() => setOpen(false)}
          >
            {/* Scrollable Modal Content */}
            <div
              className="bg-white w-[90%] max-w-[600px] max-h-[80vh] overflow-y-auto p-5 rounded shadow-md"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Hide Button */}
              <button
                className="mb-4 border px-4 py-2 bg-gray-300 rounded"
                onClick={() => setOpen(false)}
              >
                Hide Modal
              </button>

              {/* Custom Scrollable Content */}
              {children}
            </div>
          </section>
        )}
      </section>
    </>
  );
};

export default Modal;
