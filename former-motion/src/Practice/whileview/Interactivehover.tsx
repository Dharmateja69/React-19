import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const Interactivehover = () => {
  const cards = [1, 2, 3, 4, 5, 6];
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen bg-gray-100 p-10">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-500 z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Scroll to Top Button */}
      {showTopButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
        >
          ↑
        </button>
      )}

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-10">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{
              scale: 1.05,
              backgroundColor: "#3B82F6",
              color: "#ffffff",
            }}
            className="bg-white text-black p-6 rounded-xl shadow-md cursor-pointer"
          >
            <h2 className="text-lg font-semibold">Card {card}</h2>
            <p>This is an interactive card.</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Interactivehover;
