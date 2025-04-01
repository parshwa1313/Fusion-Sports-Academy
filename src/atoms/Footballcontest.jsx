import { motion } from 'framer-motion';
import { useState } from 'react';
import { MapPin, Calendar, DollarSign, User, ChevronLeft, ChevronRight, X } from 'lucide-react';

const Footballcontest = () => {
  const [event, setEvent] = useState({
    title: "Fusion Football Contest",
    date: "December 19, 2023 - December 29, 2023",
    time: "7:00 AM - 10:00 AM",
    price: "INR 2400",
    description: "Fusion Football Contest is one of the most prestigious Football Leagues in Ahmedabad.",
    bgImage: "",
    images: [
      "https://im.rediff.com/sports/2019/apr/09wom-foot.gif",
      "https://www.thestatesman.com/wp-content/uploads/2019/12/1c9a9133357576b379b34125007a53be.jpg",
      "https://i0.wp.com/theawayend.co/wp-content/uploads/2023/03/Hero-Tri-Nation-International-Football-Tournament-2023-India-vs-Myanmar.jpeg?fit=1024%2C681&ssl=1",
      "https://www.forbesindia.com/media/images/2019/May/img_116879_fc_barcelona_camp.jpg",
      "https://im.rediff.com/sports/2019/apr/09wom-foot.gif",
      "https://www.thestatesman.com/wp-content/uploads/2019/12/1c9a9133357576b379b34125007a53be.jpg",
      "https://i0.wp.com/theawayend.co/wp-content/uploads/2023/03/Hero-Tri-Nation-International-Football-Tournament-2023-India-vs-Myanmar.jpeg?fit=1024%2C681&ssl=1",
      "https://www.forbesindia.com/media/images/2019/May/img_116879_fc_barcelona_camp.jpg"
    ],
    details: { category: "Club", type: "Sports" },
    organizer: { name: "Neon, Science City", phone: "+91 98564 45326", email: "organizer@email.com" },
    venue: { address: "11, Michael Park, Nr. Bhat Circle, Ahmedabad, Gujarat, India", mapLink: "https://maps.google.com/" },
  });
  
  const [selectedImage, setSelectedImage] = useState(null);
  
  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  const handleNext = () => {
    setSelectedImage((prev) => (prev + 1) % event.images.length);
  };

  const handlePrev = () => {
    setSelectedImage((prev) => (prev - 1 + event.images.length) % event.images.length);
  };

  return (
    <div className="p-4   min-h-screen flex flex-col justify-center">
      <section className="w-full">
        <div className="relative min-h-[250px]">
          <img
            src="https://poonaclubltd.com/wp-content/uploads/2017/04/Football.jpg"
            alt="Football Club"
            className="w-full h-full object-cover"
          />
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <h1 className="text-white text-5xl font-bold">Fusion Football Contest</h1>
          </motion.div>
        </div>
      </section>
      
      <motion.div
  initial={{ y: -100, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="absolute flex top-14 right-1 text-white px-2 py-1 mx-auto max-w-80 rounded-lg bg-green-500 bg-opacity-90 hover:bg-opacity-60 transition-all duration-300"
>
  <ul className="mt-9 space-y-2 text-4xl font-serif">
    <li className="hover:text-black transition-colors duration-300">FUSION SPORTS ACADEMY</li>
  </ul>
</motion.div>
      
      <h1 className="text-3xl font-bold mb-8 text-center underline mt-12">{event.title}</h1>
      <div className=" text-center">
        <div className="flex items-center justify-center mb-4"><Calendar className="w-5 h-5 mr-2" />{event.date} | {event.time}</div>
        <div className="flex items-center justify-center mb-4"><DollarSign className="w-5 h-5 mr-2" />{event.price}</div>
        <div className="flex items-center justify-center mb-4"><User className="w-5 h-5 mr-2" />{event.organizer.name} ({event.organizer.phone})</div>
        <div className="flex items-center justify-center mb-4"><MapPin className="w-5 h-5 mr-2" /><a href={event.venue.mapLink} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">{event.venue.address}</a></div>
      </div>
      
      <div className="p-4 mt-12">
        <h2 className="text-2xl font-semibold mb-2 text-center">About the Contest</h2>
        <p className="text-lg text-center">The Fusion Football Contest at our academy has been a remarkable event, featuring top talent competing at their best. With a fantastic crowd and intense matches, this Contest has set new benchmarks in sportsmanship and excellence.</p>
      </div>
      
      <div className="grid grid-cols-4 gap-4 mt-6">
        {event.images.map((img, index) => (
          <motion.img
            key={index}
            src={img}
            alt="Event Preview"
            className="w-full h-56 object-cover rounded-lg cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Footballcontest;