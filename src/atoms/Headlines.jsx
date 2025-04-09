import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Headlines = () => {
  const images = [
    "https://c.ndtvimg.com/2025-01/jtm3vcc8_mohammed-kaif-_625x300_12_January_25.jpeg?im=FeatureCrop,algorithm=dnn,width=806,height=605",
    "https://zincfootball.com/wp-content/uploads/2023/09/ZINC-FOOTBALLS-MOHAMMED-KAIF-PLAYS-THE-STARRING-ROLE-AS-INDIA-LIFTS-SAFF-UNDER-16-e1712642260637.jpg",
    "https://parallelsports.in/images/upload/photo/1694501601.JPG",
    "https://images.bhaskarassets.com/thumb/1200x900/web2images/521/2024/09/20/app_172674857966ec17a3149b4_1000484272.jpg",
    "https://the-aiff.com/media/uploads/2024/09/Mohammed-Kaif-1024x655.jpg",
    "https://thebridge.in/h-upload/2024/09/30/1600x960_57916-updated-saff-u17.webp",
  ];

  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);

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
          src="https://miro.medium.com/v2/resize:fit:7828/0*xbrqrNuVxRi7s7u9"
          alt="Former Academy Students Make Headlines"
          className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold text-center px-4">
            Headlines
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
            src="https://tmssl.akamaized.net/images/foto/galerie/mohammed-kaif-india-u17-2024-25-1736142865-157835.jpg"
            alt="Achievements"
            className="w-full rounded-lg shadow-lg h-[250px] sm:h-[300px] md:h-[350px] object-cover"
          />
        </motion.div>

        <motion.div
          className="md:w-2/3 w-full text-gray-800"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-blue-600 text-center md:text-left">
            Former Academy Student - Create Headlines and Make Us Proud
          </h2>
          <p className="text-lg sm:text-xl mb-6 font-serif leading-relaxed text-center md:text-left">
            Our former academy students are making waves in their respective fields,
            earning recognition for their dedication and hard work. Their achievements
            inspire the next generation, proving that commitment and perseverance lead
            to greatness.
            <br /><br />
            Join us in celebrating their milestones and let their success motivate you to
            chase your dreams!
          </p>
        </motion.div>
      </motion.div>

      {/* Image Gallery */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6 mt-4 p-6 bg-white">
        {images.map((src, index) => (
          <motion.img
            key={index}
            src={src}
            alt={`Achievement ${index + 1}`}
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
          <img
            src={selectedImage}
            alt="Selected Achievement"
            className="max-w-[90%] max-h-[80vh] rounded-lg shadow-lg"
          />
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

export default Headlines;
