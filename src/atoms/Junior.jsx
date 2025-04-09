import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Junior = () => {
    const images = [
        "https://thebridge.in/h-upload/2022/01/31/1500x900_22694-unnati-hooda.webp",
        "https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_sm_2x/f_auto/primary/g9ehvq5vwxivmnm9kq35",
        "https://i.ytimg.com/vi/bmFaUFz2DUE/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGGUgTShdMA8=&rs=AOn4CLB_uvoGe22DYIckR8uhgT5I4n-ovg",
        "https://assets-api.kathmandupost.com/thumb.php?src=https://assets-cdn.kathmandupost.com/uploads/source/news/2022/news/thumb4-1647312231.jpg&w=900&height=601",
        "https://www.pnbmetlife.com/content/dam/pnb-metlife/jbc/JBC_Gallary_2023_13.jpg",
        "https://sc0.blr1.cdn.digitaloceanspaces.com/article/195181-thrjlostum-1697973844.jpg"
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
            >
                {/* Add a title or intro text here if needed */}
            </motion.div>

            {/* Hero Section */}
            <div className="relative w-full">
                <img
                    src="https://supra.net.au/wp-content/uploads/2024/07/AdobeStock_497080892-scaled-e1721365280148.jpeg"
                    alt="Junior Badminton League"
                    className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">
                        Junior Badminton League
                    </h2>
                </div>
            </div>

            {/* Back Button */}
            <div className="p-4 md:p-6 flex justify-start items-center">
                <Link to="/news" className="text-gray-700 text-lg sm:text-xl flex items-center">
                    <span className="material-symbols-outlined">arrow_back_ios_new</span>
                </Link>
            </div>

            {/* Content Section */}
            <motion.div
                className="flex flex-col md:flex-row items-center gap-6 md:gap-8 p-6 md:p-12"
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
                        src="https://upload.wikimedia.org/wikipedia/en/a/af/Junior_badminton_league.jpg"
                        alt="League Matches"
                        className="w-full rounded-lg shadow-lg h-[250px] sm:h-[350px] md:h-[400px] object-cover"
                    />
                </motion.div>

                <motion.div
                    className="md:w-1/2 w-full text-gray-800"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-green-600">
                        Junior Badminton League - The Path to Glory
                    </h2>
                    <p className="text-xl sm:text-2xl mb-4 font-serif leading-relaxed">
                        The Junior Badminton League is a platform for young athletes to showcase their talent and compete at the highest level.
                        With structured matches, professional coaching, and an opportunity to be recognized, this is the perfect stage for budding badminton champions.
                        <br /><br />
                        Join us in this exhilarating journey and be a part of the future of badminton. Your skills, dedication, and passion could lead you to new heights!
                    </p>
                </motion.div>
            </motion.div>

            {/* Gallery Section */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6 mt-4 p-6">
                {images.map((src, index) => (
                    <motion.img
                        key={index}
                        src={src}
                        alt={`League Match ${index + 1}`}
                        className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] object-cover rounded-lg cursor-pointer transition-transform hover:scale-105"
                        onClick={() => openModal(index)}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    />
                ))}
            </div>

            {/* Modal Preview */}
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
                    <img
                        src={selectedImage}
                        alt="Selected Match"
                        className="max-w-[90%] max-h-[80vh] rounded-lg shadow-lg"
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

export default Junior;
