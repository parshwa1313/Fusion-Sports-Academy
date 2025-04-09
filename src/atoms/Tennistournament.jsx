import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { MapPin, Calendar, DollarSign, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const EventPage = () => {
  const navigate = useNavigate();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [event, setEvent] = useState({
    title: "Fusion Tennis Tournament",
    date: "December 19, 2023 - December 29, 2023",
    time: "7:00 AM - 10:00 AM",
    price: "INR 2400",
    description: "Fusion Tennis Tournament is one of the most prestigious Tennis Leagues in Ahmedabad.",
    images: [
      "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201807/Yuki-Bhambri.jpeg?size=690:388",
      "https://www.tennis.com.au/wp-content/uploads/2024/10/Rinky-Hijikata-700x450.jpg",
      "https://imageio.forbes.com/specials-images/imageserve/64ee18a079636f0001d8ae2b/Diriyah-Tennis-Cup-Riyadh-2022---Day-1/0x0.jpg?crop=2535,1427,x0,y49,safe&height=400&width=711&fit=bounds",
      "https://www.telegraph.co.uk/content/dam/tennis/2024/07/13/TELEMMGLPICT000385402242_17208890110630_trans_NvBQzQNjv4BqlNBXujwcN1id3jqZpihfppFJ8T7wAknm0LgC_TlH3lk.jpeg?imwidth=680"
    ],
    organizer: {
      name: "Neon, Science City",
      phone: "+91 98564 45326",
      email: "organizer@email.com"
    },
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
      {/* Header Section */}
      <section className="w-full relative mb-6">
        <img
          src="https://poonaclubltd.com/wp-content/uploads/2017/04/Tennis.jpg"
          alt="Tennis Club"
          className="w-full h-64 md:h-96 object-cover"
        />
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50"
        >
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center px-4">
            Fusion Tennis Tournament
          </h1>
        </motion.div>
      </section>

      {/* Back Button */}
      <div className="w-full">
        <span
          onClick={() => navigate(-1)}
          className="cursor-pointer text-2xl text-gray-700 transition material-symbols-outlined"
        >
          arrow_back_ios
        </span>
      </div>

      {/* Event Info */}
      <div className="w-full max-w-xl bg-white p-6 mb-6">
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
      <div className="w-full max-w-6xl p-6 mb-6">
      <h2 className="text-2xl font-bold mb-2 text-center">About the Tournament</h2>
      <p className="text-gray-700 text-lg text-center font-semibold">
          The Fusion Tennis Tournament at our academy has been a remarkable event, featuring top talent competing at their best.
          With a fantastic crowd and intense matches, this tournament has set new benchmarks in sportsmanship and excellence.
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
