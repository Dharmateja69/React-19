import { useState } from "react";

const Modal = () => {
  const [isopen, setisopen] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen relative">
      {/* Show button only if modal is not open */}
      {!isopen && (
        <button
          className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
          onClick={() => setisopen(true)}
        >
          Open Modal
        </button>
      )}

      {/* Modal */}
      {isopen && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-10"></div>

          {/* Modal Content */}
          <div className="fixed z-20 w-[400px] bg-white rounded-xl shadow-xl p-6 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center space-y-4">
            <p className="text-lg font-medium text-gray-800">
              This is an open modal
            </p>
            <button
              className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
              onClick={() => setisopen(false)}
            >
              Close
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Modal;
