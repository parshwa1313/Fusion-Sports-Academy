import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SportsClub = () => {
  
  return (
    <section className="w-full">
      {/* Hero Image Section */}
      <div className="relative min-h-[250px]">
        <img
          src="https://poonaclubltd.com/wp-content/uploads/2017/04/Tennis.jpg"
          alt="Tennis Club"
          className="w-full h-full object-cover"
        />
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <h1 className="text-white text-5xl font-bold">Our Academy</h1>
        </motion.div>
      </div>

      {/* Text Content Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-center p-6"
      >
        <h2 className="text-green-600 text-4xl font-bold mt-8">Fusion Sports Academy</h2>
        <p className="text-gray-700 mt-8  text-2xl font-serif">
          At Fusion Sports Academy, we are passionate about nurturing talent and
          empowering athletes to reach their full potential. With a team of
          highly skilled coaches, state-of-the-art facilities, and a
          comprehensive training program, we provide exceptional coaching in
          tennis, football, cricket, and badminton. Our commitment to
          excellence, personalized approach, and unwavering support make us the
          preferred choice for athletes seeking professional guidance and
          success. Join us and embark on an exciting journey of growth,
          achievement, and unforgettable sporting experiences.
        </p>
      </motion.div>

      {/* Sports Courses Section */}
      <section className="flex flex-col md:flex-row mt-8 mb-4 items-center justify-center px-6 py-2 bg-white">
        {/* Image Section */}
        <motion.div 
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src="https://cdn.pixabay.com/photo/2020/11/27/18/59/tennis-5782695_1280.jpg" 
            alt="Sports Training" 
            className="rounded-lg w-full max-h-[32rem] object-cover"
          />
        </motion.div>

        {/* Text Content Section */}
        <motion.div 
          className="w-full md:w-1/2 md:pl-12 mt-6 md:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gray-500 text-lg uppercase">Professional and certified teachings</p>
          <h2 className="text-green-600 text-4xl font-bold mt-2">
            The best courses for all children
          </h2>
          <p className="text-gray-700 mt-4 text-lg">
            Discover the best sports courses for kids at NEON Sports Academy. Our tennis, football, cricket, and badminton programs offer expert coaching, fun-filled activities, and a nurturing environment for young athletes to thrive and excel.
          </p>
          
          {/* Progress Bars */}
          <div className="mt-6">
            <p className="text-lg font-semibold text-green-600">Courses for adults</p>
            <div className="w-full bg-gray-200 rounded-full h-5 overflow-hidden">
              <motion.div 
                className="bg-green-600 h-full text-white text-xs flex items-center justify-center" 
                initial={{ width: 0 }}
                animate={{ width: "45%" }}
                transition={{ duration: 1 }}
              >
                45%
              </motion.div>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-lg font-semibold text-green-600">Courses for kids</p>
            <div className="w-full bg-gray-200 rounded-full h-5 overflow-hidden">
              <motion.div 
                className="bg-green-700 h-full text-white text-xs flex items-center justify-center" 
                initial={{ width: 0 }}
                animate={{ width: "70%" }}
                transition={{ duration: 1.2 }}
              >
                70%
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Coach Plans Section */}
      <div className="p-6 bg-white text-center flex flex-col">
        <h2 className="text-green-600 text-4xl font-bold mb-6">
          Choose the perfect coach plan for you
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          {/* Foundation Development Program */}
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative text-white p-6 rounded-lg shadow-lg w-full md:w-1/2 bg-cover bg-center flex items-center justify-center object-cover min-h-[35rem]"
            style={{
              backgroundImage:
                "url('https://kidsstoppress.com/wp-content/uploads/2021/09/1538658807.BestTennisAcademiesInPune_KIDSSTOPPRESS.jpg')",
            }}
          >
            {/* Green Overlay */}
            <div className="absolute inset-0 bg-green-600 opacity-70 rounded-lg space-y-4"></div>
            
            <div className="relative p-6 text-center">
              <h3 className="text-2xl font-bold">Foundation Development Program</h3>
              <p className="text-3xl font-bold">12 Months</p>
              <p className="text-lg">(FOR BEGINNER)</p>
              <ul className="mt-4 text-lg font-serif">
                <li>✔ Foundations for Future Champions</li>
                <li>✔ Beginner's Path to Success</li>
                <li>✔ Building Skills, Igniting Passion</li>
                <li>✔ Nurturing Young Sporting Talent</li>
              </ul>
              <Link to="/foundation">
                <button className="mt-6 items-center flex justify-center mx-auto w-40 px-4 py-2 bg-white text-orange-600 text-lg font-semibold rounded-lg border-2 border-orange-600 hover:bg-green-600 hover:text-white">
                  BOOK NOW!
                </button>
              </Link>
            </div>
          </motion.div>

          {/* High Performance Program */}
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative text-white p-6 rounded-lg shadow-lg w-full md:w-1/2 h-96 bg-cover bg-center flex items-center justify-center min-h-[35rem]"
            style={{
              backgroundImage:
                "url('https://thecoachcrew.com/wp-content/uploads/2022/08/pp1-1024x683-1.jpg')",
            }}
          >
            {/* Orange Overlay */}
            <div className="absolute inset-0 bg-orange-600 opacity-70 rounded-lg"></div>
            <div className="relative p-6 text-center">
              <h3 className="text-2xl font-bold">High Performance Program</h3>
              <p className="text-3xl font-bold">12 Months</p>
              <p className="text-lg">(FOR ADVANCED)</p>
              <ul className="mt-4 text-lg font-serif">
                <li>✔ Elite Training for Excellence</li>
                <li>✔ Taking Skills to New Heights</li>
                <li>✔ Pushing Limits, Achieving Greatness</li>
                <li>✔ Preparing for Pro tournaments</li>
              </ul>
              <Link to="/performance">
                <button className="mt-6 items-center flex justify-center mx-auto w-40 px-4 py-2 bg-white text-green-600 text-lg font-semibold rounded-lg border-2 border-green-600 hover:bg-orange-600 hover:text-white">
                  BOOK NOW!
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SportsClub;
