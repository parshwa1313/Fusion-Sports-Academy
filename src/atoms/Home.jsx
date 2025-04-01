import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";


const images = [
  "https://plus.unsplash.com/premium_photo-1707486516761-0e2516920755?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://cdn.pixabay.com/photo/2022/06/24/22/57/racket-7282577_1280.jpg",
  "https://images.unsplash.com/photo-1623451377886-36671ab29f50?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1562077772-3bd90403f7f0?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const features = [
  { 
    title: "Elite Coaching Team", 
    description: "Train with our elite coaching team at Fusion Sports Academy and unlock your tennis potential.",
    image: "https://neonsportsacademy.com/wp-content/uploads/2023/05/Coach-150x150.png",
    link: "/coach"
  },
  { 
    title: "360° Advanced Development Program", 
    description: "Our immersive program covers all aspects of tennis: skills, conditioning, mental toughness, and strategy.",
    image: "https://neonsportsacademy.com/wp-content/uploads/2023/05/Smash-244x300.png",
    link: "/foundation"
  },
  { 
    title: "Customized Performance Program", 
    description: "We tailor coaching to your strengths, weaknesses, and goals for maximum improvement.",
    image: "https://neonsportsacademy.com/wp-content/uploads/2023/05/Tennis-150x150.png",
    link: "/performance"
  },
  { 
    title: "Elite Strength Development", 
    description: "Improve your power, speed, and agility with our advanced strength training program.",
    image: "https://neonsportsacademy.com/wp-content/uploads/2023/05/Advance-Tennis-275x300.png",
    link: "/strength"
  },
];


export default function MergedComponent() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative w-screen h-screen snap-y snap-mandatory">
  {/* Image Slider Section */}
  <div className="w-screen h-screen snap-start relative flex items-center justify-center">
    <AnimatePresence mode="wait">
      <motion.img
        key={images[index]}
        src={images[index]}
        alt="Slider img"
        className="w-full h-full object-cover absolute"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
      />
    </AnimatePresence>

    {/* Overlay Text Section - Positioned Bottom Left */}
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="absolute flex-col flex bottom-6 left-6 text-white px-2 py-3 w-96 max-w-[50%]"
    >
      <h1 className="text-2xl font-bold bg-green-600 px-3 py-1 inline-block">
        Let’s Learn, Compete, Conquer
      </h1>
      <h2 className="text-2xl font-bold bg-green-600 px-3 py-1 inline-block mt-2">
        Let’s Get Stronger Together
      </h2>

      <ul className="mt-4 space-y-2 text-lg font-medium">
        <li>➤ STATE-OF-THE-ART FACILITIES FOR OPTIMAL TRAINING EXPERIENCE.</li>
        <li>➤ DIVERSE SPORTS UNDER ONE ROOF.</li>
        <li>
          ➤ EMPHASIS ON SKILL DEVELOPMENT, TACTICAL DEVELOPMENT, AND MENTAL DEVELOPMENT.
        </li>
      </ul>
<Link to="/select">
      <button className="mt-4 bg-green-600 text-white px-5 py-2 rounded-md font-bold hover:bg-green-700 transition">
        RESERVE A COURT
      </button>
      </Link>
    </motion.div>
    {/* Fusion Sports Academy Text - Positioned Top Right */}
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



    {/* Navigation Buttons */}
    <button
      onClick={prevSlide}
      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-3 rounded-full text-white hover:bg-opacity-70"
    >
      <ChevronLeft size={32} />
    </button>
    <button
      onClick={nextSlide}
      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-3 rounded-full text-white hover:bg-opacity-70"
    >
      <ChevronRight size={32} />
    </button>
  </div>


  
  

      {/* Features Section */}
      <div className="w-screen min-h-[45rem] flex flex-col items-center justify-center bg-white px-6 snap-start">
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 px-4 justify-items-center">
        {features.map((feature, index) => (
          <Link to={feature.link} key={index} className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col items-center text-center p-6 bg-white w-full"
            >
              <img 
                src={feature.image} 
                alt={feature.title}
                className="w-16 h-16 mb-4 object-contain"
              />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          </Link>
        ))}
      </div>

      <div className="flex justify-center w-full py-12">
        <h2 className="text-2xl font-bold text-green-600 text-center">
          Let's Get Stronger Together
        </h2>
      </div>
    </div>

      {/* Hero Section */}
      <div className="relative w-screen h-full flex items-center justify-center bg-cover bg-center snap-start max-h-[43rem]" style={{ backgroundImage: "url('https://plus.unsplash.com/premium_photo-1707486533473-e2bcf3e9cd01?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-white text-center max-w-md px-5 mt-20">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex justify-center mb-4">
              <img src="https://media.licdn.com/dms/image/v2/D4E03AQH5wuag3VRhDw/profile-displayphoto-shrink_200_200/B4EZQorcBTHgAY-/0/1735849265078?e=2147483647&v=beta&t=5ykoZOc0UAeCBQkPsVwkEiA8hWGpiMoUF95uQ817QE0" alt="Suresh Maurya"  className="rounded-full border-2 border-white h-24 w-24 object-cover" />
            </div>
            <h1 className="text-2xl font-bold">
              "Unlock Your Potential with <br />
              <span className="text-yellow-400">Fusion'S HIGH PERFORMANCE</span> <br />
              Training Programs"
            </h1>
            <p className="mt-2 text-sm text-blue-300 font-semibold">Suresh Maurya | Founder & Director</p>
            <p className="mt-4 text-sm">
              Discover our exceptional training programs at Fusion Sports Academy. With an athlete-centered coaching approach and a focus on quality, we guarantee results that will unlock your potential and take you to new heights in your chosen sport.
            </p>
            <div className="mt-4 flex justify-center gap-3 ">
              <img src="https://e7.pngegg.com/pngimages/101/516/png-clipart-tennis-player-beach-tennis-sport-ball-tennis-sport-sports-equipment-thumbnail.png" alt="icon1" width={60} height={50} />
              <img src="https://www.freeiconspng.com/thumbs/tennis-icon/tennis-icon-22.png" alt="icon2" width={60} height={50} className="bg-white" />
              <img src="https://previews.123rf.com/images/tmricons/tmricons1510/tmricons151000802/45816720-tennis-icon.jpg" alt="icon3" width={60} height={50} />
              <img src="https://cdn.iconscout.com/icon/free/png-256/free-tennis-icon-download-in-svg-png-gif-file-formats--sportyoga-pack-sports-games-icons-435423.png" alt="icon4" width={60} height={50} className="bg-white" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>

  );
}