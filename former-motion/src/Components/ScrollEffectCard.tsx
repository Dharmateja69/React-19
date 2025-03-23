// import { motion, useScroll, useTransform } from "framer-motion";

// const ScrollEffectCard = () => {
//   const { scrollYProgress } = useScroll();

//   const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-200%"]);
//   const scale1 = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

//   const x2 = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
//   const rotate2 = useTransform(scrollYProgress, [0, 1], ["0deg", "360deg"]);

//   const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "300%"]);
//   const opacity3 = useTransform(scrollYProgress, [0, 1], [1, 0]);

//   return (
//     <div className="h-[300vh] bg-gradient-to-b from-gray-100 to-gray-300 flex flex-col items-center justify-start pt-[40vh] space-y-16">
//       <motion.div
//         style={{ y: y1, scale: scale1 }}
//         className="w-[250px] h-[250px] bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xl font-bold rounded-2xl shadow-2xl flex items-center justify-center"
//       >
//         Scroll Zoom ✨
//       </motion.div>

//       <motion.div
//         style={{ x: x2, rotate: rotate2 }}
//         className="w-[250px] h-[250px] bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-xl font-bold rounded-2xl shadow-2xl flex items-center justify-center"
//       >
//         Scroll Rotate 🎯
//       </motion.div>

//       <motion.div
//         style={{ y: y3, opacity: opacity3 }}
//         className="w-[250px] h-[250px] bg-gradient-to-r from-green-500 to-lime-400 text-white text-xl font-bold rounded-2xl shadow-2xl flex items-center justify-center"
//       >
//         Scroll Fade 👻
//       </motion.div>
//     </div>
//   );
// };

// export default ScrollEffectCard;

import { motion, useScroll, useTransform } from "framer-motion";

const ScrollEffectCard = () => {
  const { scrollYProgress } = useScroll();

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="h-[300vh] bg-gradient-to-b from-white to-gray-200 flex items-center justify-center">
      <motion.img
        style={{ scale, opacity }}
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1000"
        alt="Zooming"
        className="w-[500px] h-auto rounded-2xl shadow-xl object-cover"
      />
    </div>
  );
};

export default ScrollEffectCard;
