import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const newsData = [
  {
    title: "Elite Sports Academy U14 Wins Regional Championship",
    category: "Academy News",
    image: "https://i0.wp.com/indiantennisdaily.com/wp-content/uploads/2024/10/Screenshot-2024-10-06-at-11.55.33.png?resize=551%2C450&ssl=1",
    link: "/winner"
  },
  {
    title: "Mental Toughness Training: Overcoming Match-Day Anxiety",
    category: "Training Tips",
    image: "https://cloud-1de12d.b-cdn.net/media/original/d661fc24b5743a973f9ae57469ccd57d/Screenshot2023-11-18at18.40.07.png",
    link: "/anxiety"
  },
  {
    title: "Meet Our Coaches: The Backbone of Elite Sports Academy",
    category: "Academy News",
    image: "https://drstankovich.com/wp-content/uploads/2019/02/bigstock-208469581-scaled.jpg",
    link: "/coach"
  },
  {
    title: "Upcoming Academy Trials: Get Ready to Shine!",
    category: "Announcements",
    image: "https://www.theshots.co.uk/wp-content/uploads/2024/09/academy-trials.png",
    link: "/trials"
  },
    {
    title: "Junior Badminton League Kicks Off This Weekend",
    category: "Events",
    image: "https://upload.wikimedia.org/wikipedia/en/a/af/Junior_badminton_league.jpg",
     link: "/junior"
  },
  {
    title: "Advanced Strength & Conditioning Sessions Now Available",
    category: "Training Tips",
    image: "https://iascfitness.org/wp-content/uploads/2023/12/Black-and-Yellow-Fitness-YouTube-Thumbnail-3-1.png",
    link: "/strength"
  },
  {
    title: "Star Alumni: Former Academy Players Making Headlines",
    category: "Academy News",
    image: "https://tmssl.akamaized.net/images/foto/galerie/mohammed-kaif-india-u17-2024-25-1736142865-157835.jpg",
    link: "/headlines"
  },
  {
    title: "Exclusive Interview: Head Coach Shares Future Plans",
    category: "Academy News",
    image: "https://c.ndtvimg.com/2024-10/fe5beu98_gautam-gambhir-afp_625x300_23_October_24.jpg?im=FeatureCrop,algorithm=dnn,width=806,height=605",
    link: "/interview"
  },
  {
    title: "Girls’ Football Camp: Special Training for Young Athletes",
    category: "Events",
    image: "https://d2w4iw8gs9jo14.cloudfront.net/5516/9582/5116/football-camps-girl-shooting.jpeg",
    link: "/camp"
  }
];

export default function NewsSection() {
  return (
    <section className="relative w-full">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative h-96 w-full bg-cover bg-center flex items-center justify-center text-white text-3xl font-bold object-cover"
        style={{ backgroundImage: "url('https://t4.ftcdn.net/jpg/03/69/50/41/360_F_369504123_BiPobs8I3sIdmlmCRyMdFHK8vYwnzym1.jpg')" }}> 
        News and Tips
      </motion.div>

      {/* News Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {newsData.map((news, index) => (
          <motion.div 
            key={index} 
            className="relative overflow-hidden rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <Link to={news.link} className="block">
              <div className="relative w-full h-60 bg-cover bg-center"
                   style={{ backgroundImage: `url(${news.image})` }}>
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
              </div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm uppercase">{news.category}</p>
                <h3 className="text-lg font-bold">{news.title}</h3>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
