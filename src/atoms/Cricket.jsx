import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CricketSection = () => {
    const images = [
        "https://cdn.shopify.com/s/files/1/0278/4565/6649/files/WhatsApp_Image_2023-06-24_at_05.54.40_1.webp?v=1687566723",
        "https://assets.telegraphindia.com/telegraph/2022/Mar/1647082297_cap1.jpg",
        "https://www.cricinfo360.com/wp-content/uploads/2024/11/cricket-coaching-in-tamil-nadu.jpeg",
        "https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2019/11/21/Pictures/ht-pune_d531a478-0c4d-11ea-8f6b-23ce1c606bc4.JPG",
        "https://cdn.shopify.com/s/files/1/0278/4565/6649/files/WhatsApp_Image_2023-08-22_at_18.39.44.webp?v=1692710527",
        "https://www.activesgcircle.gov.sg/hs-fs/hubfs/Circle%202.0%20-%202021/images/Fielding.jpg?width=500&height=333&name=Fielding.jpg"
    ];

    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        // Scroll to top when component mounts
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
                    src="https://c8.alamy.com/comp/2WKB07R/cricket-bat-and-red-ball-with-natural-lighting-on-green-grass-horizontal-sport-theme-poster-greeting-cards-headers-website-and-app-2WKB07R.jpg"
                    alt="Cricket Club"
                    className="w-full h-64 sm:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <h2 className="text-white text-3xl sm:text-4xl font-bold px-4 text-center">
                        Cricket Club
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
                        src="https://images.news18.com/ibnlive/uploads/2025/02/cricket-helmet-wickets-bat-gloves-afp-2025-02-35d233d5c13dbba5e3a0347112e57d9c-16x9.jpg?impolicy=website&width=640&height=360"
                        alt="Cricket"
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
                    <h2 className="text-3xl font-bold mb-4 text-red-600 text-center md:text-left">
                        Cricket – A Game of Speed and Precision
                    </h2>
                    <p className="text-lg mb-4 font-serif leading-relaxed text-justify">
                        Cricket is a sport that demands skill, endurance, and strategy.
                        It has a massive fan base worldwide, with international tournaments drawing millions of spectators.
                        <br /><br />
                        Whether it's Test matches, ODIs, or T20s, cricket continues to evolve, providing thrilling moments and inspiring generations to play the sport.
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

export default CricketSection;
