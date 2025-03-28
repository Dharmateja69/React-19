import { motion, useScroll, useTransform } from "framer-motion";

const ScrollIndicator = () => {
  const { scrollYProgress } = useScroll();
  //   It gives you a value between 0 and 1 that tells how far down the page or a specific element you've scrolled.

  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <div className="h-[200vh] p-[20px]">
      <motion.div
        className="fixed top-0 left-0 h-[5px] bg-red-500 "
        style={{
          width: lineWidth,
          transition: "width 0.1s ease",
        }}
      />
      <div className="mt-[50px]">
        {[...Array(100)].map((_, i) => (
          <motion.div key={i} className="mt-[20px]">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum beatae sapiente ex laborum nemo dignissimos hic? Ex
              dicta illum incidunt sequi! Repellendus aspernatur quos culpa est
              eveniet corrupti vero accusamus.
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ScrollIndicator;
// We use them to:

// Track how far the user has scrolled (useScroll).

// Convert the scroll position into animation values (useTransform).

// So, when the user scrolls, you can trigger animations like:

// Changing opacity,

// Moving elements,

// Scaling,

// Rotating,
