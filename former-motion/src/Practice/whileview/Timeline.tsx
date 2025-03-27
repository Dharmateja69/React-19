import { motion } from "framer-motion";

const Timeline = () => {
  return (
    <div className="h-[300vh]  p-10">
      {/* Spacer to enable scroll */}
      <div className="h-[200vh]"></div>

      {/* Cards Section */}
      <div className="flex flex-col gap-10 items-center">
        {/* Card 1 - Rotate */}
        <motion.div
          whileInView={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity }}
          className="w-60 h-40 bg-blue-500 text-white flex justify-center items-center rounded-lg shadow-xl"
        >
          Rotate Card
        </motion.div>

        {/* Card 2 - Scale */}
        <motion.div
          whileInView={{ scale: 1.2 }}
          transition={{ duration: 1, repeat: Infinity }}
          className="w-60 h-40 bg-green-500 text-white flex justify-center items-center rounded-lg shadow-xl"
        >
          Scale Card
        </motion.div>

        {/* Card 3 - Fade In */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 5, repeat: Infinity }}
          className="w-60 h-40 bg-red-500 text-white flex justify-center items-center rounded-lg shadow-xl"
        >
          Fade Card
        </motion.div>
      </div>
    </div>
  );
};

export default Timeline;
