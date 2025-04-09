import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const categories = [
  { name: "Academies", icon: "🏫", path: "/academies" },
  { name: "Grounds", icon: "🏟️", path: "/grounds" },
  { name: "Organisers", icon: "👨🏻‍🦰", path: "/organisers" },
  { name: "Commentators", icon: "🎙", path: "/commentators" },
  { name: "Referees", icon: "⚖", path: "/referees" },
  { name: "Trainers", icon: "🏋️", path: "/trainers" },
];

export default function CommunityGrid() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="relative w-full bg-gray-100">
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh] lg:h-[60vh] overflow-hidden">
        <img
          src="https://images.squarespace-cdn.com/content/v1/595ea7d6e58c62dce01d1625/1646059867821-B1G7ILJF5X7F5UNHJQME/2022_Aspen_SportsForAll_Webbanner_1-1mm.jpg?format=2500w"
          alt="Cricket Community"
          className="w-full h-full object-cover"
        />
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 px-4"
        >
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center">
            Sports Community
          </h1>
          <p className="text-white mt-2 text-center max-w-xl">
            Explore and connect with the people who make grassroots Sports possible.
          </p>
        </motion.div>
      </div>

      {/* Community Categories */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-2 mt-4 p-4 max-w-6xl mx-auto">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            className="relative h-48 rounded-lg shadow-lg bg-green-500 p-6 flex flex-col items-center justify-center transition-transform transform hover:scale-105 hover:bg-opacity-30 cursor-pointer"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <Link to={category.path} className="flex flex-col items-center">
              <span className="text-7xl mb-2">{category.icon}</span>
              <h3 className="text-[28px] font-semibold text-center text-gray-800">
                {category.name}
              </h3>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
