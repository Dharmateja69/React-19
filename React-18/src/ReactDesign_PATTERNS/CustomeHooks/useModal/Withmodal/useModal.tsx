import { useState } from "react";

const useModal = () => {
  const [isopen, setisopen] = useState(false);
  const openmodal = () => setisopen(true);
  const closemodal = () => setisopen(false);
  return { isopen, openmodal, closemodal };
};

export default useModal;
