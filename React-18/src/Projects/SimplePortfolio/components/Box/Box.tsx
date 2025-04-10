import { motion } from "framer-motion";
import { ReactNode } from "react";
interface Boxpops {
  title?: string;
  children: ReactNode;
  delay?: number;
}
const Box = ({ title, children, delay = 0.1 }: Boxpops) => {
  return (
    <motion.div
      className="p-6 rounded-lg shadow-md border"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }} // Optional: in case you wrap this in AnimatePresence later
      viewport={{ once: false, amount: 0.2 }} // trigger every time 20% is visible
      transition={{
        duration: 0.6,
        ease: "easeInOut",
        delay,
      }}
      style={{
        border: `3px solid var(--theme-color)`,
        boxShadow: `-6px 6px 15px var(--theme-color)`,
      }}
    >
      {title && (
        <h2 className="text-xl font-semibold mb-4 text-[var(--theme-color)]">
          {title}
        </h2>
      )}
      <div className="text-white">{children}</div>
    </motion.div>
  );
};

export default Box;
