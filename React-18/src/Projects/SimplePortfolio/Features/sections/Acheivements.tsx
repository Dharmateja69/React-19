import { motion } from "framer-motion";
import { useState } from "react";
import AchievementCard from "../../components/Achievementcard/AchievementCard";
const certificateList = [
  {
    id: 1,
    name: "React Developer Certificate",
    path: "src/Projects/SimplePortfolio/components/Achievementcard/achievements/a1.png",
    alt: "achievements",
    certificateUrl: "https://www.credly.com/earner/dashboard",
  },
  {
    id: 2,
    name: "JavaScript Mastery",
    path: "src/Projects/SimplePortfolio/components/Achievementcard/achievements/a3.png",
    alt: "achievements",
    certificateUrl: "https://www.credly.com/earner/dashboard",
  },
  {
    id: 3,
    name: "Data Structures in Java",
    path: "src/Projects/SimplePortfolio/components/Achievementcard/achievements/a4.png",
    alt: "achievements",
    certificateUrl: "https://www.credly.com/earner/dashboard",
  },
  {
    id: 4,
    name: "Data Structures in Java",
    path: "src/Projects/SimplePortfolio/components/Achievementcard/achievements/a4.png",
    alt: "achievements",
    certificateUrl: "https://www.credly.com/earner/dashboard",
  },
  {
    id: 5,
    name: "Data Structures in Java",
    path: "src/Projects/SimplePortfolio/components/Achievementcard/achievements/a4.png",
    alt: "achievements",
    certificateUrl: "https://www.credly.com/earner/dashboard",
  },
  {
    id: 6,
    name: "Data Structures in Java",
    path: "src/Projects/SimplePortfolio/components/Achievementcard/achievements/a4.png",
    alt: "achievements",
    certificateUrl: "https://www.credly.com/earner/dashboard",
  },
  {
    id: 7,
    name: "Data Structures in Java",
    path: "src/Projects/SimplePortfolio/components/Achievementcard/achievements/a4.png",
    alt: "achievements",
    certificateUrl: "https://www.credly.com/earner/dashboard",
  },
  {
    id: 8,
    name: "Data Structures in Java",
    path: "src/Projects/SimplePortfolio/components/Achievementcard/achievements/a4.png",
    alt: "achievements",
    certificateUrl: "https://www.credly.com/earner/dashboard",
  },
  {
    id: 9,
    name: "Data Structures in Java",
    path: "src/Projects/SimplePortfolio/components/Achievementcard/achievements/a4.png",
    alt: "achievements",
    certificateUrl: "https://www.credly.com/earner/dashboard",
  },
  {
    id: 10,
    name: "Data Structures in Java",
    path: "src/Projects/SimplePortfolio/components/Achievementcard/achievements/a4.png",
    alt: "achievements",
    certificateUrl: "https://www.credly.com/earner/dashboard",
  },
  {
    id: 11,
    name: "Data Structures in Java",
    path: "src/Projects/SimplePortfolio/components/Achievementcard/achievements/a4.png",
    alt: "achievements",
    certificateUrl: "https://www.credly.com/earner/dashboard",
  },
  {
    id: 12,
    name: "Data Structures in Java",
    path: "src/Projects/SimplePortfolio/components/Achievementcard/achievements/a4.png",
    alt: "achievements",
    certificateUrl: "https://www.credly.com/earner/dashboard",
  },
  {
    id: 13,
    name: "Data Structures in Java",
    path: "src/Projects/SimplePortfolio/components/Achievementcard/achievements/a4.png",
    alt: "achievements",
    certificateUrl: "https://www.credly.com/earner/dashboard",
  },
  {
    id: 14,
    name: "Data Structures in Java",
    path: "src/Projects/SimplePortfolio/components/Achievementcard/achievements/a4.png",
    alt: "achievements",
    certificateUrl: "https://www.credly.com/earner/dashboard",
  },
  {
    id: 15,
    name: "Data Structures in Java",
    path: "src/Projects/SimplePortfolio/components/Achievementcard/achievements/a4.png",
    alt: "achievements",
    certificateUrl: "https://www.credly.com/earner/dashboard",
  },
  {
    id: 16,
    name: "Data Structures in Java",
    path: "src/Projects/SimplePortfolio/components/Achievementcard/achievements/a4.png",
    alt: "achievements",
    certificateUrl: "https://www.credly.com/earner/dashboard",
  },
  {
    id: 17,
    name: "Data Structures in Java",
    path: "src/Projects/SimplePortfolio/components/Achievementcard/achievements/a4.png",
    alt: "achievements",
    certificateUrl: "https://www.credly.com/earner/dashboard",
  },
  {
    id: 18,
    name: "Data Structures in Java",
    path: "src/Projects/SimplePortfolio/components/Achievementcard/achievements/a4.png",
    alt: "achievements",
    certificateUrl: "https://www.credly.com/earner/dashboard",
  },
];

const ITEMS_PER_PAGE = 6;

const AchievementsGallery = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(certificateList.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentCertificates = certificateList.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <div className="p-6">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-start mb-8">
        My <span className="text-[var(--theme-color)]">Achievements</span>
        <motion.span
          className="inline-block ml-1 text-4xl text-white"
          animate={{
            x: [0, -4, 4, -4, 4, 0], // Shaking effect (left and right)
            rotate: [0, -5, 5, -5, 5, 0], // Rotating effect (slight rotation)
          }}
          transition={{
            repeat: Infinity, // Infinite loop
            duration: 0.6, // Duration for each shake cycle
            repeatDelay: 2, // Delay before it starts shaking again
          }}
        >
          💡
        </motion.span>
      </h2>

      {/* Grid of Achievement Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentCertificates.map((certificate) => (
          <AchievementCard
            key={certificate.id}
            certificateName={certificate.name}
            path={certificate.path}
            alt={certificate.alt}
            certificateUrl={certificate.certificateUrl} // Replace with actual URL
          />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-6 space-x-2">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 rounded bg-[#40B3A2] hover:bg-[#32A089] text-white disabled:opacity-50"
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, idx) => (
          <button
            key={idx + 1}
            onClick={() => setCurrentPage(idx + 1)}
            className={`px-4 py-2 rounded text-white ${
              currentPage === idx + 1
                ? "bg-[var(--theme-color)]"
                : "bg-[#40B3A2] hover:bg-[#32A089]"
            }`}
          >
            {idx + 1}
          </button>
        ))}

        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="px-4 py-2 rounded bg-[#40B3A2] hover:bg-[#32A089] text-white disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AchievementsGallery;
