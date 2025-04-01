import { motion } from "framer-motion";
import { useState } from "react";
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
        <section className="w-full">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full text-center py-6"
            ></motion.div>

            <div className="relative">
                <img
                    src="https://train.fitness/wp-content/uploads/Images/BlogImages/blog-2024/s-and-c-coaching-insights-blog-banner.jpg"
                    alt="Advance Strength and Conditioning Sessions"
                    className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <h2 className="text-white text-4xl font-bold">Advance Strength and Conditioning Sessions</h2>
                </div>
            </div>
            <div className="p-3 flex ">
                <Link to="/news" className="text-gray-700 text-xl mr-2 flex items-center">
                    <span className="material-symbols-outlined">arrow_back_ios_new</span>
                    <span className="">Back</span>
                </Link>
                
            </div>
            <motion.div
                className="flex flex-col md:flex-row items-center gap-8 p-6 md:p-12"
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
                        className="w-full rounded-lg shadow-lg h-80 object-cover "
                    />
                </motion.div>

                <motion.div
                    className="md:w-1/2 w-full text-gray-800"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <h2 className="text-4xl font-bold mb-6 text-green-600">
                        Advance Strength and Conditioning - Elevate Your Performance
                    </h2>
                    <p className="text-2xl mb-4 font-serif">
                        Our advanced strength and conditioning sessions are designed to push athletes beyond their limits.
                        With expert guidance, structured workouts, and high-intensity training, participants will develop
                        endurance, power, and resilience to compete at the highest levels.
                        <br /><br />
                        Join us to enhance your athletic ability and take your performance to the next level!
                    </p>
                </motion.div>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mt-2 p-6 text-center w-full">
                {images.map((src, index) => (
                    <motion.img
                        key={index}
                        src={src}
                        alt={`Training Session ${index + 1}`}
                        className="w-full h-52 object-cover rounded-lg cursor-pointer transition-transform hover:scale-105"
                        onClick={() => openModal(index)}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    />
                ))}
            </div>

            {selectedImage && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
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
