import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const FootballSection = () => {
    const images = [
        "https://content.jdmagicbox.com/comp/vadodara/q4/0265px265.x265.120920112943.g3q4/catalogue/baroda-football-academy-fateganj-vadodara-football-coaching-classes-x9ei4uz3m1.jpg",
        "https://cdn-ilckmjl.nitrocdn.com/MQFWtjdgKqDgzrenAjmMgXQMbtBBmJeV/assets/images/optimized/blog.khelomore.com/wp-content/uploads/2018/06/DFAFeature.jpg",
        "https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/2017/07/24122039/18581783_212294045950722_1856483643311568992_n.jpg",
        "https://www.rset.edu.in/pdsa/wp-content/uploads/sites/13/2019/12/football-1.jpg",
        "https://cdn.shopify.com/s/files/1/0014/3789/2697/files/Boca_Juniors_Football_School_-_Best_Football_Academy_in_India_grande.jpg?v=1591047763",
        "https://rfcfootballacademy.in/assets/img/rfc_girls/rfc_girls_01.jpg"
    ];

    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

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
                    src="https://miro.medium.com/v2/resize:fit:7828/0*xbrqrNuVxRi7s7u9"
                    alt="Football Club"
                    className="w-full h-64 sm:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <h2 className="text-white text-3xl sm:text-4xl font-bold px-4 text-center">
                        Football Club
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
                <motion.div
                    className="md:w-1/3 w-full"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    whileHover={{ scale: 1.05 }}
                >
                    <img
                        src="https://64.media.tumblr.com/17055d40f43b25675b8fc188d93b61e6/tumblr_ouqoz4Pho91rjev45o1_1280.jpg"
                        alt="Football"
                        className="w-full rounded-lg shadow-lg h-64 sm:h-80 object-cover"
                    />
                </motion.div>

                <motion.div
                    className="md:w-2/3 w-full text-gray-800"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <h2 className="text-3xl font-bold mb-4 text-blue-800 text-center md:text-left">
                        Football – A Game of Speed and Precision
                    </h2>
                    <p className="text-lg mb-4 font-serif leading-relaxed text-justify">
                        Football is a game of speed, strategy, and teamwork. Our facility offers professional turf fields, expert coaching, and structured training programs.
                        <br /><br />
                        Players develop ball control, passing accuracy, and defensive skills. Our coaching emphasizes stamina, coordination, and tactical awareness to prepare athletes for competitive matches at all levels.
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

export default FootballSection;
