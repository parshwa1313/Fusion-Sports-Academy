import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const Coaches = () => {
    const images = [
        "https://aquanationsports.com/wp-content/uploads/2024/04/ANANTHA-KRISHNAN-1.jpg",
        "https://aquanationsports.com/wp-content/uploads/2024/04/ARJUN.jpg",
        "https://aquanationsports.com/wp-content/uploads/2024/04/VINEETH-K-S.jpg",
        "https://aquanationsports.com/wp-content/uploads/2024/04/DIYA-MARY-MATHEW.jpg",
        "https://aquanationsports.com/wp-content/uploads/2024/04/NEEL-GUNDE.jpg",
        "https://aquanationsports.com/wp-content/uploads/2024/04/ANAND-T.jpg"
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
                    src="https://media.licdn.com/dms/image/v2/D4E12AQHJ9agrtf53QQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1654624731726?e=2147483647&v=beta&t=LXsRfcXRw8xbycu0_qHb6XNXVozTx8k08U8eTZyy9ps"
                    alt="Meet Our Coaches"
                    className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <h2 className="text-white text-4xl font-bold">Meet Our Expert Coaches</h2>
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
                        src="https://drstankovich.com/wp-content/uploads/2019/02/bigstock-208469581-scaled.jpg"
                        alt="Head Coach"
                        className="w-full rounded-lg shadow-lg h-80 object-cover"
                    />
                </motion.div>

                <motion.div
                    className="md:w-1/2 w-full text-gray-800"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <h2 className="text-4xl font-bold mb-6 text-red-500">
                       Coach - Guiding You to Success
                    </h2>
                    <p className="text-2xl mb-4 font-serif">
                        Our experienced coaching team is dedicated to nurturing talent and developing champions. 
                        With years of expertise and a passion for the sport, they provide personalized training 
                        to help players reach their full potential.
                        <br /><br />
                        Whether you’re a beginner or an advanced player, our coaches are here to mentor and 
                        support you on your journey to excellence.
                    </p>
                </motion.div>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mt-2 p-6 text-center w-full">
                {images.map((src, index) => (
                    <motion.img
                        key={index}
                        src={src}
                        alt={`Coach ${index + 1}`}
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
                    <img src={selectedImage} alt="Selected Coach" className="max-w-[90%] max-h-[80vh] rounded-lg shadow-lg" />
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

export default Coaches;
