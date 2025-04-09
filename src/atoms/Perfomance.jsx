import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const sportsData = {
  title: "ESE School Tennis & Badminton Program",
  description:
    "The School Tennis & Badminton Program (STBP) is a key initiative promoting these sports across the UAE. Encouraging young talent, the program is embraced nationwide, with thousands of students honing their skills weekly. In 2023, over 60,000 students across 150 schools participated in regular training and competitions.",
  stats: [
    { value: "160+", label: "Trainees" },
    { value: "50+", label: "Tennis & Badminton Coaches" },
    { value: "15+", label: "Competitions / Year" },
    { value: "10+", label: "Schools" },
  ],
};

export default function Foundation() {
  const navigate = useNavigate();

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    playingTime: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!formData.email) newErrors.email = "Email is required";
    else if (!emailPattern.test(formData.email))
      newErrors.email = "Enter a valid email";
    const phonePattern = /^[0-9]{10}$/;
    if (!formData.phone) newErrors.phone = "Phone number is required";
    else if (!phonePattern.test(formData.phone))
      newErrors.phone = "Enter a valid phone number";
    if (!formData.age) newErrors.age = "Please select your age";
    if (!formData.gender) newErrors.gender = "Please select your gender";
    if (!formData.playingTime)
      newErrors.playingTime = "Please select your playing time";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully!");
      setFormData({
        name: '',
        email: '',
        phone: '',
        age: '',
        gender: '',
        playingTime: '',
      });
      setErrors({});
    }
  };

  return (
    <div
      className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage:
          "url('https://plus.unsplash.com/premium_photo-1679917506585-2c7b89054610?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative w-full max-w-7xl px-6 sm:px-12 lg:px-20 py-8 space-y-12">
        {/* Header with Back Arrow */}
        <h2
          className="text-4xl font-bold text-center text-yellow-400 mt-16 flex items-center gap-2 cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <div className="icon-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-yellow-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </div>
          <div className="text-container text-center flex items-center mx-auto">
            High Perfomance Program
          </div>
        </h2>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
          {/* Registration Form */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md mx-auto"
          >
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
              REGISTER NOW
            </h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                {errors.name && (
                  <span className="text-red-500 text-sm">{errors.name}</span>
                )}
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email ID"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                {errors.email && (
                  <span className="text-red-500 text-sm">{errors.email}</span>
                )}
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                {errors.phone && (
                  <span className="text-red-500 text-sm">{errors.phone}</span>
                )}
              </div>

              <div>
                <select
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="">Choose your age</option>
                  <option value="10-18">10-18</option>
                  <option value="19-30">19-30</option>
                  <option value="30+">30-40</option>
                </select>
                {errors.age && (
                  <span className="text-red-500 text-sm">{errors.age}</span>
                )}
              </div>

              <div className="flex gap-4 items-center">
                <span>Gender:</span>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={formData.gender === "male"}
                    onChange={handleInputChange}
                  />{" "}
                  Male
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={formData.gender === "female"}
                    onChange={handleInputChange}
                  />{" "}
                  Female
                </label>
              </div>
              {errors.gender && (
                <span className="text-red-500 text-sm">{errors.gender}</span>
              )}

              <div className="flex gap-4 items-center">
                <span>Playing Time:</span>
                <label>
                  <input
                    type="radio"
                    name="playingTime"
                    value="morning"
                    checked={formData.playingTime === "morning"}
                    onChange={handleInputChange}
                  />{" "}
                  Morning
                </label>
                <label>
                  <input
                    type="radio"
                    name="playingTime"
                    value="evening"
                    checked={formData.playingTime === "evening"}
                    onChange={handleInputChange}
                  />{" "}
                  Evening
                </label>
              </div>
              {errors.playingTime && (
                <span className="text-red-500 text-sm">
                  {errors.playingTime}
                </span>
              )}

              <motion.button
                type="submit"
                className="w-full bg-green-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-600 transition-transform"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                SUBMIT
              </motion.button>
            </form>
          </motion.div>

          {/* Image Section */}
          <div className="grid grid-cols-2 mt-8 gap-4 w-full max-w-2xl mx-auto">
            {[
              "https://plus.unsplash.com/premium_photo-1661890079209-72b76e49768f?q=80&w=1610&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "https://images.unsplash.com/photo-1630270395856-9c85ab98a75c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "https://images.unsplash.com/photo-1525088068454-ff2c453e50e9?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "https://images.unsplash.com/photo-1588795863192-962c7e866de0?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            ].map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Image ${index + 1}`}
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            ))}
          </div>
        </div>

        {/* Program Details */}
        <div className="text-center text-white mt-12">
          <h2 className="text-4xl font-bold mb-4 text-yellow-400">
            Program Details
          </h2>
          <p className="text-2xl text-yellow-400">(FOR BEGINNER)</p>
          <ul className="text-xl mt-4 space-y-2 text-yellow-400">
            <li>✔ Foundations for Future Champions</li>
            <li>✔ Beginner's Path to Success</li>
            <li>✔ Building Skills, Igniting Passion</li>
            <li>✔ Nurturing Young Sporting Talent</li>
          </ul>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center mt-8 text-white">
          {sportsData.stats.map((stat, index) => (
            <div key={index}>
              <div className="text-3xl font-bold text-yellow-500">
                {stat.value}
              </div>
              <div className="text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
