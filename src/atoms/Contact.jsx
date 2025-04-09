import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ContactUs = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const submitForm = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Message:", message);
    alert("Request sent successfully!");
    setEmail("");
    setMessage("");
  };

  const cards = [
    {
      text: "Access expert coaches with years of experience in their respective sports.",
      bg: "bg-green-700",
      image: "https://media.istockphoto.com/id/1183940092/photo/footballer-dribbling-ball-on-training-between-orange-cones-young-football-player-in-sports.jpg?s=612x612&w=0&k=20&c=cmMRJFqAiJL8iWYaWvH_X16t53pKnMvJNKKxLywUiOI=",
    },
    {
      text: "State-of-the-art facilities with cutting-edge equipment and technology.",
      bg: "bg-yellow-600",
      image: "https://c8.alamy.com/comp/2TA9KFR/lucknow-india-29th-nov-2023-lucknow-india-november-29-indian-women-shuttler-ashwini-pponnappa-and-tanisha-crasto-in-action-during-syed-modi-international-badminton-championship-2023-at-bbd-badminton-academy-on-november-29-2023-in-lucknow-india-photo-by-deepak-guptahindustan-timessipa-usa-credit-sipa-usaalamy-live-news-2TA9KFR.jpg",
    },
    {
      text: "Customized training programs designed to fit your goals and abilities.",
      image: "https://imgmediagumlet.lbb.in/media/2024/02/65c60bf3fce1ea566ff8dd31_1707478003777.jpg",
    },
    {
      text: "Join a vibrant community of athletes and coaches dedicated to helping you reach your full potential in sports.",
      image: "https://princecbse.com/images/games/cri1.jpg",
    },
  ];

  const teamMembers = [
    {
      name: "Sureshi Maurya",
      role: "Founder & Director",
      qualifications: "Master of Tennis | Performances",
      email: "sureshigsureshmaurya.com",
      image: "https://media.licdn.com/dms/image/v2/D4E03AQH5wuag3VRhDw/profile-displayphoto-shrink_200_200/B4EZQorcBTHgAY-/0/1735849265078?e=2147483647&v=beta&t=5ykoZOc0UAeCBQkPsVwkEiA8hWGpiMoUF95uQ817QE0"
    },
    {
      name: "Meet Joshi",
      role: "Head Coach | Fusion  Bopal",
      qualifications: "USPTA, USPTR, RPT, ITF & Alta Certified Pro",
      email: "meet8105@gmail.com",
      image: "https://aquanationsports.com/wp-content/uploads/2024/04/ABIN-JOSE-1.jpg"
    },
    {
      name: "Sanjay Thakor",
      role: "Head Coach | Fusion  Science Ltd",
      qualifications: "USPTR & USPTA Certified Pro",
      email: "sanjaythakor4586@gmail.com",
      image: "https://aquanationsports.com/wp-content/uploads/2024/04/ANANTHA-KRISHNAN-1.jpg"
    },
    {
      name: "Utsav Panchal",
      role: "Head Coach | Strength & Conditioning",
      qualifications: "Master in Sports Science | Diploma in Strength and Conditioning from Barcelona",
      email: "Utsavanc@gmail.com",
      image: "https://aquanationsports.com/wp-content/uploads/2024/04/ARJUN.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="relative w-full">
        <div className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1552318965-6e6be7484ada?q=80&w=1887&auto=format&fit=crop"
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
              Contact Us
            </h1>
          </motion.div>
        </div>

        <motion.div
          className="px-6 py-10 text-center bg-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          <p className="text-gray-700 mx-auto text-xl font-serif mb-4">
            At Fusion Sports Academy, we're always happy to hear from you. Whether
            you have a question about our sports programs, services, or you just want to say hello, our team is here to help.
          </p>
          <p className="text-gray-700 mx-auto text-xl font-serif mb-4">
            We’re always excited to connect with our community. Whether you have questions about our dynamic sports programs, our specialized services, or just want to say hello — our dedicated team is here for you.
          </p>
        </motion.div>
      </section>

      {/* Team & Form Section */}
      <div className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center overflow-hidden px-4 sm:px-6 lg:px-8"
        style={{
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1666913667082-c1fecc45275d?q=80&w=1740&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl mx-auto gap-12 py-16">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 w-full max-w-md lg:max-w-lg"
          >
            <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Contact Us</h2>
            <form className="space-y-6" onSubmit={submitForm}>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 h-32"
                  required
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-green-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-600 transition-colors"
              >
                SEND MESSAGE
              </motion.button>
            </form>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white w-full lg:w-2/3">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center lg:items-start text-center lg:text-left"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="rounded-full border-4 border-white h-24 w-24 object-cover mb-4"
                />
                <h2 className="text-xl font-bold text-yellow-400">{member.name}</h2>
                <p className="text-sm text-blue-300 font-semibold">{member.role}</p>
                <p className="text-xs max-w-xs">{member.qualifications}</p>
                <p className="text-xs">{member.email}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Fusion Section */}
      <div className="flex justify-center py-6 mt-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-2xl md:text-4xl font-bold text-green-500 text-center"
        >
          Why Fusion?
        </motion.h2>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 p-2 mb-6">
        <motion.div className="relative h-[520px] w-full rounded-lg shadow-lg overflow-hidden">
          <img
            src={cards[2].image}
            alt="Card 3"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center p-4 text-center">
            <p className="text-lg font-semibold text-white">{cards[2].text}</p>
          </div>
        </motion.div>

        <div className="flex flex-col gap-4">
          {[cards[0], cards[1]].map((card, index) => (
            <motion.div
              key={index}
              className="relative h-[250px] w-full rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={card.image}
                alt={`Card ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center p-4 text-center">
                <p className="text-lg font-semibold text-white">{card.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div className="relative h-[520px] w-full rounded-lg shadow-lg overflow-hidden">
          <img
            src={cards[3].image}
            alt="Card 4"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center p-4 text-center">
            <p className="text-lg font-semibold text-white">{cards[3].text}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs;
