import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const Winner = () => {
    const images = [
        "https://i2.wp.com/indiantennisdaily.com/wp-content/uploads/2024/03/AO7-1024x683.jpeg?ssl=1",
        "https://i2.wp.com/indiantennisdaily.com/wp-content/uploads/2024/03/AO8-1024x683.jpeg?ssl=1",
        "https://i2.wp.com/indiantennisdaily.com/wp-content/uploads/2024/03/AO9-1024x683.jpeg?ssl=1",
        "https://i0.wp.com/indiantennisdaily.com/wp-content/uploads/2024/03/AO5-1024x683.jpeg?ssl=1",
        "https://i1.wp.com/indiantennisdaily.com/wp-content/uploads/2024/03/AO10-1024x683.jpeg?ssl=1",
        "https://i0.wp.com/indiantennisdaily.com/wp-content/uploads/2024/03/AO4.jpeg?fit=3200%2C1438"
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
                    src="https://img.freepik.com/free-photo/tennis-ball-tennis-court_155003-10321.jpg"
                    alt="Local Tennis Champion"
                    className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <h2 className="text-white text-4xl font-bold">Local Boy Wins U-14 Tennis Championship</h2>
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
                        src="https://i0.wp.com/indiantennisdaily.com/wp-content/uploads/2024/10/Screenshot-2024-10-06-at-11.55.33.png?resize=551%2C450&ssl=1"
                        alt="Champion with Trophy"
                        className="w-full rounded-lg shadow-lg h-80 object-cover"
                    />
                </motion.div>

                <motion.div
                    className="md:w-1/2 w-full text-gray-800"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <h2 className="text-4xl font-bold mb-6 text-blue-800">
                        A Proud Moment for Our Community
                    </h2>
                    <p className="text-2xl mb-4 font-serif">
                        Our very own rising star has made us proud by winning the U-14 Tennis Championship! His dedication,
                        perseverance, and sportsmanship have set an inspiring example for young athletes.
                        <br /><br />
                        From rigorous training sessions to an outstanding performance on the court, his journey is a testament to
                        hard work and passion. Let’s celebrate his success and look forward to many more achievements!
                    </p>
                </motion.div>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mt-2 p-6 text-center w-full">
                {images.map((src, index) => (
                    <motion.img
                        key={index}
                        src={src}
                        alt={`Champion Moment ${index + 1}`}
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
                    <img src={selectedImage} alt="Selected" className="max-w-[90%] max-h-[80vh] rounded-lg shadow-lg" />
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

export default Winner;
