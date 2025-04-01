import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const Trials = () => {
    const images = [
        "https://i0.wp.com/thetitansfa.com/wp-content/uploads/2024/01/159www.emmahurleyphotography.com_-scaled.jpg?fit=2560%2C1708&quality=60&ssl=1",
        "https://c.ndtvimg.com/2023-10/2ch1o4jo_satwik-chirag-afp_625x300_07_October_23.jpg?im=FitAndFill,algorithm=dnn,width=806,height=605",
        "https://sportsroots.academy/assets/images/image05.jpg?v=c43a733c",
        "https://www.fcjamshedpur.com/static-assets/uploadfile/ff/7c/c4/d655d4d4-a1dd-412c-acee-26e3e7404710.JPG",
        "https://img.dunyanews.tv/news/2023/August/08-24-23/news_big_images/749695_63666173.jpg",
        "https://thumbs.dreamstime.com/z/cricket-players-batting-practice-nets-trials-high-schools-batsmen-action-kearsney-college-grounds-bothas-hill-durban-south-87568734.jpg"
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
                    src="https://www.bridgwaterunitedfc.com/wp-content/uploads/2022/04/Academt-Trials-boys.jpg"
                    alt="Academy Trials"
                    className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <h2 className="text-white text-4xl font-bold">Academy Trials </h2>
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
                        src="https://www.theshots.co.uk/wp-content/uploads/2024/09/academy-trials.png"
                        alt="Trial Sessions"
                        className="w-full rounded-lg shadow-lg h-80 object-cover"
                    />
                </motion.div>

                <motion.div
                    className="md:w-1/2 w-full text-gray-800"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <h2 className="text-4xl font-bold mb-6 text-red-600">
                       Academy Trials - The Road to Excellence
                    </h2>
                    <p className="text-2xl mb-4 font-serif">
                        Our academy trials are designed to discover and nurture future champions. 
                        With rigorous training and expert guidance, participants have the opportunity 
                        to showcase their skills and take their game to the next level.
                        <br /><br />
                        Join us in this journey and make us proud. Your dedication and hard work 
                        could pave the way for a successful career in sports.
                    </p>
                </motion.div>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mt-2 p-6 text-center w-full">
                {images.map((src, index) => (
                    <motion.img
                        key={index}
                        src={src}
                        alt={`Trial Participant ${index + 1}`}
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
                    <img src={selectedImage} alt="Selected Trial" className="max-w-[90%] max-h-[80vh] rounded-lg shadow-lg" />
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

export default Trials;
