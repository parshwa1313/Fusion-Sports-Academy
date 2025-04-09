import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

export default function CricketAcademyGrid() {
  const [selectedAcademy, setSelectedAcademy] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const academies = [
    {
      name: "TD Sports Academy",
      address: "G4 Shivalik Square Ramipark Dindoli Surat, Gujarat, India",
      rating: "4.5/5",
      reviews: 8,
      image: "https://dypdvfcjkqkg2.cloudfront.net/large/7148147-8612.png",
      expertise: "Cricket, Football",
      features: ["Professional Coaches", "Modern Facilities", "Trial Sessions"],
      contact: "+91 9876543210",
      timings: "6 AM - 9 PM",
      days: "Mon - Sat",
    },
    {
      name: "United Sports Academy",
      address: "Behind White House Nr. Borisana Gannara, Kalol, Gujarat 382721, India",
      rating: "4.8/5",
      reviews: 34,
      image: "https://northsiouxcity-sd.gov/wp-content/uploads/2019/10/united-sports-academy-logo-horizontal.png",
      expertise: "Football, Tennis",
      features: ["Certified Trainers", "Turf Ground", "Fitness Sessions"],
      contact: "+91 9123456780",
      timings: "5 AM - 10 PM",
      days: "All Days",
    },
    {
      name: "Austin Sports Academy",
      address: "XMHG+7G Hathod, Rajasthan, India",
      rating: "4.8/5",
      reviews: 22,
      image: "https://searchlogovector.com/wp-content/uploads/2018/09/academy-sports-outdoors-logo-vector.png",
      expertise: "Badminton, Cricket",
      features: ["Indoor Courts", "Flexible Batches", "Summer Camps"],
      contact: "+91 9988776655",
      timings: "7 AM - 8 PM",
      days: "Mon - Fri",
    },
  ];

  return (
    <section className="relative w-full mx-auto">
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
            Academies
          </h1>
        </motion.div>
      </div>

      {/* Academy Cards */}
      <section className="p-4 max-w-7xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="mb-4 px-4 py-2 rounded-lg flex items-center gap-1"
        >
          <span className="material-symbols-outlined">arrow_back_ios</span>
        
        </button>

        <h2 className="text-3xl font-bold text-center mb-6">Sports Academies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {academies.map((academy, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <img
                src={academy.image}
                alt={academy.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{academy.name}</h3>
                <p className="text-gray-600 text-sm">{academy.address}</p>
                <div className="mt-2 flex items-center justify-between">
                  <p className="text-yellow-500 font-semibold flex-1">
                    ⭐ {academy.rating} ({academy.reviews} reviews)
                  </p>
                  <button
                    onClick={() => setSelectedAcademy(academy)}
                    className="text-blue-500 text-md font-semibold underline hover:text-blue-800 transition"
                  >
                    View More
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Popup Modal */}
      <AnimatePresence>
        {selectedAcademy && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedAcademy(null)}
          >
            <motion.div
              className="bg-white rounded-xl max-w-md w-full shadow-2xl p-6 relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-1 right-2 text-xl font-bold text-gray-600 hover:text-black"
                onClick={() => setSelectedAcademy(null)}
              >
                ×
              </button>
              <img
                src={selectedAcademy.image}
                alt={selectedAcademy.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="text-2xl font-bold mb-2">{selectedAcademy.name}</h2>
              <p className="text-gray-600 mb-2">{selectedAcademy.address}</p>
              <p className="text-yellow-500 mb-2">
                ⭐ {selectedAcademy.rating} ({selectedAcademy.reviews} reviews)
              </p>
              <p><strong>Expertise:</strong> {selectedAcademy.expertise}</p>
              <p><strong>Features:</strong></p>
              <ul className="list-disc list-inside text-sm text-gray-700 mb-2">
                {selectedAcademy.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <p><strong>Contact:</strong> {selectedAcademy.contact}</p>
              <p><strong>Timings:</strong> {selectedAcademy.timings}</p>
              <p><strong>Days:</strong> {selectedAcademy.days}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
