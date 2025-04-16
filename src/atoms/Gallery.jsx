import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Gallery = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const allImages = {
    Badminton: [
      "https://images.news18.com/ibnlive/uploads/2025/02/Badminton-Asia-Mixed-Team-Championships_Dhruv-Kapila-and-Tanisha-Crasto-2025-02-caa017b14f3ae1896227b5e437df121e-16x9.png?impolicy=website&width=640&height=360",
      "https://www.indiantelevision.com/sites/default/files/styles/smartcrop_800x800/public/images/tv-images/2024/01/08/Unnati-Hooda.jpg?itok=1t9zI8yI",
      "https://www.tribuneindia.com/sortd-service/imaginary/v22-01/jpg/large/high?url=dGhldHJpYnVuZS1zb3J0ZC1wcm8tcHJvZC1zb3J0ZC9tZWRpYTE2YTU4YzcwLTZkODktMTFlZi04OTQ0LWNmNDg1NzhjZjk4Ny5qcGc=",
      "https://www.hindustantimes.com/ht-img/img/2025/03/15/550x309/Indian-badminton-player-Lakshya-Sen---Hindustan-Ti_1742011972666_1742011985100.jpg",
      "https://www.ppba.in/images/ppba-thailand-03.jpg",
      "https://im.indiatimes.in/content/2017/Mar/797e743e-d574-42a1-becf-0a8c29773252_1489319211.jpg?w=640&h=427&cc=1&webp=1&q=75",
      "https://thebridge.in/h-upload/2022/03/28/25440-ajay.webp",
      "https://sc0.blr1.cdn.digitaloceanspaces.com/article/198578-dedpykhkxk-1708311742.jpeg"
    ],
    Cricket: [
      "https://assets.telegraphindia.com/telegraph/2022/Mar/1647082297_cap1.jpg",
      "https://www.cricinfo360.com/wp-content/uploads/2024/11/cricket-coaching-in-tamil-nadu.jpeg",
      "https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2019/11/21/Pictures/ht-pune_d531a478-0c4d-11ea-8f6b-23ce1c606bc4.JPG",
      "https://cdn.shopify.com/s/files/1/0278/4565/6649/files/WhatsApp_Image_2023-08-22_at_18.39.44.webp?v=1692710527",
      "https://www.jhs.ac.in/images/jhs-cricket-team-wins-in-viva-vibgyor-2023.jpg",
      "https://dlcl.in/assets/uploads/sliders/group.jpg",
      "https://cdn.shopify.com/s/files/1/0278/4565/6649/files/WhatsApp_Image_2023-06-24_at_05.54.40_1.webp?v=1687566723",
      "https://www.activesgcircle.gov.sg/hs-fs/hubfs/Circle%202.0%20-%202021/images/Fielding.jpg?width=500&height=333&name=Fielding.jpg"
    ],
    Football: [
      "https://im.rediff.com/sports/2019/apr/09wom-foot.gif",
      "https://www.thestatesman.com/wp-content/uploads/2019/12/1c9a9133357576b379b34125007a53be.jpg",
      "https://content.jdmagicbox.com/comp/vadodara/q4/0265px265.x265.120920112943.g3q4/catalogue/baroda-football-academy-fateganj-vadodara-football-coaching-classes-x9ei4uz3m1.jpg",
      "https://cdn-ilckmjl.nitrocdn.com/MQFWtjdgKqDgzrenAjmMgXQMbtBBmJeV/assets/images/optimized/blog.khelomore.com/wp-content/uploads/2018/06/DFAFeature.jpg",
      "https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/2017/07/24122039/18581783_212294045950722_1856483643311568992_n.jpg",
      "https://www.rset.edu.in/pdsa/wp-content/uploads/sites/13/2019/12/football-1.jpg",
      "https://cdn.shopify.com/s/files/1/0014/3789/2697/files/Boca_Juniors_Football_School_-_Best_Football_Academy_in_India_grande.jpg?v=1591047763",
      "https://rfcfootballacademy.in/assets/img/rfc_girls/rfc_girls_01.jpg"
    ],
  
    Tennis: [
      "https://plus.unsplash.com/premium_photo-1707486516761-0e2516920755?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://www.tennisnerd.net/wp-content/uploads/2021/08/Untitled-1-2.jpg",
      "https://images.sidearmdev.com/convert?url=https%3A%2F%2Fdxbhsrqyrr690.cloudfront.net%2Fsidearm.nextgen.sites%2Funlvrebels.com%2Fimages%2F2022%2F2%2F6%2F_LKP2803.jpg&type=webp",
      "https://images.sidearmdev.com/convert?url=https%3A%2F%2Fdxbhsrqyrr690.cloudfront.net%2Fsidearm.nextgen.sites%2Funlvrebels.com%2Fimages%2F2022%2F4%2F23%2F_LKP0842.jpg&type=webp",
      "https://static.toiimg.com/thumb/msid-67683259,width-400,resizemode-4/67683259.jpg",
      "https://www.tennis.com.au/wp-content/uploads/2023/12/172968-700x450.jpg",
      "https://tenniskhelo.com/assets/images/academy/academy3.png",
      "https://newsday.co.tt/wp-content/uploads/2024/12/21997299-1-1024x716.jpg"
    ],
  };

  const [category, setCategory] = useState("All");
  const images = category === "All" ? Object.values(allImages).flat() : allImages[category];
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const openModal = (index) => {
    setSelectedImage(images[index]);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setCurrentIndex(null);
  };

  const showNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedImage(images[currentIndex + 1]);
    }
  };

  const showPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setSelectedImage(images[currentIndex - 1]);
    }
  };

  return (
    <div className="relative w-full bg-gray-50 min-h-screen">
      <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
        <img
          src="https://sportsmatik.com/uploads/sports-corner/equipment-bn.jpg"
          alt="Tennis Club"
          className="w-full h-full object-cover"
        />
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30"
        >
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center">
            Our Gallery
          </h1>
        </motion.div>
      </div>

      <div className="flex flex-wrap justify-center gap-4 my-6">
        {["All", "Football", "Badminton", "Tennis", "Cricket"].map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-5 py-3 rounded-xl transition duration-300 text-lg font-semibold ${
              category === cat
                ? "bg-green-600 text-white shadow-lg "
                : "bg-white text-green-600 hover:bg-green-600 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-6 p-4">
        {images.map((src, index) => (
          <motion.img
            key={index}
            src={src}
            alt={`Event ${index + 1}`}
            className="w-full h-52 object-cover rounded-lg cursor-pointer shadow-md transition-transform transform hover:scale-105"
            onClick={() => openModal(index)}
          />
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <button
            className="absolute top-4 right-4 text-white text-3xl"
            onClick={closeModal}
          >
            &times;
          </button>
          <button
            className="absolute left-4 text-white text-3xl"
            onClick={showPrev}
            disabled={currentIndex === 0}
          >
            &#60;
          </button>
          <img
            src={selectedImage}
            alt="Selected"
            className="max-w-full max-h-[90vh] rounded-lg shadow-xl"
          />
          <button
            className="absolute right-4 text-white text-3xl"
            onClick={showNext}
            disabled={currentIndex === images.length - 1}
          >
            &#62;
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
