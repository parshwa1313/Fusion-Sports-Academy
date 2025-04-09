import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const coaches = [
    {
        name: "Anantha Krishnan",
        specialty: "Fitness Coach",
        image: "https://aquanationsports.com/wp-content/uploads/2024/04/ANANTHA-KRISHNAN-1.jpg",
    },
    {
        name: "Arjun Das",
        specialty: "Cricket Coach",
        image: "https://aquanationsports.com/wp-content/uploads/2024/04/ARJUN.jpg",
    },
    {
        name: "Vineeth K S",
        specialty: "Football Coach",
        image: "https://aquanationsports.com/wp-content/uploads/2024/04/VINEETH-K-S.jpg",
    },
    {
        name: "Diya Mary Mathew",
        specialty: "Tennis Coach",
        image: "https://aquanationsports.com/wp-content/uploads/2024/04/DIYA-MARY-MATHEW.jpg",
    },
    {
        name: "Neel Gunde",
        specialty: "Athletics Coach",
        image: "https://aquanationsports.com/wp-content/uploads/2024/04/NEEL-GUNDE.jpg",
    },
    {
        name: "Anand T",
        specialty: "Badminton Coach",
        image: "https://aquanationsports.com/wp-content/uploads/2024/04/ANAND-T.jpg",
    }
];

const Coaches = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const openModal = (index) => {
        setSelectedImage(coaches[index].image);
        setCurrentIndex(index);
    };

    const closeModal = () => setSelectedImage(null);

    const showPrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            setSelectedImage(coaches[currentIndex - 1].image);
        }
    };

    const showNext = () => {
        if (currentIndex < coaches.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setSelectedImage(coaches[currentIndex + 1].image);
        }
    };

    return (
        <section className="w-full bg-gray-50">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative w-full h-64 sm:h-80 md:h-96"
            >
                <img
                    src="https://media.licdn.com/dms/image/v2/D4E12AQHJ9agrtf53QQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1654624731726?e=2147483647&v=beta&t=LXsRfcXRw8xbycu0_qHb6XNXVozTx8k08U8eTZyy9ps"
                    alt="Meet Our Coaches"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center px-4 sm:px-8">
                    <h2 className="text-white text-3xl sm:text-4xl font-bold text-center shadow-md">
                        Meet Our Expert Coaches
                    </h2>
                </div>
            </motion.div>

            <div className="p-4">
                <Link to="/news" className="flex items-center text-lg">
                    <span className="material-symbols-outlined mr-1">arrow_back_ios_new</span>
                </Link>
            </div>

            <motion.div
                className="flex flex-col md:flex-row items-center gap-6 p-6 md:p-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <motion.div
                    className="w-full md:w-1/3"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    whileHover={{ scale: 1.05 }}
                >
                    <img
                        src="https://drstankovich.com/wp-content/uploads/2019/02/bigstock-208469581-scaled.jpg"
                        alt="Head Coach"
                        className="w-full rounded-lg shadow-lg object-cover h-80"
                    />
                </motion.div>

                <motion.div
                    className="w-full md:w-2/3 text-gray-800"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <h2 className="text-3xl font-bold text-red-500 mb-4">
                        Coach - Guiding You to Success
                    </h2>
                    <p className="text-lg leading-relaxed">
                        Our experienced coaching team is dedicated to nurturing talent and developing champions.
                        With years of expertise and a passion for the sport, they provide personalized training
                        to help players reach their full potential.
                        <br /><br />
                        Whether you’re a beginner or an advanced player, our coaches are here to mentor and
                        support you on your journey to excellence.
                    </p>
                </motion.div>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 p-6">
                {coaches.map((coach, index) => (
                    <motion.div
                        key={index}
                        className="relative"
                        onClick={() => openModal(index)}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <img
                            src={coach.image}
                            alt={coach.name}
                            className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover rounded-lg cursor-pointer transition-transform hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-70 text-white flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                            <div className="text-center px-2">
                                <h3 className="text-xl font-bold">{coach.name}</h3>
                                <p className="text-sm">{coach.specialty}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

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
                        alt="Selected Coach"
                        className="max-w-full max-h-[80vh] rounded-lg shadow-lg"
                    />
                    <button
                        className="absolute right-5 text-white text-3xl"
                        onClick={showNext}
                        disabled={currentIndex === coaches.length - 1}
                    >
                        &#62;
                    </button>
                </div>
            )}
        </section>
    );
};

export default Coaches;
