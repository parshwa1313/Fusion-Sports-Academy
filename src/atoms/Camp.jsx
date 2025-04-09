import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Camp = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const images = [
    "https://api.easternmirrornagaland.com/2020/12/Coaching-camp.jpg",
    "https://images.squarespace-cdn.com/content/v1/566962bb57eb8d68a43e4b29/c2a02534-a2b6-40ae-b065-d93c7e79b879/Girls%27+Total+Football",
    "https://avmschools.ac.in/wp-content/uploads/2023/08/unnamed-1-1024x768.png",
    "https://www.nfacademy.com/wp-content/uploads/2020/03/nf-academy-girl-camp-1.jpg",
    "https://looking-for-soccer.com/wp-content/uploads/2021/12/filles-stage-de-foot.jpg",
    "https://i.err.ee/smartcrop?type=optimize&width=1472&aspectratio=16%3A10&url=https%3A%2F%2Fs.err.ee%2Fphoto%2Fcrop%2F2024%2F04%2F18%2F2362443haac6.jpg"
  ];

  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setSelectedImage(images[index]);
    setCurrentIndex(index);
  };

  const closeModal = () => setSelectedImage(null);

  const showPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setSelectedImage(images[currentIndex - 1]);
    }
  };

  const showNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedImage(images[currentIndex + 1]);
    }
  };

  return (
    <section className="w-full bg-gray-100">
      {/* Hero Section */}
      <div className="relative w-full">
        <img
          src="https://trainingcamps.costabrava.org/wp-content/uploads/2024/01/Girona-training-camp-1-scaled.webp"
          alt="Girls Football Camp"
          className="w-full h-[250px] sm:h-[350px] md:h-[450px] object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold text-center px-4">
            Football Camp
          </h2>
        </div>
      </div>

      {/* Back Button */}
      <div className="p-4 flex justify-start items-center">
        <Link to="/news" className="text-gray-700 text-lg flex items-center">
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </Link>
      </div>

      {/* Content Section */}
      <motion.div
        className="flex flex-col md:flex-row items-center gap-6 md:gap-12 p-6 md:p-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="md:w-1/3 w-full"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src="https://d2w4iw8gs9jo14.cloudfront.net/5516/9582/5116/football-camps-girl-shooting.jpeg"
            alt="Coach with Young Players"
            className="w-full rounded-lg shadow-lg h-[250px] sm:h-[300px] md:h-[350px] object-cover"
          />
        </motion.div>

        <motion.div
          className="md:w-2/3 w-full text-gray-800"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-green-600 text-center md:text-left">
            Inspiring the Next Generation of Female Footballers
          </h2>
          <p className="text-lg sm:text-xl mb-6 font-serif leading-relaxed text-center md:text-left">
            Join our special camp designed to encourage and train young girls in football.
            With expert guidance from our coach, participants will develop essential skills, teamwork, and confidence on the field.
            <br /><br />
            Empowering the next generation of female athletes—one session at a time!
          </p>
        </motion.div>
      </motion.div>

      {/* Image Gallery */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6 mt-4 p-6 bg-white">
        {images.map((src, index) => (
          <motion.img
            key={index}
            src={src}
            alt={`Camp Moment ${index + 1}`}
            className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover rounded-lg cursor-pointer transition-transform hover:scale-105"
            onClick={() => openModal(index)}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          />
        ))}
      </div>

      {/* Modal for Image Preview */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
          <button className="absolute top-5 right-5 text-white text-3xl" onClick={closeModal}>
            &times;
          </button>
          <button
            className="absolute left-5 text-white text-3xl"
            onClick={showPrev}
            disabled={currentIndex === 0}
          >
            &#60;
          </button>
          <img src={selectedImage} alt="Selected Camp Moment" className="max-w-[90%] max-h-[80vh] rounded-lg shadow-lg" />
          <button
            className="absolute right-5 text-white text-3xl"
            onClick={showNext}
            disabled={currentIndex === images.length - 1}
          >
            &#62;
          </button>
        </div>
      )}
    </section>
  );
};

export default Camp;
