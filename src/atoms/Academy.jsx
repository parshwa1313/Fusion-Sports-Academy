import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect } from "react";


const SportsClub = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <section className="w-full ">
      {/* Hero Image Section */}
      <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1582019887147-f7b01b4ba41e?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
            Our Academy
          </h1>
        </motion.div>
      </div>

      {/* Text Content Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-center px-6 py-8 md:px-12 lg:px-20"
      >
        <h2 className="text-orange-500 text-3xl md:text-5xl font-bold ">
          Fusion Sports Academy
        </h2>
        <p className="text-gray-700 mt-2 text-lg md:text-xl leading-relaxed font-serif">
          At Fusion Sports Academy, we are passionate about nurturing talent and
          empowering athletes to reach their full potential. With skilled coaches,
          top-notch facilities, and comprehensive training, we offer exceptional
          coaching in tennis, football, cricket, and badminton. Join us for an
          exciting journey of growth and unforgettable sporting experiences.
        </p>
      </motion.div>

      {/* Sports Courses Section */}
      <section className="flex flex-col md:flex-row items-center justify-center px-6 py-8 bg-white gap-6 md:gap-12">
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
            className="rounded-lg w-full max-h-[38rem] object-cover shadow-lg"
          />
        </motion.div>

        {/* Text Content Section */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gray-500 text-sm uppercase tracking-wide">Professional & Certified Teachings</p>
          <h2 className="text-green-600 text-3xl md:text-4xl font-bold mt-2">
            The Best Courses for All Ages
          </h2>
          <p className="text-gray-700 mt-4 text-lg leading-relaxed">
            Discover the best sports courses for kids and adults at Fusion Sports Academy.
            Our programs offer expert coaching, fun activities, and a nurturing environment
            for young athletes to thrive and excel.
          </p>

          {/* Progress Bars */}
          <div className="mt-6 space-y-4">
            <p className="text-lg font-semibold text-green-600">Courses for Adults</p>
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

            <p className="text-lg font-semibold text-green-600 mt-4">Courses for Kids</p>
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
      <div className="p-6  text-center mt-12">
        <h2 className="text-orange-500 text-3xl font-bold ">
          Choose the Perfect Coach Plan for You
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-6 px-4 mt-8">
          {/* Foundation Development Program */}
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative bg-white p-6 rounded-lg shadow-lg w-full md:w-1/2 min-h-[33rem] flex flex-col items-center justify-center"
            style={{
              backgroundImage:
                "url('https://kidsstoppress.com/wp-content/uploads/2021/09/1538658807.BestTennisAcademiesInPune_KIDSSTOPPRESS.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-green-500 opacity-70 rounded-lg"></div>
            <div className="relative text-white text-center p-4 space-y-4">
              <h3 className="text-2xl font-bold">Foundation Development Program</h3>
              <p className="text-xl font-bold">12 Months (For Beginners)</p>
              <ul className="text-lg list-disc list-inside">
                <li>✔ Foundations for Future Champions</li>
                <li>✔ Beginner's Path to Success</li>
                <li>✔ Building Skills, Igniting Passion</li>
                <li>✔ Nurturing Young Sporting Talent</li>
              </ul>
              <Link to="/foundation">
                <button className="mt-4 px-6 py-2 bg-white text-green-500 font-semibold rounded-lg border-2 border-white hover:bg-green-700 hover:text-white transition">
                  Book Now!
                </button>
              </Link>
            </div>
          </motion.div>

          {/* High Performance Program */}
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative bg-white p-6 rounded-lg shadow-lg w-full md:w-1/2 min-h-[30rem] flex flex-col items-center justify-center"
            style={{
              backgroundImage:
                "url('https://thecoachcrew.com/wp-content/uploads/2022/08/pp1-1024x683-1.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-orange-600 opacity-70 rounded-lg"></div>
            <div className="relative text-white text-center p-4 space-y-4">
              <h3 className="text-2xl font-bold">High Performance Program</h3>
              <p className="text-xl font-bold">12 Months (For Advanced Players)</p>
              <ul className="text-lg list-disc list-inside">
                <li>✔ Elite Training for Excellence</li>
                <li>✔ Taking Skills to New Heights</li>
                <li>✔ Pushing Limits, Achieving Greatness</li>
                <li>✔ Preparing for Pro Tournaments</li>
              </ul>
              <Link to="/performance">
                <button className="mt-4 px-6 py-2 bg-white text-orange-600 font-semibold rounded-lg border-2 border-white hover:bg-orange-600 hover:text-white transition">
                  Book Now!
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="flex flex-col min-h-[41rem] items-center  justify-center px-4 py-10 md:px-10 lg:px-20">
      <h2 className="text-2xl md:text-3xl text-green-500 font-bold text-center mb-6">Our Approach</h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 mt-2">
        {/* Left Content */}
        <div className="flex flex-col min-w-72">
          <ul className="text-center space-y-3 text-xl md:text-xl font-serif">
            <li>&#8226; Sport Selection</li>
            <li>&#8226; Design Consultation</li>
            <li>&#8226; Material selection and procurement</li>
            <li>&#8226; Project Planning and Construction</li>
          </ul>
          <ul className="text-center space-y-3 text-xl md:text-xl font-serif  mt-24">
            <li>&#8226; Training partner selection and contracting</li>
            <li>&#8226; Pricing Plans and Hyperlocal marketing strategy</li>
            <li>&#8226; Pay-to-play strategy implementation</li>
          </ul>
        </div>
        
        {/* Center Image */}
        <div className="w-full max-w-sm md:max-w-lg flex justify-center">
          <img src="https://as2.ftcdn.net/jpg/05/19/60/67/1000_F_519606758_seMOhkHAryYGZgPTcXPcNJokUMUvK5TR.jpg" alt="Our Approach" className="w-full  object-cover " />
        </div>
        
        {/* Right Content */}
        <ul className="text-center space-y-3 text-xl md:text-xl max-w-md font-serif">
          <li>&#8226; Enhanced revenue through best-in-class coaching</li>
          <li>&#8226; Enhanced utilization in Pay to Play hours</li>
          <li>&#8226; Create properties like leagues and tournaments for a 360° sustainable impact</li>
        </ul>
      </div>
    </div>
   
      </div>
    </section>
  );
};

export default SportsClub;
