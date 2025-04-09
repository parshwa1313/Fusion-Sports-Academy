import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Dialog } from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";

const referees = [
  {
    name: "Rakesh Verma",
    location: "Delhi, India",
    rating: "4.7/5",
    matchesOfficiated: 150,
    sport: "Cricket",
    age: 42,
    profession: "International Umpire",
    role: "Third Umpire",
    contact: "+91 9876543210",
    image:
      "https://ss-i.thgim.com/public/incoming/4hywt8/article68001906.ece/alternates/LANDSCAPE_1200/t8xdanhwm3c4smr3dqk6.jpg",
  },
  {
    name: "Sneha Kulkarni",
    location: "Pune, Maharashtra, India",
    rating: "4.8/5",
    matchesOfficiated: 130,
    sport: "Tennis",
    age: 36,
    profession: "Professional Line Judge",
    role: "Line Umpire",
    contact: "+91 9123456789",
    image:
      "https://images.tennis.com/image/private/t_16-9_1920/tenniscom-prd/qia5dajqzkol4xoax3q5.jpg",
  },
  {
    name: "Amit Patil",
    location: "Nashik, Maharashtra, India",
    rating: "4.6/5",
    matchesOfficiated: 100,
    sport: "Football",
    age: 39,
    profession: "Certified Referee",
    role: "Main Referee",
    contact: "+91 9988776655",
    image:
      "https://www.indiansuperleague.com/static-assets/waf-images/8b/5e/99/16-9/BOIbNH1JXW.jpg",
  },
  {
    name: "Farhan Khan",
    location: "Lucknow, Uttar Pradesh, India",
    rating: "4.9/5",
    matchesOfficiated: 170,
    sport: "Cricket",
    age: 45,
    profession: "Elite Panel Umpire",
    role: "On-field Umpire",
    contact: "+91 9012345678",
    image:
      "https://statico.sportskeeda.com/editor/2022/10/4bcb2-16665572947956-1920.jpg",
  },
  {
    name: "Divya Singh",
    location: "Jaipur, Rajasthan, India",
    rating: "4.7/5",
    matchesOfficiated: 115,
    sport: "Badminton",
    age: 34,
    profession: "State Level Referee",
    role: "Chair Umpire",
    contact: "+91 9090909090",
    image:
      "https://corporate.bwfbadminton.com/wp-content/uploads/sites/4/2019/03/20180929_2026_KoreaOpen2018_YVES1677-960x385.jpg",
  },
  {
    name: "Jay Desai",
    location: "Surat, Gujarat, India",
    rating: "4.8/5",
    matchesOfficiated: 140,
    sport: "Football",
    age: 38,
    profession: "FIFA Certified Referee",
    role: "Assistant Referee",
    contact: "+91 7777777777",
    image:
      "https://i2-prod.mirror.co.uk/incoming/article34685298.ece/ALTERNATES/n615/0_GettyImages-2197478115.jpg",
  },
];

export default function RefereeGrid() {
  const [selectedReferee, setSelectedReferee] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on component mount
  }, []);

  return (
    <section className="relative w-full mx-auto">
      {/* Hero Image */}
      <div className="relative h-[40vh] md:h-[50vh] lg:h-[60vh] overflow-hidden">
        <img
          src="https://sportsmatik.com/uploads/sports-corner/equipment-bn.jpg"
          alt="Referees"
          className="w-full h-full object-cover"
        />
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 px-4"
        >
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center">
            Referees
          </h1>
        </motion.div>
      </div>

      {/* Referee Grid */}
      <section className="p-4 max-w-7xl mx-auto">
        <Link to="/community">
          <button
            onClick={() => navigate(-1)}
            className="mb-4 px-4 py-2 rounded-lg"
          >
            <span className="material-symbols-outlined">arrow_back_ios</span>
          </button>
        </Link>
        <h2 className="text-3xl font-bold text-center mb-6">Certified Referees</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {referees.map((ref, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <img
                src={ref.image}
                alt={ref.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{ref.name}</h3>
                <p className="text-gray-600 text-sm">{ref.location}</p>
                <span className="inline-block mt-2 text-xs bg-gray-200 text-gray-800 px-3 py-1 rounded-full">
                  {ref.sport}
                </span>
                <div className="mt-2 flex items-center">
                  <p className="text-red-600 font-semibold flex-1">
                    🏁 {ref.rating} ({ref.matchesOfficiated} matches)
                  </p>
                  <button
                    onClick={() => setSelectedReferee(ref)}
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
      <Dialog
        open={!!selectedReferee}
        onClose={() => setSelectedReferee(null)}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
      >
        {selectedReferee && (
          <div className="bg-white rounded-xl p-6 max-w-md w-full relative">
            <button
              className="absolute top-1 right-2 text-xl font-bold text-gray-600 hover:text-black"
              onClick={() => setSelectedReferee(null)}
            >
              ×
            </button>
            <img
              src={selectedReferee.image}
              alt={selectedReferee.name}
              className="w-full h-56 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">{selectedReferee.name}</h2>
            <p className="text-sm text-gray-600 mb-2">{selectedReferee.location}</p>
            <p><strong>Age:</strong> {selectedReferee.age}</p>
            <p><strong>Profession:</strong> {selectedReferee.profession}</p>
            <p><strong>Role:</strong> {selectedReferee.role}</p>
            <p><strong>Sport:</strong> {selectedReferee.sport}</p>
            <p><strong>Rating:</strong> {selectedReferee.rating}</p>
            <p><strong>Matches Officiated:</strong> {selectedReferee.matchesOfficiated}</p>
            <p><strong>Contact:</strong> {selectedReferee.contact}</p>
          </div>
        )}
      </Dialog>
    </section>
  );
}
