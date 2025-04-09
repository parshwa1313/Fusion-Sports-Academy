import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { MapPin, Calendar, DollarSign, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const EventPage = () => {
  const navigate = useNavigate();

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [event, setEvent] = useState({
    title: "Fusion Cricket League",
    date: "December 19, 2023 - December 29, 2023",
    time: "3:00 PM - 8:00 PM",
    price: "INR 2500",
    description: "Fusion Cricket League is an exciting tournament in Ahmedabad, featuring top cricket teams battling for glory.",
    images: [
      "https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2020/01/25/Pictures/ht-pune_62d081ce-3f6f-11ea-8d17-9068169bb2f5.jpg",
      "https://www.jhs.ac.in/images/jhs-cricket-team-wins-in-viva-vibgyor-2023.jpg",
      "https://dlcl.in/assets/uploads/sliders/group.jpg",
      "https://images.tribuneindia.com/cms/gall_content/2015/4/2015_4$largeimg29_Apr_2015_230935430.jpg",
    ],
    organizer: { name: "Neon, Science City", phone: "+91 98564 45326", email: "organizer@email.com" },
    venue: { address: "11, Michael Park, Nr. Bhat Circle, Ahmedabad, Gujarat, India", mapLink: "https://maps.google.com/" },
  });

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  return (
    <div className="p-4 min-h-screen flex flex-col items-center ">
      {/* Header Section */}
      <section className="w-full relative mb-6">
        <img
          src="https://images.unsplash.com/photo-1562077772-3bd90403f7f0?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Cricket League"
          className="w-full h-64 md:h-96 object-cover"
        />
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50"
        >
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center px-4">
            Fusion Cricket League
          </h1>
        </motion.div>
      </section>

      {/* Back Button */}
      <div className="w-full">
        <span 
          onClick={() => navigate(-1)} 
          className="cursor-pointer text-2xl text-gray-700  transition material-symbols-outlined"
        >
          arrow_back_ios
        </span>
      </div>

      {/* Event Details */}
      <div className="w-full max-w-xl bg-white p-6 mb-6 flex flex-col md:flex-row items-center gap-4">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex flex-col items-center md:items-start"
        >
          <h1 className="text-2xl font-bold text-center md:text-left text-gray-800 mb-4">
            {event.title}
          </h1>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 text-gray-600">
            <div className="flex items-center gap-2 text-md font-serif">
              <Calendar className="w-5 h-5 text-green-500" />
              <span>{event.date} | {event.time}</span>
            </div>
            <div className="flex items-center gap-2 text-md font-serif">
              <DollarSign className="w-5 h-5 text-blue-500" />
              <span>{event.price}</span>
            </div>
            <div className="flex items-center gap-2 text-md font-serif">
              <User className="w-5 h-5 text-yellow-500" />
              <span>{event.organizer.name} ({event.organizer.phone})</span>
            </div>
          </div>

          <div className="flex items-center gap-2 mt-4 text-md font-serif">
            <MapPin className="w-5 h-5 text-red-500" />
            <a href={event.venue.mapLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
              {event.venue.address}
            </a>
          </div>
        </motion.div>
      </div>

      {/* Description */}
      <div className="w-full max-w-6xl p-6 mb-6">
        <h2 className="text-2xl font-bold mb-2 text-center">About the League</h2>
        <p className="text-gray-700 text-lg text-center font-semibold">
          The Fusion Cricket League is a thrilling event for cricket lovers. Experience epic battles, stunning performances, and the passion of cricket as teams compete for the ultimate title in Ahmedabad.
        </p>
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-6xl">
        {event.images.map((img, index) => (
          <motion.img
            key={index}
            src={img}
            alt={`Event ${index + 1}`}
            className="w-full h-40 md:h-48 object-cover cursor-pointer transition-transform transform hover:scale-105 rounded-md shadow-md"
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default EventPage;
