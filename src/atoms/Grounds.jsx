import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const grounds = [
  // Cricket
  {
    name: "Star Cricket Ground",
    address: "Near Galaxy Circle, Pal, Surat, Gujarat, India",
    rating: "4.7/5",
    reviews: 15,
    image: "https://media.hudle.in/venues/79e976aa-94f5-428c-85b9-4883c5db2992/photo/4092e9934ce209429115c51a561ee1822c60a0fa",
    sport: "Cricket",
    features: ["Night Matches", "Pavilion", "On-site Parking"],
    contact: "+91 9876543210",
    timings: "6 AM - 10 PM",
    days: "Mon - Sun"
  },
  {
    name: "Divine Cricket Ground",
    address: "Kudasan, Gandhinagar, Gujarat, India",
    rating: "4.6/5",
    reviews: 23,
    image: "https://content.jdmagicbox.com/comp/vadodara/i7/0265px265.x265.220812202747.r1i7/catalogue/divine-cricket-ground-vadodara-sports-ground-8LLq4QUUdV.jpg",
    sport: "Cricket",
    features: ["Pitch Roller", "Washroom Facilities", "Refreshments"],
    contact: "+91 9123456780",
    timings: "7 AM - 9 PM",
    days: "Mon - Sat"
  },
  // Football
  {
    name: "Turf Up Football Ground",
    address: "Jodhpur Tekra, Ahmedabad, Gujarat, India",
    rating: "4.8/5",
    reviews: 41,
    image: "https://img1.khelomore.com/venues/539/images/1040x490/Screenshot-2021-06-28-at-9-51-55-AM.jpg",
    sport: "Football",
    features: ["Synthetic Turf", "Floodlights", "Locker Rooms"],
    contact: "+91 9012345678",
    timings: "5 AM - 11 PM",
    days: "All Days"
  },
  {
    name: "Kick Off Arena",
    address: "Thaltej, Ahmedabad, Gujarat, India",
    rating: "4.9/5",
    reviews: 37,
    image: "https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/2017/07/08064008/08072017_KickOffArena_01.jpg?w=1200&h=628&fill=blur&fit=fill",
    sport: "Football",
    features: ["Mini Tournaments", "Goal Post Netting", "Changing Rooms"],
    contact: "+91 9900112233",
    timings: "6 AM - 10 PM",
    days: "Mon - Sun"
  },
  // Tennis
  {
    name: "Ace Tennis Club",
    address: "Bodakdev, Ahmedabad, Gujarat, India",
    rating: "4.7/5",
    reviews: 19,
    image: "https://acetennisacademy.in/assets/facilities/clay-courts/clay-courts-05.jpg",
    sport: "Tennis",
    features: ["Clay Courts", "Coach On-site", "Water Station"],
    contact: "+91 9988776655",
    timings: "6 AM - 8 PM",
    days: "Tue - Sun"
  },
  {
    name: "Topspin Tennis Academy",
    address: "Satellite, Ahmedabad, Gujarat, India",
    rating: "4.5/5",
    reviews: 14,
    image: "https://content.jdmagicbox.com/v2/comp/bangalore/h4/080pxx80.xx80.130314133534.v3h4/catalogue/topspin-tennis-academy-bangalore-rkkhl58zuk.jpg",
    sport: "Tennis",
    features: ["Hard Surface", "Evening Coaching", "Ball Machine"],
    contact: "+91 8877665544",
    timings: "7 AM - 9 PM",
    days: "All Days"
  },
  // Badminton
  {
    name: "Shuttle Smash Arena",
    address: "Maninagar, Ahmedabad, Gujarat, India",
    rating: "4.6/5",
    reviews: 28,
    image: "https://content.jdmagicbox.com/v2/comp/bangalore/e8/080pxx80.xx80.240306080441.z9e8/catalogue/vini5-badminton-arena-canara-bank-layout-bangalore-badminton-courts-pdphe1hw4y.jpg",
    sport: "Badminton",
    features: ["Wooden Courts", "Ventilated Halls", "Coach Availability"],
    contact: "+91 7766554433",
    timings: "5 AM - 10 PM",
    days: "Mon - Sat"
  },
  {
    name: "Feather Touch Badminton Court",
    address: "Vasna, Ahmedabad, Gujarat, India",
    rating: "4.4/5",
    reviews: 20,
    image: "https://content.jdmagicbox.com/v2/comp/bangalore/d6/080pxx80.xx80.140414121642.h1d6/catalogue/feather-touch-sports-arena-jp-nagar-7th-phase-bangalore-badminton-courts-08mwj0edt5.jpg?fit=around%7C550:350&crop=550:350;*,*",
    sport: "Badminton",
    features: ["Mat Flooring", "CCTV Monitoring", "Basic Cafeteria"],
    contact: "+91 6655443322",
    timings: "6 AM - 9 PM",
    days: "Tue - Sun"
  },
];

export default function MixedGroundGrid() {
  const [selectedGround, setSelectedGround] = useState(null);
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="relative w-full mx-auto">
      {/* Banner */}
      <div className="relative h-[40vh] md:h-[50vh] lg:h-[60vh] overflow-hidden">
        <img
          src="https://png.pngtree.com/thumb_back/fh260/background/20240410/pngtree-football-field-or-soccer-field-top-view-green-lawn-court-image_15654264.jpg"
          alt="Grounds Banner"
          className="w-full h-full object-cover"
        />
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 px-4"
        >
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center">
            Grounds
          </h1>
        </motion.div>
      </div>

      {/* Grid */}
      <section className="p-4 max-w-7xl mx-auto">
        <Link to="/community">
          <button
            onClick={() => navigate(-1)}
            className="mb-4 px-4 py-2 rounded-lg flex items-center gap-1"
          >
            <span className="material-symbols-outlined">arrow_back_ios</span>
           
          </button>
        </Link>
        <h2 className="text-3xl font-bold text-center mb-6">All Sports Grounds</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {grounds.map((ground, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <img
                src={ground.image}
                alt={ground.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{ground.name}</h3>
                <p className="text-gray-600 text-sm mb-1">{ground.address}</p>
                <span className="text-sm bg-gray-200 rounded-full px-2 py-1 text-gray-700">
                  {ground.sport}
                </span>
                <div className="mt-2 flex items-center justify-between">
                  <p className="text-yellow-500 font-semibold flex-1">
                    ⭐ {ground.rating} ({ground.reviews} reviews)
                  </p>
                  <button
                    onClick={() => setSelectedGround(ground)}
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

      {/* Modal */}
      <AnimatePresence>
        {selectedGround && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedGround(null)}
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
                onClick={() => setSelectedGround(null)}
              >
                ×
              </button>
              <img
                src={selectedGround.image}
                alt={selectedGround.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="text-2xl font-bold mb-1">{selectedGround.name}</h2>
              <p className="text-gray-600 mb-1">{selectedGround.address}</p>
              <p className="text-sm mb-1">
                <strong>Sport:</strong> {selectedGround.sport}
              </p>
              <p className="text-yellow-500 mb-2">
                ⭐ {selectedGround.rating} ({selectedGround.reviews} reviews)
              </p>
              <p><strong>Features:</strong></p>
              <ul className="list-disc list-inside text-sm text-gray-700 mb-2">
                {selectedGround.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <p><strong>Contact:</strong> {selectedGround.contact}</p>
              <p><strong>Timings:</strong> {selectedGround.timings}</p>
              <p><strong>Days:</strong> {selectedGround.days}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}


