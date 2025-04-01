import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const TennisSection = () => {
    const images = [
        "https://images.sidearmdev.com/convert?url=https%3A%2F%2Fdxbhsrqyrr690.cloudfront.net%2Fsidearm.nextgen.sites%2Funlvrebels.com%2Fimages%2F2022%2F2%2F6%2F_LKP2803.jpg&type=webp",
        "https://images.sidearmdev.com/convert?url=https%3A%2F%2Fdxbhsrqyrr690.cloudfront.net%2Fsidearm.nextgen.sites%2Funlvrebels.com%2Fimages%2F2022%2F4%2F23%2F_LKP0842.jpg&type=webp",
        "https://static.toiimg.com/thumb/msid-67683259,width-400,resizemode-4/67683259.jpg",
        "https://lh3.googleusercontent.com/proxy/hvjn46YoNwNnPDDITEkTbdy8hbn9hdCAUyZFP7E6uZvA5RymAHkrgXUnq-8i8Z1WTOl_XvCD1r2n9H3YfF609qB4zfEYVEGv5Pk4nKrqGgl6",
        "https://tenniskhelo.com/assets/images/academy/academy3.png",
        "https://newsday.co.tt/wp-content/uploads/2024/12/21997299-1-1024x716.jpg"
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
        <section className="w-full ">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full text-center py-6"
            ></motion.div>

            <div className="relative ">
                <img
                    src="https://curated-upload.imgix.net/AgAAAB0AjtYqPBkSNhWVn4_8FkQ_tg.png"
                    alt="Tennis Club"
                    className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <h2 className="text-white text-4xl font-bold">Tennis Club</h2>
                </div>
            </div>
            <div className="p-3 flex ">
                <Link to="/sports" className="text-gray-700 text-xl mr-2 flex items-center">
                    <span className="material-symbols-outlined">arrow_back_ios_new</span>
                    <span className="">Back</span>
                </Link>
                
            </div>
            <motion.div
                className="flex flex-col md:flex-row items-center gap-8 p-6 md:p-12 "
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <motion.div
                    className="md:w-1/3 w-full "
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    whileHover={{ scale: 1.05 }}
                >
                    <img
                        src="https://www.tennisireland.ie/wp-content/uploads/2024/11/2724520-scaled.jpg"
                        alt="Tennis"
                        className="w-full rounded-lg shadow-lg h-80 object-cover"
                    />
                </motion.div>

                <motion.div
                    className="md:w-1/2 w-full text-gray-800 "
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <h2 className="text-4xl font-bold mb-6 text-green-500">
                        Tennis – A Game of Speed and Precision
                    </h2>
                    <p className="text-2xl mb-4 font-serif">
                        Tennis is a sport that blends agility, power, and strategy.
                        With global tournaments and emerging champions, its popularity is soaring.Tennis can be played on various surfaces, including hard courts, clay courts, and grass courts.
                        <br /><br />
                        Fans worldwide admire the skillful rallies, quick reflexes, and mental fortitude
                        displayed on the court. Tennis is set to keep thrilling audiences for generations to come.
                    </p>
                </motion.div>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mt-2 p-6 text-center w-full">
                {images.map((src, index) => (
                    <motion.img
                        key={index}
                        src={src}
                        alt={`Event ${index + 1}`}
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

export default TennisSection;
