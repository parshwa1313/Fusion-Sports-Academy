import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const Headlines = () => {
    const images = [
        "https://c.ndtvimg.com/2025-01/jtm3vcc8_mohammed-kaif-_625x300_12_January_25.jpeg?im=FeatureCrop,algorithm=dnn,width=806,height=605",
        "https://zincfootball.com/wp-content/uploads/2023/09/ZINC-FOOTBALLS-MOHAMMED-KAIF-PLAYS-THE-STARRING-ROLE-AS-INDIA-LIFTS-SAFF-UNDER-16-e1712642260637.jpg",
        "https://parallelsports.in/images/upload/photo/1694501601.JPG",
        "https://images.bhaskarassets.com/thumb/1200x900/web2images/521/2024/09/20/app_172674857966ec17a3149b4_1000484272.jpg",
        "https://the-aiff.com/media/uploads/2024/09/Mohammed-Kaif-1024x655.jpg",
        "https://thebridge.in/h-upload/2024/09/30/1600x960_57916-updated-saff-u17.webp",    
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
                    src="https://miro.medium.com/v2/resize:fit:7828/0*xbrqrNuVxRi7s7u9"
                    alt="Former Academy Students Make Headlines"
                    className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <h2 className="text-white text-4xl font-bold">Headlines</h2>
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
                        src="https://tmssl.akamaized.net/images/foto/galerie/mohammed-kaif-india-u17-2024-25-1736142865-157835.jpg"
                        alt="Achievements"
                        className="w-full rounded-lg shadow-lg h-80 object-cover "
                    />
                </motion.div>

                <motion.div
                    className="md:w-1/2 w-full text-gray-800"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <h2 className="text-4xl font-bold mb-6 text-blue-600">
                    Former Academy Student - Create Headlines and Make Us Proud
                    </h2>
                    <p className="text-2xl mb-4 font-serif">
                        Our former academy students are making waves in their respective fields, earning recognition for their dedication and hard work.
                        Their achievements inspire the next generation, proving that commitment and perseverance lead to greatness.
                        <br /><br />
                        Join us in celebrating their milestones and let their success motivate you to chase your dreams!
                    </p>
                </motion.div>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mt-2 p-6 text-center w-full">
                {images.map((src, index) => (
                    <motion.img
                        key={index}
                        src={src}
                        alt={`Achievement ${index + 1}`}
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
                    <img src={selectedImage} alt="Selected Achievement" className="max-w-[90%] max-h-[80vh] rounded-lg shadow-lg" />
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

export default Headlines;
