import { motion } from "framer-motion";

const CardFlip = () => {
  return (
    <div className="h-[0vh]  p-10">
      {/* Scrollable height */}
      <div className="h-[100vh] flex justify-center items-center">
        <motion.div
          className="relative w-[200px] h-[200px] [perspective:1000px] cursor-pointer"
          initial={{ y: 100, opacity: 0, rotateY: 0 }} // Start from bottom
          whileInView={{ y: 0, opacity: 1, rotateY: 180 }} // Slide up + rotate
          transition={{ duration: 1.2 }}
          viewport={{ once: false, amount: 0.6 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Front Side */}
          <div className="absolute w-full h-full bg-blue-500 text-white flex justify-center items-center rounded-xl shadow-xl [backface-visibility:hidden]">
            Front
          </div>

          {/* Back Side */}
          <div className="absolute w-full h-full bg-red-500 text-white flex justify-center items-center rounded-xl shadow-xl [transform:rotateY(180deg)] [backface-visibility:hidden]">
            Back
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CardFlip;
