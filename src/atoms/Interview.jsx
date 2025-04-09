import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Interview = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top on mount
    }, []);

    const images = [
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_960,q_50/lsci/db/PICTURES/CMS/384600/384623.jpg",
        "https://imagesvs.oneindia.com/img/2024/06/gautamgambhir8-1718801460.jpg",
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202501/gautam-gambhir-113627574-16x9.jpg?VersionId=GS5tpfAHVjs4Pks60E_yG576NN_mvWgx&size=690:388",
        "https://bsmedia.business-standard.com/_media/bs/img/article/2024-07/22/full/1721628783-2906.jpg?im=FitAndFill=(826,465)",
        "https://static.cricketaddictor.com/images/posts/2024/Gautam-Gambhir-1-.jpg?q=80",
        "https://www.arabnews.com/sites/default/files/styles/n_670_395/public/2024/07/09/4458511-635217962.jpg?itok=QBhXUDMP"
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
        <section className="w-full bg-gray-100">
            {/* Hero Section */}
            <div className="relative w-full">
                <img
                    src="https://c8.alamy.com/comp/H8K0TX/microphones-prepared-for-press-conference-or-interview-isolated-on-H8K0TX.jpg"
                    alt="Interview with Coach"
                    className="w-full h-[250px] sm:h-[350px] md:h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold text-center px-4">
                        Exclusive Interview
                    </h2>
                </div>
            </div>

            {/* Back Button */}
            <div className="p-4 flex justify-start items-center">
                <Link to="/news" className="text-gray-700 text-lg flex items-center ">
                    <span className="material-symbols-outlined">arrow_back_ios_new</span>
                </Link>
            </div>

            {/* Content Section */}
            <motion.div
                className="flex flex-col md:flex-row items-center gap-6 md:gap-12 p-6 md:p-12"
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
                        src="https://c.ndtvimg.com/2024-10/fe5beu98_gautam-gambhir-afp_625x300_23_October_24.jpg?im=FeatureCrop,algorithm=dnn,width=806,height=605"
                        alt="Coach Profile"
                        className="w-full rounded-lg shadow-lg h-[250px] sm:h-[300px] md:h-[350px] object-cover"
                    />
                </motion.div>

                <motion.div
                    className="md:w-2/3 w-full text-gray-800"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-red-600 text-center md:text-left">
                        Exclusive Interview - Insights from Our Head Coach
                    </h2>
                    <p className="text-lg sm:text-xl mb-6 font-serif leading-relaxed text-center md:text-left">
                        Get exclusive insights from our head coach about training strategies, athlete development, and the journey to excellence.
                        Learn about the dedication and techniques that shape champions and inspire future athletes.
                        <br /><br />
                        Stay tuned for inspiring words and expert advice from our coaching staff!
                    </p>
                </motion.div>
            </motion.div>

            {/* Image Gallery */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6 mt-4 p-6 bg-white">
                {images.map((src, index) => (
                    <motion.img
                        key={index}
                        src={src}
                        alt={`Interview Moment ${index + 1}`}
                        className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover rounded-lg cursor-pointer transition-transform hover:scale-105"
                        onClick={() => openModal(index)}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    />
                ))}
            </div>

            {/* Modal for Image Preview */}
            {selectedImage && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
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
                        alt="Selected Interview Moment"
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

export default Interview;
