import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Strength = () => {
    const images = [
        "https://assets-global.website-files.com/5ca5fe687e34be0992df1fbe/5e50186abe5b2e3af153dca5_AA_ABH1746-min.jpg",
        "https://thumbs.dreamstime.com/b/treinamento-novo-dos-jogadores-de-futebol-no-passo-broca-do-cone-slalom-133671467.jpg",
        "https://www.hindustantimes.com/ht-img/img/2023/07/28/1600x900/weekend_workout_1690553408872_1690553425149.jpg",
        "https://www.scienceforsport.com/wp-content/uploads/2018/02/Kid-Russian-Twist-scaled.webp",
        "https://aptrainingsystems.com/wp-content/uploads/2020/06/Katie-web-scaled.jpg",
        "https://www.mensfitness.com/.image/t_share/MTk2MTM3MTM5NTE3NTMxMjgx/main-weightsled.jpg"
    ];

    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top on component mount
    }, []);

    const openModal = (index) => {
        setSelectedImage(images[index]);
        setCurrentIndex(index);
    };

    const closeModal = () => setSelectedImage(null);

    const showPrev = () => {
        if (currentIndex > 0) {
            const newIndex = currentIndex - 1;
            setCurrentIndex(newIndex);
            setSelectedImage(images[newIndex]);
        }
    };

    const showNext = () => {
        if (currentIndex < images.length - 1) {
            const newIndex = currentIndex + 1;
            setCurrentIndex(newIndex);
            setSelectedImage(images[newIndex]);
        }
    };

    return (
        <section className="w-full bg-gray-100">
            {/* Hero Section */}
            <div className="relative w-full">
                <img
                    src="https://train.fitness/wp-content/uploads/Images/BlogImages/blog-2024/s-and-c-coaching-insights-blog-banner.jpg"
                    alt="Advance Strength and Conditioning Sessions"
                    className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold text-center px-4">
                        Advance Strength and Conditioning Sessions
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
                        src="https://iascfitness.org/wp-content/uploads/2023/12/Black-and-Yellow-Fitness-YouTube-Thumbnail-3-1.png"
                        alt="Strength Training"
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
                        Advance Strength and Conditioning - Elevate Your Performance
                    </h2>
                    <p className="text-lg sm:text-xl mb-6 font-serif leading-relaxed text-center md:text-left">
                        Our advanced strength and conditioning sessions are designed to push athletes beyond their limits.
                        With expert guidance, structured workouts, and high-intensity training, participants will develop
                        endurance, power, and resilience to compete at the highest levels.
                        <br /><br />
                        Join us to enhance your athletic ability and take your performance to the next level!
                    </p>
                </motion.div>
            </motion.div>

            {/* Image Gallery */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6 mt-4 p-6 bg-white">
                {images.map((src, index) => (
                    <motion.img
                        key={index}
                        src={src}
                        alt={`Training Session ${index + 1}`}
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
                    <img src={selectedImage} alt="Selected Session" className="max-w-[90%] max-h-[80vh] rounded-lg shadow-lg" />
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

export default Strength;
