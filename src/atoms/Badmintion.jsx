import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const BadmintonSection = () => {
    const images = [
        "https://www.tribuneindia.com/sortd-service/imaginary/v22-01/jpg/large/high?url=dGhldHJpYnVuZS1zb3J0ZC1wcm8tcHJvZC1zb3J0ZC9tZWRpYTE2YTU4YzcwLTZkODktMTFlZi04OTQ0LWNmNDg1NzhjZjk4Ny5qcGc=",
        "https://www.hindustantimes.com/ht-img/img/2025/03/15/550x309/Indian-badminton-player-Lakshya-Sen---Hindustan-Ti_1742011972666_1742011985100.jpg",
        "https://www.ppba.in/images/ppba-thailand-03.jpg",
        "https://im.indiatimes.in/content/2017/Mar/797e743e-d574-42a1-becf-0a8c29773252_1489319211.jpg?w=640&h=427&cc=1&webp=1&q=75",
        "https://thebridge.in/h-upload/2022/03/28/25440-ajay.webp",
        "https://sc0.blr1.cdn.digitaloceanspaces.com/article/198578-dedpykhkxk-1708311742.jpeg"
    ];

    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
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
        <section className="w-full bg-gray-50">
            {/* Hero Image */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative w-full"
            >
                <img
                    src="https://poonaclubltd.com/wp-content/uploads/2017/04/Badminton.jpg"
                    alt="Badminton Club"
                    className="w-full h-64 sm:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <h2 className="text-white text-3xl sm:text-4xl font-bold px-4 text-center">
                        Badminton Club
                    </h2>
                </div>
            </motion.div>

            {/* Back Button */}
            <div className="p-4 flex items-center">
                <Link to="/sports" className="text-gray-700 text-lg flex items-center space-x-2">
                    <span className="material-symbols-outlined">arrow_back_ios_new</span>
                </Link>
            </div>

            {/* Content Section */}
            <motion.div
                className="flex flex-col md:flex-row items-center gap-6 px-4 md:px-12 py-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                {/* Image Section */}
                <motion.div
                    className="md:w-1/3 w-full"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    whileHover={{ scale: 1.05 }}
                >
                    <img
                        src="https://media.istockphoto.com/id/1391562342/photo/taiwanese-badminton-players-warm-up-exercise-practicing-in-badminton-court-endurance-training.jpg?s=612x612&w=0&k=20&c=V7_WUd6gTOsTPepDqNqevl0QmLs10oV5yDQuvgWYoWM="
                        alt="Badminton"
                        className="w-full rounded-lg shadow-lg h-64 sm:h-80 object-cover"
                    />
                </motion.div>

                {/* Text Section */}
                <motion.div
                    className="md:w-2/3 w-full text-gray-800"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <h2 className="text-3xl font-bold mb-4 text-cyan-600 text-center md:text-left">
                        Badminton – Shuttling into the Future
                    </h2>
                    <p className="text-lg mb-4 font-serif leading-relaxed text-justify">
                        As a sport that combines power and finesse, badminton is just getting started.
                        With major victories in India’s kitty, this sport has gained a lot of importance.
                        <br /><br />
                        Modern players have captivated audiences around the globe with their electrifying rallies,
                        lightning-fast reflexes, and strategic genius. The sport of badminton is unquestionably
                        going to have a bright future thanks to its growing popularity and the rise of new players.
                    </p>
                </motion.div>
            </motion.div>

            {/* Image Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 px-4 md:px-12 py-6">
                {images.map((src, index) => (
                    <motion.img
                        key={index}
                        src={src}
                        alt={`Event ${index + 1}`}
                        className="w-full h-40 md:h-48 object-cover rounded-lg cursor-pointer transition-transform hover:scale-110"
                        onClick={() => openModal(index)}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    />
                ))}
            </div>

            {/* Modal */}
            {selectedImage && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
                    <button
                        className="absolute top-4 right-4 text-white text-3xl"
                        onClick={closeModal}
                    >
                        &times;
                    </button>
                    <button
                        className="absolute left-4 text-white text-3xl"
                        onClick={showPrev}
                        disabled={currentIndex === 0}
                    >
                        &#60;
                    </button>
                    <img
                        src={selectedImage}
                        alt="Selected"
                        className="max-w-[90%] max-h-[80vh] rounded-lg shadow-lg"
                    />
                    <button
                        className="absolute right-4 text-white text-3xl"
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

export default BadmintonSection;
