import React from "react";

const Topicslist = () => {
  // Example data for topics (tips)
  const topics = [
    "10 Tips for Better Time Management",
    "How to Stay Productive While Working from Home",
    "5 Healthy Habits to Start Your Day",
    "Effective Communication Skills for Leaders",
    "Tips for Learning a New Language Faster",
    "How to Build a Strong Personal Brand",
    "Financial Planning Tips for Young Professionals",
    "Ways to Reduce Stress and Improve Mental Health",
  ];

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Topics & Tips</h2>
      <ul className="space-y-3">
        {topics.map((topic, index) => (
          <li
            key={index}
            className="p-4 bg-yellow-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <span className="text-gray-700">{topic}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Topicslist;
