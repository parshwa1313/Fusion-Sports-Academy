import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, DollarSign, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const EventPage = () => {
  const navigate = useNavigate();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [event, setEvent] = useState({
    title: "Fusion Football Contest",
    date: "December 19, 2023 - December 29, 2023",
    time: "5:00 PM - 9:00 PM",
    price: "INR 3000",
    description: "Fusion Football Contest is one of the most thrilling football tournaments in Ahmedabad, featuring top teams and epic matchups.",
    images: [
      "https://im.rediff.com/sports/2019/apr/09wom-foot.gif",
      "https://www.thestatesman.com/wp-content/uploads/2019/12/1c9a9133357576b379b34125007a53be.jpg",
      "https://i0.wp.com/theawayend.co/wp-content/uploads/2023/03/Hero-Tri-Nation-International-Football-Tournament-2023-India-vs-Myanmar.jpeg?fit=1024%2C681&ssl=1",
      "https://www.forbesindia.com/media/images/2019/May/img_116879_fc_barcelona_camp.jpg",
    ],
    organizer: {
      name: "Neon, Science City",
      phone: "+91 98564 45326",
      email: "organizer@email.com",
    },
    venue: {
      address: "11, Michael Park, Nr. Bhat Circle, Ahmedabad, Gujarat, India",
      mapLink: "https://maps.google.com/",
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
          src="https://poonaclubltd.com/wp-content/uploads/2017/04/Football.jpg"
          alt="Football Contest"
          className="w-full h-64 md:h-96 object-cover"
        />
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50"
        >
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center px-4">
            Fusion Football Contest
          </h1>
        </motion.div>
      </section>

      {/* Back Button */}
      <div className="w-full mb-4">
        <span
          onClick={() => navigate(-1)}
          className="cursor-pointer text-2xl text-gray-700  transition material-symbols-outlined"
        >
          arrow_back_ios
        </span>
      </div>

      {/* Event Info */}
      <div className="w-full max-w-xl bg-white p-6 mb-6 rounded-md ">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">{event.title}</h1>
          <div className="flex flex-wrap justify-center gap-4 text-gray-600">
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
      <div className="w-full max-w-6xl p-6 mb-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-2 text-center">About the Contest</h2>
      <p className="text-gray-700 text-lg text-center font-semibold">
          The Fusion Football Contest is designed for football enthusiasts who love high-energy matches and fierce competition.
          Teams will battle for glory, showcasing their skills and sportsmanship in an unforgettable event.
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
            transition={{ duration: 0.4, delay: index * 0.1 }}
          />
        ))}
      </div>
    </div>
  );
};

export default EventPage;
