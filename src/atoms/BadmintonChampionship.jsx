import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { MapPin, Calendar, DollarSign, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const EventPage = () => {
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const [event, setEvent] = useState({
    title: "Fusion Badminton Tournament",
    date: "December 19, 2023 - December 29, 2023",
    time: "7:00 AM - 10:00 AM",
    price: "INR 2400",
    description: "Fusion Badminton Tournament is one of the most prestigious Badminton Leagues in Ahmedabad.",
    images: [
      "https://images.news18.com/ibnlive/uploads/2025/02/Badminton-Asia-Mixed-Team-Championships_Dhruv-Kapila-and-Tanisha-Crasto-2025-02-caa017b14f3ae1896227b5e437df121e-16x9.png?impolicy=website&width=640&height=360",
      "https://www.indiantelevision.com/sites/default/files/styles/smartcrop_800x800/public/images/tv-images/2024/01/08/Unnati-Hooda.jpg?itok=1t9zI8yI",
      "https://staticg.sportskeeda.com/editor/2022/06/4b9a6-16542582984161-1920.jpg?w=640",
      "https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_xs_2x/f_auto/primary/rovrvfwsk5epbeu1sycy",
    ],
    organizer: { name: "Neon, Science City", phone: "+91 98564 45326", email: "organizer@email.com" },
    venue: {
      address: "11, Michael Park, Nr. Bhat Circle, Ahmedabad, Gujarat, India",
      mapLink: "https://maps.google.com/"
    },
  });

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  return (
    <div className="p-4 min-h-screen flex flex-col items-center ">
      {/* Hero Section */}
      <section className="w-full relative mb-6">
        <img
          src="https://poonaclubltd.com/wp-content/uploads/2017/04/Badminton.jpg"
          alt="Badminton Event"
          className="w-full h-64 md:h-96 object-cover"
        />
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50"
        >
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center px-4">
            Fusion Badminton Championship
          </h1>
        </motion.div>
      </section>

      {/* Back Button */}
      <div className="w-full px-4">
        <span
          onClick={() => navigate(-1)}
          className="cursor-pointer text-2xl text-gray-700  transition material-symbols-outlined"
        >
          arrow_back_ios
        </span>
      </div>

      {/* Event Info */}
      <div className="w-full max-w-xl bg-white p-6 mb-6 rounded-lg ">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">{event.title}</h1>
          <div className="flex flex-wrap justify-center gap-4 text-gray-600">
            <div className="flex items-center gap-2 text-gray text-md font-serif">
              <Calendar className="w-5 h-5 text-green-500" />
              <span>{event.date} | {event.time}</span>
            </div>
            <div className="flex items-center gap-2 text-gray text-lg font-serif">
              <DollarSign className="w-5 h-5 text-blue-500" />
              <span>{event.price}</span>
            </div>
            <div className="flex items-center gap-2 text-gray text-lg font-serif">
              <User className="w-5 h-5 text-yellow-500" />
              <span>{event.organizer.name} ({event.organizer.phone})</span>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-4 text-gray text-lg font-serif">
            <MapPin className="w-5 h-5 text-red-500" />
            <a
              href={event.venue.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              {event.venue.address}
            </a>
          </div>
        </motion.div>
      </div>

      {/* Description */}
      <div className="w-full max-w-6xl p-6 mb-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-2 text-center">About the Championship</h2>
      <p className="text-gray-700 text-lg text-center font-semibold">
          The Fusion Badminton Tournament at our academy has been a remarkable event, featuring top talent competing at their best. With a fantastic crowd and intense matches, this tournament has set new benchmarks in sportsmanship and excellence.
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
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          />
        ))}
      </div>
    </div>
  );
};

export default EventPage;
