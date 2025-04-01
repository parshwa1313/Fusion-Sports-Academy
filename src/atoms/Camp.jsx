import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const Camp = () => {
    const images = [
        "https://api.easternmirrornagaland.com/2020/12/Coaching-camp.jpg",
        "https://images.squarespace-cdn.com/content/v1/566962bb57eb8d68a43e4b29/c2a02534-a2b6-40ae-b065-d93c7e79b879/Girls%27+Total+Football",
        "https://avmschools.ac.in/wp-content/uploads/2023/08/unnamed-1-1024x768.png",
        "https://www.nfacademy.com/wp-content/uploads/2020/03/nf-academy-girl-camp-1.jpg",
        "https://looking-for-soccer.com/wp-content/uploads/2021/12/filles-stage-de-foot.jpg",
        "https://i.err.ee/smartcrop?type=optimize&width=1472&aspectratio=16%3A10&url=https%3A%2F%2Fs.err.ee%2Fphoto%2Fcrop%2F2024%2F04%2F18%2F2362443haac6.jpg"
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
                    src="https://trainingcamps.costabrava.org/wp-content/uploads/2024/01/Girona-training-camp-1-scaled.webp"
                    alt="Girls Football Camp"
                    className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <h2 className="text-white text-4xl font-bold"> Football Camp</h2>
                </div>
            </div>
            <div className="p-3 flex">
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
                        src="https://d2w4iw8gs9jo14.cloudfront.net/5516/9582/5116/football-camps-girl-shooting.jpeg"
                        alt="Coach with Young Players"
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
                        Inspiring the Next Generation of Female Footballers
                    </h2>
                    <p className="text-2xl mb-4 font-serif">
                        Join our special camp designed to encourage and train young girls in football. With expert guidance from our coach, 
                        participants will develop essential skills, teamwork, and confidence on the field. 
                        <br /><br />
                        Empowering the next generation of female athletes—one session at a time!
                    </p>
                </motion.div>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mt-2 p-6 text-center w-full">
                {images.map((src, index) => (
                    <motion.img
                        key={index}
                        src={src}
                        alt={`Camp Moment ${index + 1}`}
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
                    <img src={selectedImage} alt="Selected Camp Moment" className="max-w-[90%] max-h-[80vh] rounded-lg shadow-lg" />
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

export default Camp;
