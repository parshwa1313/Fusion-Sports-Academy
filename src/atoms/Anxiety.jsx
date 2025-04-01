import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const Anxiety = () => {
    const images = [
        "https://www.zoealexanderuk.com/wp-content/uploads/2023/03/Tennis-Anxiety-Management-Novak-Djokovic-Meditation-zoe-alexander.png",
        "https://media.newyorker.com/photos/59095c8f1c7a8e33fb38c180/master/pass/Tennis-Anxiety-2.jpg",
        "https://jirahanesthesia.com/wp-content/uploads/2024/03/anxiety-treatment-in-athletes-addressing-performance-pressure.jpg",
        "https://img.mensxp.com/media/content/2021/Jul/Reasons-Why-Indian-Cricketers-Are-Afraid-To-Speak-About-Mental-Health-Issues-In-Public-1400x653_610536c5677c4.jpeg?w=450&h=210&cc=1",
        "https://www.successstartswithin.com/wp-content/uploads/2024/01/overcome-fear-of-failure-in-sports.webp",
        "https://blog.badmintonjustin.com/wp-content/uploads/2023/06/3.jpg"
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
                    src="https://cdn.ttgtmedia.com/visuals/ComputerWeekly/Hero%20Images/sport-football-1-adobe.jpeg"
                    alt="Anxiety Awareness"
                    className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <h2 className="text-white text-4xl font-bold">Understanding Anxiety</h2>
                </div>
            </div>
            <div className="">
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
                    className="md:w-1/3 w-full "
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    whileHover={{ scale: 1.05 }}
                >
                    <img
                        src="https://cloud-1de12d.b-cdn.net/media/original/d661fc24b5743a973f9ae57469ccd57d/Screenshot2023-11-18at18.40.07.png"
                        alt="Anxiety"
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
                        Anxiety – Understanding and Coping
                    </h2>
                    <p className="text-2xl mb-4 font-serif">
                        Anxiety is a natural response to stress, but excessive worry can affect daily life. 
                        Our resources help individuals recognize symptoms and develop coping strategies.
                        <br /><br />
                        Managing anxiety involves self-care, therapy, and mindfulness techniques. Understanding anxiety 
                        empowers individuals to seek support and build resilience.
                        
                    </p>
                </motion.div>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mt-2 p-6 text-center w-full">
                {images.map((src, index) => (
                    <motion.img
                        key={index}
                        src={src}
                        alt={`Anxiety Awareness ${index + 1}`}
                        className="w-full h-56 object-cover rounded-lg cursor-pointer transition-transform hover:scale-105"
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
            </div>
        </section>
    );
};

export default Anxiety;
