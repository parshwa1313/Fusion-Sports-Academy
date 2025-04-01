import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const Interview = () => {
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
                    src="https://c8.alamy.com/comp/H8K0TX/microphones-prepared-for-press-conference-or-interview-isolated-on-H8K0TX.jpg"
                    alt="Interview with Coach"
                    className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <h2 className="text-white text-4xl font-bold">Exclusive Interview </h2>
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
                        src="https://c.ndtvimg.com/2024-10/fe5beu98_gautam-gambhir-afp_625x300_23_October_24.jpg?im=FeatureCrop,algorithm=dnn,width=806,height=605"
                        alt="Coach Profile"
                        className="w-full rounded-lg shadow-lg h-80 object-cover "
                    />
                </motion.div>

                <motion.div
                    className="md:w-1/2 w-full text-gray-800"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <h2 className="text-4xl font-bold mb-6 text-red-600">
                    Exclusive Interview - Insights from Our Head Coach
                    </h2>
                    <p className="text-2xl mb-4 font-serif">
                        Get exclusive insights from our head coach about training strategies, athlete development, and the journey to excellence.
                        Learn about the dedication and techniques that shape champions and inspire future athletes.
                        <br /><br />
                        Stay tuned for inspiring words and expert advice from our coaching staff!
                    </p>
                </motion.div>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mt-2 p-6 text-center w-full">
                {images.map((src, index) => (
                    <motion.img
                        key={index}
                        src={src}
                        alt={`Interview Moment ${index + 1}`}
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
                    <img src={selectedImage} alt="Selected Interview Moment" className="max-w-[90%] max-h-[80vh] rounded-lg shadow-lg" />
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
