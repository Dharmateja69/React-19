import { motion } from "framer-motion";
import { GiBowTieRibbon } from "react-icons/gi";

// Define the props for the AchievementCard component
interface AchievementCardProps {
  certificateName: string;
  path: string;
  alt: string;
  certificateUrl: string; // URL of the actual certificate
}

const AchievementCard = ({
  certificateName,
  path,
  alt,
  certificateUrl,
}: AchievementCardProps) => {
  return (
    <motion.div
      className="relative w-80 h-80 rounded-lg overflow-hidden border border-gray-200 shadow-md"
      initial={{ scale: 0.5, opacity: 0 }} // Initial small size and transparent
      animate={{ scale: 1, opacity: 1 }} // Final full size and opaque
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Certificate image centered with theme-colored dot background */}
      <div
        className="flex items-center justify-center h-full w-full p-4 relative"
        style={{
          backgroundImage: `radial-gradient(var(--theme-color) 2px, transparent 0)`,
          backgroundSize: "30px 30px",
          backgroundPosition: "-5px -5px",
        }}
      >
        <img
          src={path}
          alt={alt}
          className="max-h-full max-w-full object-contain border-2 rounded-lg"
          style={{ borderColor: "var(--theme-color)" }}
        />

        {/* Hover effect: Fade to transparent and show the icon */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30"
          initial={{ opacity: 0 }} // Start with no opacity
          whileHover={{ opacity: 20 }} // Fade in on hover
          transition={{ opacity: { duration: 0.3 } }} // Smooth transition for opacity
        >
          <a
            href={certificateUrl} // Link to the actual certificate
            target="_blank" // Open in a new tab
            rel="noopener noreferrer" // Security feature
            className="text-4xl text-white"
          >
            <GiBowTieRibbon />
          </a>
        </motion.div>
      </div>

      {/* Certificate Name with ripple animation */}
      <div
        className="absolute bottom-0 left-0 w-full px-4 py-2 text-center text-white font-semibold shadow-lg"
        style={{
          background: `linear-gradient(to right, var(--theme-color) 60%, #ffffff22)`,
          clipPath: `polygon(0 0, 90% 0, 100% 100%, 0% 100%)`,
          backdropFilter: "blur(4px)",
        }}
      >
        {certificateName}
      </div>
    </motion.div>
  );
};

export default AchievementCard;
