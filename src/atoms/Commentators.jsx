import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const commentators = [
  {
    name: "Rahul Sharma",
    location: "Mumbai, Maharashtra, India",
    rating: "4.9/5",
    matchesCommentated: 120,
    image: "https://d16f573ilcot6q.cloudfront.net/wp-content/uploads/2024/06/Ravi-Shastri-1.png",
    age: 45,
    profession: "Sports Commentator",
    role: "Lead Analyst",
    contact: "+91 9876543210",
  },
  {
    name: "Priya Desai",
    location: "Delhi, India",
    rating: "4.8/5",
    matchesCommentated: 95,
    image: "https://ipl-commentators.in/wp-content/uploads/2023/04/mayanti-langer.webp",
    age: 38,
    profession: "Sports Presenter",
    role: "Cricket Host",
    contact: "+91 9123456780",
  },
  {
    name: "Arjun Mehta",
    location: "Ahmedabad, Gujarat, India",
    rating: "4.7/5",
    matchesCommentated: 80,
    image: "https://cdn-wp.thesportsrush.com/2023/03/c3763598-untitled-design-3.jpg?format=auto&w=3840&q=75",
    age: 42,
    profession: "Ex-Cricketer & Commentator",
    role: "Match Expert",
    contact: "+91 9988776655",
  },
  {
    name: "Sana Iqbal",
    location: "Hyderabad, Telangana, India",
    rating: "4.6/5",
    matchesCommentated: 70,
    image: "https://femalecricket.com/wp-content/uploads/2021/03/Isa-Guha-Commentator.jpg",
    age: 34,
    profession: "Journalist",
    role: "Field Reporter",
    contact: "+91 9090909090",
  },
  {
    name: "Kabir Khan",
    location: "Bangalore, Karnataka, India",
    rating: "4.8/5",
    matchesCommentated: 105,
    image: "https://images.mykhel.com/fit-in/451x254/kn/img/2025/03/irfanpathandp-1742642949.jpg",
    age: 40,
    profession: "Anchor",
    role: "Studio Host",
    contact: "+91 9000000001",
  },
  {
    name: "Aarushi Jain",
    location: "Jaipur, Rajasthan, India",
    rating: "4.9/5",
    matchesCommentated: 110,
    image: "https://pbs.twimg.com/media/FpCV7ALWcAAZ-WA?format=jpg&name=large",
    age: 29,
    profession: "Sports Anchor",
    role: "Host & Analyst",
    contact: "+91 8000000002",
  }
];

export default function CommentatorGrid() {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="relative w-full mx-auto">
      {/* Hero section */}
      <div className="relative h-[40vh] md:h-[50vh] lg:h-[60vh] overflow-hidden">
        <img
          src="https://e0.365dm.com/17/12/1600x900/skysports-gettyimages-502505634-sky-sports-cricket-commentators-ward-lloyd-botham_4177511.jpg?20171208153941"
          alt="Commentators"
          className="w-full h-full object-cover"
        />
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 px-4"
        >
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center">
            Commentators
          </h1>
        </motion.div>
      </div>

      {/* Grid */}
      <section className="p-4 max-w-7xl mx-auto">
        <Link to="/community">
          <button
            onClick={() => navigate(-1)}
            className="mb-4 px-4 py-2 rounded-lg flex items-center text-sm "
          >
            <span className="material-symbols-outlined mr-1">arrow_back_ios</span>
            
          </button>
        </Link>
        <h2 className="text-3xl font-bold text-center mb-6">Expert Commentators</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {commentators.map((person, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <img src={person.image} alt={person.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{person.name}</h3>
                <p className="text-gray-600 text-sm">{person.location}</p>
                <div className="mt-2 flex items-center justify-between">
                  <p className="text-blue-700 font-semibold flex-1">
                    🎙️ {person.rating} ({person.matchesCommentated} matches)
                  </p>
                  <button
                    onClick={() => setSelected(person)}
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
      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full shadow-xl relative">
            <button
              className="absolute top-1 right-2 text-xl font-bold text-gray-600 hover:text-black"
              onClick={() => setSelected(null)}
            >
              ×
            </button>
            <img src={selected.image} alt={selected.name} className="w-full h-52 object-cover rounded-lg mb-4" />
            <h2 className="text-2xl font-bold mb-2">{selected.name}</h2>
            <p className="text-gray-600 mb-1"><strong>Location:</strong> {selected.location}</p>
            <p className="text-gray-600 mb-1"><strong>Age:</strong> {selected.age}</p>
            <p className="text-gray-600 mb-1"><strong>Profession:</strong> {selected.profession}</p>
            <p className="text-gray-600 mb-1"><strong>Role:</strong> {selected.role}</p>
            <p className="text-gray-600 mb-1"><strong>Contact:</strong> {selected.contact}</p>
            <p className="text-blue-700 mt-3">
              🎙️ {selected.rating} ({selected.matchesCommentated} matches commentated)
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
