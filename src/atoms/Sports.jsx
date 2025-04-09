import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const sports = [
  {
    img: "https://looking-for-soccer.com/wp-content/uploads/2021/12/football-g475eabc40_1280-e1643718463690.jpg",
    title: "Football",
    desc: "Football is a universal game of passion, strategy, and skill. ARA FC provides a full artificial turf field, training facilities, and in-house physio therapists to support players. Technical Drills: Ball control, precision passing, tactical setups. Skill Drills: Focus on footwork, shot selection, spin and pace bowling techniques.  Facilities Needed: Football pitch, goalposts, cones, agility ladders, video analysis tools.",
    path: "/football"
  },
  {
    img: "https://images.deccanherald.com/deccanherald%2Fimport%2Fsites%2Fdh%2Ffiles%2Farticleimages%2F2021%2F11%2F20%2Ftennis-istock-1043790-1635085470-1052713-1637396249.jpg?auto=format%2Ccompress&fmt=webp&fit=max&format=webp&q=70&w=400&dpr=2",
    title: "Tennis",
    desc: "Tennis is a sport that requires both physical and mental stamina. Ahmedabad Racquet Academy offers seven courts, top-tier coaching, and a space for all skill levels. On-Court Drills: Focus on stroke mechanics, rally consistency, and speed drills.  Match Simulation: Practice matches to improve decision-making under pressure. Facilities Needed: Hard court, clay court, or grass court, ball machines, fitness equipment.",
    path: "/tennis"
  },
  {
    img: "https://english.cdn.zeenews.com/sites/default/files/2023/05/02/1193507-everything-about-badminton.png?im=Resize=(1200,900)",
    title: "Badminton",
    desc: "Badminton is a fast-paced sport that enhances reflexes and agility. Our academy provides expert coaching, professional courts, and competitive training programs. Footwork Drills: Quick directional changes, balance exercises. Stroke Practice: Smash, clear, drop shots, and drives.   Facilities Needed: Indoor badminton courts, shuttlecocks, rackets, fitness area. ",
    path: "/badminton"
  },
  {
    img: "https://st2.depositphotos.com/4746531/7081/i/450/depositphotos_70815093-stock-photo-cricket-ball.jpg",
    title: "Cricket",
    desc: "Cricket is a game of strategy, skill, and endurance. Our facility includes professional pitches, specialized coaching, and structured training sessions. Net Sessions: Controlled practice against bowlers. Skill Drills: Focus on footwork, shot selection, spin and pace bowling techniques.  Facilities Needed: Cricket nets, pitch, bowling machines, fielding equipment.",
    path: "/cricket"
  }
];

const Sports = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Sports Section */}
      <section className="bg-white text-gray-900 relative">
        <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
          <img
            src="https://static.vecteezy.com/system/resources/previews/007/800/717/non_2x/badminton-sport-equipments-on-green-floor-shuttlecocks-rackets-shoes-selective-focus-on-shuttlecocks-badminton-sport-playing-lover-concept-free-photo.jpg"
            alt="Tennis Club"
            className="w-full h-full object-cover"
          />
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30"
          >
            <h1 className="text-white text-4xl md:text-5xl font-bold text-center">
              Sports We Offer
            </h1>
          </motion.div>
        </div>

        <div className="container mx-auto px-2 py-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {sports.map((sport, index) => (
            <Link
              to={sport.path}
              key={index}
              className="relative group shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative w-full h-64 sm:h-80 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-orange-500 opacity-50 group-hover:opacity-70 transition-all duration-500"></div>
                <img
                  src={sport.img}
                  alt={sport.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 px-4">
                  <h3 className="text-2xl font-bold">{sport.title}</h3>
                  <p className="text-md font-serif md:text-base mt-2">{sport.desc}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      {/* Coaching Banner */}
      <div className="flex flex-col items-center justify-center mb-8 py-6 px-4 md:px-8 space-y-4 mt-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-2xl md:text-4xl font-bold text-orange-500 text-center "
        >
          Tailored Badminton Coaching for Every Preference
        </motion.h2>

        <div className="relative w-full min-h-[34rem] bg-cover bg-center rounded-xl overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://i0.wp.com/cynergysports.com/wp-content/uploads/2023/08/2022-07-16_Sanketa-Anand_Singapore-Badminton-Open-7813-scaled.webp?fit=2560%2C1696&ssl=1')"
            }}
          ></motion.div>

          <div className="absolute inset-0 bg-black bg-opacity-40"></div>

          <div className="absolute bottom-6 left-6 md:left-20 text-white text-center space-y-4">
            <motion.img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Gaurav_Khanna_Para_Badminton_Team_National_Coach.jpg"
              alt="Badminton Coach"
              className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-white object-cover mx-auto"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6 }}
            />
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-lg md:text-xl font-bold"
            >
              "STAYING SAME MEANS GOING BACKWARD"
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-md md:text-lg font-semibold max-w-80 w-full  text-gray-200 mb-2"
            >
              Discover the future of badminton with our world-class coaching
              programs. Unleash your potential with expert guidance.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-md md:text-lg max-w-80"
            >
              Discover exceptional training programs at NEON Sports Academy.
              Our athlete-centered coaching unlocks your potential.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sports;
