import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const sports = [
  {
    img: "https://looking-for-soccer.com/wp-content/uploads/2021/12/football-g475eabc40_1280-e1643718463690.jpg",
    title: "Football",
    desc:  "Football is a universal game of passion, strategy, and skill. ARA FC provides a full artificial turf field, training facilities, and in-house physio therapists to support players. The sport helps develop coordination, endurance, and teamwork. Whether you’re a beginner or an advanced player, our training programs cater to all levels, helping you master dribbling, passing, and strategic play.",
    path : "/football"
  },
  
  {
    img: "https://images.deccanherald.com/deccanherald%2Fimport%2Fsites%2Fdh%2Ffiles%2Farticleimages%2F2021%2F11%2F20%2Ftennis-istock-1043790-1635085470-1052713-1637396249.jpg?auto=format%2Ccompress&fmt=webp&fit=max&format=webp&q=70&w=400&dpr=2",
    title: "Tennis",
    desc: "Tennis is a sport that requires both physical and mental stamina. Ahmedabad Racquet Academy offers seven courts, top-tier coaching, and a space for all skill levels. It enhances agility, hand-eye coordination, and strategic thinking. Players can participate in competitive leagues or casual matches while refining techniques like powerful serves, precise volleys, and strategic net play.",
    path : "/tennis"
  },
  {
    img: "https://english.cdn.zeenews.com/sites/default/files/2023/05/02/1193507-everything-about-badminton.png?im=Resize=(1200,900)",
    title: "Badminton",
    desc: "Badminton is a fast-paced sport that enhances reflexes and agility. Our academy provides expert coaching, professional courts, and competitive training programs. This sport improves cardiovascular health, speed, and endurance. Players can learn advanced footwork techniques, develop precise smashes.",
    path : "/badminton"
  },
  {
    img: "https://st2.depositphotos.com/4746531/7081/i/450/depositphotos_70815093-stock-photo-cricket-ball.jpg",
    title: "Cricket",
    desc: "Cricket is a game of strategy, skill, and endurance. Our facility includes professional pitches, specialized coaching, and structured training sessions. Players develop batting precision, bowling accuracy, and fielding agility. Our coaching program focuses on fitness, teamwork, and tactical gameplay to enhance performance in matches at all levels.",
    path : "/cricket"
  },
];

const Sports = () => {
  return (
    <div>
      {/* Sports Section */}
      <section className="bg-white text-gray-900">
        <div className="relative w-full h-96">
          <img
            src="https://static.vecteezy.com/system/resources/previews/007/800/717/non_2x/badminton-sport-equipments-on-green-floor-shuttlecocks-rackets-shoes-selective-focus-on-shuttlecocks-badminton-sport-playing-lover-concept-free-photo.jpg"
            alt="Badminton Player"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h2 className="text-white text-4xl font-bold">Sports we offer</h2>
          </div>
        </div>
        <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-4 min-h-[48rem]">
      {sports.map((sport, index) => (
        <Link to={sport.path} key={index} className="block relative group">
          <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full h-72 md:h-72  overflow-hidden rounded-xl "
          >
            {/* Image with gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-orange-500 opacity-50 group-hover:opacity-70 transition-all duration-500"></div>
            <img
              src={sport.img}
              alt={sport.title}
              className="w-full h-full object-cover"
            />

            {/* Hidden text that appears on hover */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="text-4xl font-bold">{sport.title}</h3>
              <p className="text-xl mt-2 font-serif">{sport.desc}</p>
            </div>
          </motion.div>
        </Link>
      ))}
    </div>
      </section>
      
      <div className="flex flex-col items-center justify-center space-y-4 ">
      <motion.h2 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, delay: 0.2 }}
            className="text-2xl md:text-4xl font-bold text-green-500 "
          >Tailored Badmintion Coaching for Every Preference</motion.h2>

      {/* Coaching Banner */}
      <div className="relative w-full h-[600px] md:h-[600px] ">
        <motion.div 
          initial={{ opacity: 0, scale: 1.1 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://i0.wp.com/cynergysports.com/wp-content/uploads/2023/08/2022-07-16_Sanketa-Anand_Singapore-Badminton-Open-7813-scaled.webp?fit=2560%2C1696&ssl=1')" }}
        ></motion.div>
        
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
       
        <div className="relative z-10 flex flex-col items-center text-center px-6 pt-10 md:pt-20">
          <motion.p 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1 }}
            className="text-sm md:text-base text-gray-200 mb-14"
          ></motion.p>
          
          
        </div>

        <div className="absolute bottom-10 left-6 md:left-20 max-w-md text-white">
          <motion.img 
            src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Gaurav_Khanna_Para_Badminton_Team_National_Coach.jpg" 
            alt="Roger Federer" 
            className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-white object-cover"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
          />

          <motion.p 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-4 text-lg md:text-2xl font-bold"
          >"STAYING SAME MEANS GOING BACKWARD"</motion.p>
          
          <motion.p 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-2 text- md:text-lg"
          >Discover our exceptional training programs at NEON Sports Academy. With an athlete-centered coaching approach and a focus on quality, we guarantee results that will unlock your potential and take you to new heights in your chosen sport.</motion.p>
        </div>
      </div>
      </div>
   
    </div>
  );
};

export default Sports;