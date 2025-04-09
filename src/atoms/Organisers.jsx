import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const organisers = [
  {
    name: "ABHISHEK SHARMA",
    address: "B-12, Stadium Road, Vadodara, Gujarat, India",
    rating: "4.6/5",
    events: 15,
    age: 29,
    profession: "Sports Manager",
    role: "Event Coordinator",
    number: "+91 9876543210",
    image:
      "https://plus.unsplash.com/premium_photo-1689565611422-b2156cc65e47?fm=jpg&q=60&w=3000",
  },
  {
    name: "AKHIL RAVAL",
    address: "Sector 7, Gandhinagar, Gujarat, India",
    rating: "4.9/5",
    events: 27,
    age: 32,
    profession: "Event Consultant",
    role: "Senior Organiser",
    number: "+91 9988776655",
    image:
      "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress",
  },
  {
    name: "PARSHWA SHAH",
    address: "Ring Road, Indore, Madhya Pradesh, India",
    rating: "4.7/5",
    events: 19,
    age: 28,
    profession: "Marketing Head",
    role: "Operations Lead",
    number: "+91 8899776611",
    image:
      "https://png.pngtree.com/thumb_back/fh260/background/20230614/pngtree-cartoon-image-of-a-bearded-man-with-glasses-image_2876117.jpg",
  },
  {
    name: "KRISH SATHWARA",
    address: "MG Road, Pune, Maharashtra, India",
    rating: "4.8/5",
    events: 22,
    age: 31,
    profession: "Athletics Consultant",
    role: "Organizer",
    number: "+91 7766554433",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000",
  },
  {
    name: "UDAY SHAH",
    address: "Anna Nagar, Chennai, Tamil Nadu, India",
    rating: "4.5/5",
    events: 12,
    age: 35,
    profession: "Event Analyst",
    role: "Coordinator",
    number: "+91 7700889900",
    image:
      "https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.jpg?s=170667a&w=0&k=20&c=6GGxMCkYdgjMoMsj9YabXWHKMQuqiE6to8WZQ-EcE90=",
  },
  {
    name: "ALPESH TRIVEDI",
    address: "Banjara Hills, Hyderabad, Telangana, India",
    rating: "4.9/5",
    events: 30,
    age: 38,
    profession: "Sports Consultant",
    role: "Head Organizer",
    number: "+91 9090909090",
    image:
      "https://res.cloudinary.com/dsd1isfdb/image/upload/v1640367093/picofme/examples/example_1_xixqoj.jpg",
  },
];

export default function EventOrganiserGrid() {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="relative w-full mx-auto">
      {/* Banner */}
      <div className="relative h-[40vh] md:h-[50vh] lg:h-[60vh] overflow-hidden">
        <img
          src="https://sportscafe.in/img/es3/articles/cricket/BCCI-Meeting.jpg"
          alt="Event Organisers"
          className="w-full h-full object-cover"
        />
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 px-4"
        >
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center">
            Event Organisers
          </h1>
        </motion.div>
      </div>

      {/* Grid */}
      <section className="p-4 max-w-7xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="mb-4 px-4 py-2 rounded-lg text-black flex items-center gap-2"
        >
          <span className="material-symbols-outlined">arrow_back_ios</span> 
        </button>
        <h2 className="text-3xl font-bold text-center mb-6">Trusted Organisers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {organisers.map((org, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <img src={org.image} alt={org.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{org.name}</h3>
                <p className="text-gray-600 text-sm">{org.address}</p>
                <div className="mt-2 flex items-center justify-between">
                  <p className="text-green-600 font-semibold flex-1">
                    ⭐ {org.rating} ({org.events} events organized)
                  </p>
                  <button
                    onClick={() => setSelected(org)}
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
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative">
            <button
              className="absolute top-1 right-2 text-xl font-bold text-gray-600 hover:text-black"
              onClick={() => setSelected(null)}
            >
              ×
            </button>
            <img
              src={selected.image}
              alt={selected.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">{selected.name}</h2>
            <p className="text-gray-600 text-sm mb-1">📍 {selected.address}</p>
            <p className="text-gray-600 text-sm mb-1">🎂 Age: {selected.age}</p>
            <p className="text-gray-600 text-sm mb-1">
              👨‍💼 Profession: {selected.profession}
            </p>
            <p className="text-gray-600 text-sm mb-1">🧾 Role: {selected.role}</p>
            <p className="text-gray-600 text-sm mb-1">📞 Contact: {selected.number}</p>
            <p className="text-green-600 font-semibold mt-2">
              ⭐ {selected.rating} ({selected.events} events)
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
