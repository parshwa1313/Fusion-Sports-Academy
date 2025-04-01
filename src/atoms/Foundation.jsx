import { motion } from 'framer-motion';
import { useState } from 'react';

const sportsData = {
  title: "ESE School Tennis & Badminton Program",
  description: "The School Tennis & Badminton Program (STBP) is a key initiative promoting these sports across the UAE. Encouraging young talent, the program is embraced nationwide, with thousands of students honing their skills weekly. In 2023, over 60,000 students across 150 schools participated in regular training and competitions.",
  stats: [
    { value: "160+", label: "Trainees" },
    { value: "50+", label: "Tennis & Badminton Coaches" },
    { value: "15+", label: "Competitions / Year" },
    { value: "10+", label: "Schools" }
  ]
};

export default function Foundation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    gender: '',
    playingTime: ''
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    // Name validation
    if (!formData.name) newErrors.name = 'Name is required';
    // Email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!emailPattern.test(formData.email)) newErrors.email = 'Enter a valid email';
    // Phone validation (basic format check)
    const phonePattern = /^[0-9]{10}$/;
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    else if (!phonePattern.test(formData.phone)) newErrors.phone = 'Enter a valid phone number';
    // Age validation
    if (!formData.age) newErrors.age = 'Please select your age';
    // Gender validation
    if (!formData.gender) newErrors.gender = 'Please select your gender';
    // Playing time validation
    if (!formData.playingTime) newErrors.playingTime = 'Please select your playing time';

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0; // If there are no errors, return true
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data before validation:", formData); // Log form data before validation
    if (validateForm()) {
      // Proceed with form submission logic, e.g., API call or other actions
      console.log("Form submitted successfully:", formData); // Log form data if validation passes
      alert('Form submitted successfully!');
    } else {
      console.log("Form validation errors:", errors); // Log errors if validation fails
    }
  };

  return (
    <div
      className="relative w-screen min-h-[85rem] flex items-center justify-center bg-cover bg-center snap-start overflow-auto mt-16"
      style={{
        backgroundImage:
          "url('https://plus.unsplash.com/premium_photo-1666913667082-c1fecc45275d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="absolute inset-0 bg-black/50 "></div>
      <div className="absolute flex flex-col items-center w-full max-w-7xl px-4 gap-8 ">
        <h2 className="text-4xl font-bold mt-8 text-yellow-400">Foundation Development Program</h2>
        <div className="flex flex-col md:flex-row items-start w-full gap-12 mb-12">
          {/* Registration Form */}
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }} 
            className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-xl"
          >
            <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
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
                {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
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
                {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
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
                {errors.phone && <span className="text-red-500 text-sm">{errors.phone}</span>}
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
                {errors.age && <span className="text-red-500 text-sm">{errors.age}</span>}
              </div>

              <div className="flex gap-4">
                <span>Gender:</span>
                <label><input type="radio" name="gender" value="male" checked={formData.gender === 'male'} onChange={handleInputChange} /> Male</label>
                <label><input type="radio" name="gender" value="female" checked={formData.gender === 'female'} onChange={handleInputChange} /> Female</label>
              </div>
              {errors.gender && <span className="text-red-500 text-sm">{errors.gender}</span>}

              <div className="flex gap-4">
                <span>Playing Time:</span>
                <label><input type="radio" name="playingTime" value="morning" checked={formData.playingTime === 'morning'} onChange={handleInputChange} /> Morning</label>
                <label><input type="radio" name="playingTime" value="evening" checked={formData.playingTime === 'evening'} onChange={handleInputChange} /> Evening</label>
              </div>
              {errors.playingTime && <span className="text-red-500 text-sm">{errors.playingTime}</span>}

              <motion.button 
                type="submit" 
                className="w-full bg-green-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                SUBMIT
              </motion.button>
            </form>
          </motion.div>

          {/* Images Section */}
          <div className="grid grid-cols-2 gap-6 mt-6">
            <img src="https://as2.ftcdn.net/v2/jpg/01/57/41/25/1000_F_157412598_F0tYp2wFHLqYVwR40s4pSTX9EZwzPqNV.jpg" alt="Tennis" className="rounded-lg shadow-lg h-56" />
            <img src="https://cdn.pixabay.com/photo/2021/05/07/16/12/pandemic-6236577_1280.jpg" alt="Badminton" className="rounded-lg shadow-lg h-56" />
            <img src="https://as1.ftcdn.net/v2/jpg/03/19/66/72/1000_F_319667211_k0owduhaXLVHsSdync5FebwqYvicVBh5.jpg" alt="Training" className="rounded-lg shadow-lg h-56" />
            <img src="https://as2.ftcdn.net/v2/jpg/06/79/45/87/1000_F_679458724_7FAuh3Tvf7DDQ5jZp0d46kuB6mzq7VxF.jpg" alt="Sports" className="rounded-lg shadow-lg h-56" />
          </div>
        </div>

        {/* Program Details Section */}
        <div className="text-center text-white ">
          <h2 className="text-4xl font-bold mb-6 text-yellow-400">Program Details</h2>
          <p className="text-3xl font-bold text-yellow-400 mb-4">12 Months</p>
          <p className="text-xl text-yellow-400">(FOR BEGINNER)</p>
          <ul className="mt-4 text-2xl font-serif text-yellow-400">
            <li>✔ Foundations for Future Champions</li>
            <li>✔ Beginner's Path to Success</li>
            <li>✔ Building Skills, Igniting Passion</li>
            <li>✔ Nurturing Young Sporting Talent</li>
            <li>✔ Passion, Practice, Performance</li>
            <li>✔ Cultivating Champions from the Ground Up</li>
            <li>✔ Inspiring the Next Generation of Winners</li>
            <li>✔ Where Talent Meets Opportunity</li>
            <li>✔ Coaching, Competing, Conquering</li>
          </ul>
        </div>

        {/* Stats Section */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
          {sportsData.stats.map((stat, index) => (
            <div key={index}>
              <div className="text-3xl font-bold text-yellow-500">{stat.value}</div>
              <div className="text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
