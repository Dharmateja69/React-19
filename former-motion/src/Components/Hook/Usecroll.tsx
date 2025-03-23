import { useMotionValueEvent, useScroll } from "framer-motion";

const Usecroll = () => {
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (l) => {
    console.log("Page Scroll: ", l);
  });
  return <div></div>;
};

export default Usecroll;
