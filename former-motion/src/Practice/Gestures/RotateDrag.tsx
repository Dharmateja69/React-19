import { motion, useMotionValue, useTransform } from "framer-motion";

const RotateDrag = () => {
  // 1. Create a motion value for x (horizontal drag position)
  const x = useMotionValue(0);
  //Creates a MotionValue to track the state and velocity of a value.

  // 2. Map the x position to a rotation angle using useTransform
  const rotate = useTransform(x, [-200, 200], [-45, 45]);
  //Create a MotionValue that transforms the output of another MotionValue by mapping it from one range of values into another.
  return (
    <div>
      <motion.div
        className="w-[100px] h-[100px] bg-white rounded-lg"
        drag="x" // Only allow horizontal drag
        style={{ x, rotate }} // Link x to drag, rotate to x
        dragConstraints={{ left: -200, right: 200 }}
        dragElastic={0.3}
      />
    </div>
  );
};

export default RotateDrag;
