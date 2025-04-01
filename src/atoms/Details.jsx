import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Details = () => {
  const [formData, setFormData] = useState({
    name: "", surname: "", email: "", phone: "", message: "", terms: false, payment: "", hours: 1
  });
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = () => {
    console.log("Booking Submitted", formData);
    setShowPopup(true);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center p-4 bg-white mt-32 w-full">
      <div className="w-full lg:w-1/2 p-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative w-full"
        >
          <img 
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/095/583/original/tennis.png?1693738260" 
            alt="Tennis Court" 
            className="w-full rounded-lg" 
          />
          <div className="absolute top-4 left-4 text-white text-xl font-bold">Neon Science City</div>
        </motion.div>
      </div>
      <div className="w-full lg:w-1/2 p-4">
        <h2 className="text-xl font-bold mb-4">Your Details:</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="Name *" className="p-2 border rounded" />
          <input type="text" placeholder="Surname *" className="p-2 border rounded" />
          <input type="email" placeholder="Email *" className="p-2 border rounded col-span-2" />
          <input type="text" placeholder="Phone *" className="p-2 border rounded col-span-2" />
          <textarea placeholder="Message" className="p-2 border rounded col-span-2"></textarea>
        </div>
        
        <h2 className="text-xl font-bold mt-6">Choose Hours:</h2>
        <select className="p-2 border rounded w-full mt-2" onChange={(e) => setFormData({ ...formData, hours: e.target.value })}>
          <option value="1">1 Hour - ₹500</option>
          <option value="2">2 Hours - ₹1000</option>
          <option value="3">3 Hours - ₹1500</option>
          <option value="4">4 Hours - ₹2000</option>
        </select>
        
        <h2 className="text-xl font-bold mt-6">Choose Payment Method:</h2>
        <select className="p-2 border rounded w-full mt-2" onChange={(e) => setFormData({ ...formData, payment: e.target.value })}>
          <option value="credit">Credit Card</option>
          <option value="paypal">PayPal</option>
          <option value="upi">UPI</option>
          <option value="cod">Cash</option>
        </select>
        
        <div className="col-span-2 flex items-center gap-2 mt-4">
          <input type="checkbox" className="w-4 h-4" />
          <span>Terms and Conditions</span>
        </div>
        
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="mt-6 mx-auto flex py-2 px-16 bg text-lg font-bold rounded-lg border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
          onClick={handleSubmit}
        >
          SUBMIT
        </motion.button>

        {showPopup && (
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white p-4 rounded-lg shadow-lg flex flex-col items-center">
            <p className="text-lg font-bold">Your Booking has been submitted successfully!</p>
            <div className="flex gap-4 mt-6 py-4">
              <Link to="/">
                <button 
                  className="px-6 py-2  bg-white text-green-500 border border-green-500 rounded" 
                  onClick={() => console.log("Redirecting to Home")}
                >
                  OK
                </button>
              </Link>
              <button 
                className="px-4 py-2 bg-red-500 text-white rounded" 
                onClick={() => {
                  console.log("Stayed on the same page");
                  setShowPopup(false);
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Details;