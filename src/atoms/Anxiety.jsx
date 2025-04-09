import { motion } from "framer-motion";
import { useEffect, useState } from "react";
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
        <section className="w-full bg-gray-50">
            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative w-full h-64 sm:h-80 md:h-96"
            >
                <img
                    src="https://cdn.ttgtmedia.com/visuals/ComputerWeekly/Hero%20Images/sport-football-1-adobe.jpeg"
                    alt="Anxiety Awareness"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center px-4 sm:px-8">
                    <h2 className="text-white text-3xl sm:text-4xl font-bold text-center shadow-md">
                        Understanding Anxiety
                    </h2>
                </div>
            </motion.div>

            {/* Back Button */}
            <div className="p-4">
                <Link to="/news" className="flex items-center text-lg">
                    <span className="material-symbols-outlined mr-1">arrow_back_ios_new</span>
                  
                </Link>
            </div>

            {/* Content Section */}
            <motion.div
                className="flex flex-col md:flex-row items-center gap-6 p-6 md:p-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                {/* Image */}
                <motion.div
                    className="w-full md:w-1/3"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    whileHover={{ scale: 1.05 }}
                >
                    <img
                        src="https://cloud-1de12d.b-cdn.net/media/original/d661fc24b5743a973f9ae57469ccd57d/Screenshot2023-11-18at18.40.07.png"
                        alt="Anxiety"
                        className="w-full rounded-lg shadow-lg object-cover h-80"
                    />
                </motion.div>

                {/* Text Content */}
                <motion.div
                    className="w-full md:w-2/3 text-gray-800"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <h2 className="text-3xl font-bold text-blue-800 mb-4">
                        Anxiety – Understanding and Coping
                    </h2>
                    <p className="text-lg leading-relaxed">
                        Anxiety is a natural response to stress, but excessive worry can affect daily life. 
                        Our resources help individuals recognize symptoms and develop coping strategies.
                        <br /><br />
                        Managing anxiety involves self-care, therapy, and mindfulness techniques. Understanding anxiety 
                        empowers individuals to seek support and build resilience.
                    </p>
                </motion.div>
            </motion.div>

            {/* Image Gallery */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 p-6">
                {images.map((src, index) => (
                    <motion.img
                        key={index}
                        src={src}
                        alt={`Anxiety Awareness ${index + 1}`}
                        className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover rounded-lg cursor-pointer transition-transform hover:scale-105"
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
                        className="absolute top-5 right-5 text-white text-3xl"
                        onClick={closeModal}
                    >
                        &times;
                    </button>
                    <button
                        className="absolute left-5 text-white text-3xl"
                        onClick={showPrev}
                        disabled={currentIndex === 0}
                    >
                        &#60;
                    </button>
                    <img
                        src={selectedImage}
                        alt="Selected"
                        className="max-w-full max-h-[80vh] rounded-lg shadow-lg"
                    />
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

export default Anxiety;
