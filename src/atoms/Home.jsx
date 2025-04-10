import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const images = [
  "https://www.mouratoglou.com/wp-content/uploads/2024/11/11dd1227-f3e1-4903-8755-cdbeeea0d97b-JUL01675.jpg",
  "https://cdn.pixabay.com/photo/2022/06/24/22/57/racket-7282577_1280.jpg",
  "https://images.unsplash.com/photo-1623451377886-36671ab29f50?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1562077772-3bd90403f7f0?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const sportsData = {
  Badminton: "https://5.imimg.com/data5/SELLER/Default/2021/11/KV/HY/EN/130896879/badminton-court-construction.jpg",
  Cricket: "https://content.jdmagicbox.com/v2/comp/delhi/q3/011pxx11.xx11.241218153144.t9q3/catalogue/turf-pro-noida-sector-131-noida-box-cricket-courts-y3bo9f8xw4.jpg",
  Football: "https://en.reformsports.com/oxegrebi/2020/09/mini-futbol-sahasi-ozellikleri-ve-olculeri.jpg",
  Tennis: "https://www.edwardssports.co.uk/pub/media/wysiwyg/tennis_court_dimensions_1_.jpg",
};

const features = [
  {
    title: "Elite Coaching Team",
    description: "Train with our elite coaching team at Fusion Sports Academy and unlock your tennis potential.",
    image: "https://neonsportsacademy.com/wp-content/uploads/2023/05/Coach-150x150.png",
  },
  {
    title: "360° Advanced Development Program",
    description: "Our immersive program covers all aspects of tennis: skills, conditioning, mental toughness, and strategy.",
    image: "https://neonsportsacademy.com/wp-content/uploads/2023/05/Smash-244x300.png",
  },
  {
    title: "Customized Performance Program",
    description: "We tailor coaching to your strengths, weaknesses, and goals for maximum improvement.",
    image: "https://neonsportsacademy.com/wp-content/uploads/2023/05/Tennis-150x150.png",
  },
  {
    title: "Elite Strength Development",
    description: "Improve your power, speed, and agility with our advanced strength training program.",
    image: "https://neonsportsacademy.com/wp-content/uploads/2023/05/Advance-Tennis-275x300.png",
  },
];

export default function MergedComponent() {
  const [index, setIndex] = useState(0);
  const [selectedSport, setSelectedSport] = useState("Badminton");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative w-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth">

      {/* Slider Section */}
      <div className="w-screen h-screen snap-start relative flex items-center justify-center overflow-hidden">
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

  <motion.div
  initial={{ x: -100, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.8 }}
  className="absolute flex flex-col bottom-6 left-1 text-white px-2 py-3 w-full md:w-96 max-w-[98%] bg-black/50 rounded-lg backdrop-blur-sm"
>
  {/* Mobile View */}
  <div className=" min-w-screen">
    <h1 className="text-lg sm:text-2xl font-bold  inline-block">"Let’s Learn, Compete, Conquer"</h1>
    <h2 className="text-lg sm:text-2xl font-bold  inline-block mt-1">"Let’s Get Stronger Together</h2>
    <ul className="mt-2 space-y-2 text-sm sm:text-md text-black font-medium leading-snug">
      <li>➤ STATE-OF-THE-ART FACILITIES FOR OPTIMAL TRAINING EXPERIENCE.</li>
      <li>➤ DIVERSE SPORTS UNDER ONE ROOF.</li>
      <li>➤ EMPHASIS ON SKILL DEVELOPMENT, TACTICAL DEVELOPMENT, AND MENTAL DEVELOPMENT.</li>
    </ul>
    <Link to="/details">
      <button className="mt-4  border-2 hover:text-white text-green-600 px-5 py-2 rounded-md font-bold hover:bg-green-700 transition">
        RESERVE A COURT
      </button>
    </Link>
  </div>

  {/* Desktop View */}
 
</motion.div>




  <button
    onClick={prevSlide}
    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-3 rounded-full text-white hover:bg-opacity-70 sm:left-8 sm:p-4"
  >
    <ChevronLeft size={32} />
  </button>
  <button
    onClick={nextSlide}
    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-3 rounded-full text-white hover:bg-opacity-70 sm:right-8 sm:p-4"
  >
    <ChevronRight size={32} />
  </button>
</div>


      {/* Features Section */}
      <div className="w-screen flex flex-col items-center justify-center bg-white px-6 mt-6 snap-start min-h-[42rem]">
        <div className="flex justify-center w-full">
          <h2 className="text-4xl font-bold text-green-600 text-center mb-36">Let's Get Stronger Together</h2>
        </div>
        <div className="max-w-6xl w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-4  justify-items-center">
          {features.map((feature, index) => (
            <Link to={feature.link} key={index} className="w-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex flex-col items-center text-center p-6 bg-white w-full"
              >
                <img src={feature.image} alt={feature.title} className="w-16 h-16 mb-4 object-contain" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative w-screen min-h-[43rem] flex items-center justify-center bg-cover bg-center snap-start" style={{ backgroundImage: "url('https://images.livemint.com/img/2020/01/10/1600x900/a25627b8-3056-11ea-abf9-d6598481f54e_1578651806065_1578651853959.jpg')" }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-white text-center max-w-md px-5 mt-20">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex justify-center mb-4">
              <img src="https://media.licdn.com/dms/image/v2/D4E03AQH5wuag3VRhDw/profile-displayphoto-shrink_200_200/B4EZQorcBTHgAY-/0/1735849265078?e=2147483647&v=beta&t=5ykoZOc0UAeCBQkPsVwkEiA8hWGpiMoUF95uQ817QE0" alt="Suresh Maurya" className="rounded-full border-2 border-white h-24 w-24 object-cover" />
            </div>
            <h1 className="text-2xl font-bold">"Unlock Your Potential with <br /><span className="text-yellow-400">Fusion'S HIGH PERFORMANCE</span> <br /> Training Programs"</h1>
            <p className="mt-2 text-sm text-blue-300 font-semibold">Suresh Maurya | Founder & Director</p>
            <p className="mt-4 text-sm">
              Discover our exceptional training programs at Fusion Sports Academy. With an athlete-centered coaching approach and a focus on quality, we guarantee results that will unlock your potential and take you to new heights in your chosen sport.
            </p>
            <div className="mt-4 flex justify-center gap-3">
              <img src="https://www.shutterstock.com/image-vector/cricket-player-logo-design-vector-600nw-2334167363.jpg" alt="icon1" width={60} height={50} />
              <img src="https://www.pngitem.com/pimgs/m/59-596611_badminton-player-icon-png-transparent-png.png" alt="icon2" width={60} height={50} className="bg-white" />
              <img src="https://static.vecteezy.com/system/resources/previews/042/636/113/non_2x/power-serve-pro-badge-tennis-player-logo-for-ace-server-slam-dunk-sensation-crest-male-tennis-player-icon-in-athletic-form-vector.jpg" alt="icon3" width={60} height={50} />
              <img src="https://img.freepik.com/premium-vector/football-player-logo-kick-ball-sport-soccer-player-football-pitch_687076-65.jpg" alt="icon4" width={60} height={50} className="bg-white" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Infrastructure Section */}
      <div className="relative mx-auto flex flex-col items-center py-8 overflow-hidden min-h-[34rem] snap-start">
        <h2 className="text-3xl font-bold text-green-600 mt-3 text-center">Infrastructure Services</h2>
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 md:gap-8 w-full">

          {Object.keys(sportsData).map((sport) => (
            <button
              key={sport}
              onClick={() => setSelectedSport(sport)}
              className={`transition-colors duration-200 py-2 rounded-md text-xl font-semibold focus:outline-none mt-2 ${
                selectedSport === sport ? "text-green-600" : "text-black"
              }`}
            >
              {sport}
            </button>
          ))}
        </div>
        <motion.img
          key={selectedSport}
          src={sportsData[selectedSport]}
          alt={selectedSport}
          className="w-full md:w-3/4 lg:w-2/3 max-h-[28rem] rounded-lg shadow-lg object-cover mt-2 "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        />
        <div className="text-center mt-6 px-4">
          <h3 className="text-2xl font-bold">{selectedSport}</h3>
          <p className="text-lg font-serif max-w-xl mx-auto">
            Experience world-class {selectedSport} courts built for performance and safety.
          </p>
        </div>
      </div>
    </div>
  );
}
