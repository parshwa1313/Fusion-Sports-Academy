import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const BookingComponent = () => {
  const [step, setStep] = useState("select"); // 'select' or 'details'

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // From SelectSession
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("9:00 am");
  const [players, setPlayers] = useState(1);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const times = ["9:00 am", "10:00 am", "11:00 am", "12:00 pm", "1:00 pm", "2:00 pm", "3:00 pm", "4:00 pm"];
  const getDaysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();
  const handleMonthChange = (direction) => {
    const newMonth = currentMonth + direction;
    const newDate = new Date(currentYear, newMonth, 1);
    setCurrentMonth(newDate.getMonth());
    setCurrentYear(newDate.getFullYear());

    if (
      selectedDate.getMonth() !== newDate.getMonth() ||
      selectedDate.getFullYear() !== newDate.getFullYear()
    ) {
      setSelectedDate(newDate);
    }
  };

  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  // From Details
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    message: "",
    terms: false,
    payment: "",
    hours: 1,
    image: "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/095/583/original/tennis.png?1693738260",
    address: "Fusion Science City",
  });

  const [showPopup, setShowPopup] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = "Name is required.";
    if (!formData.surname) formErrors.surname = "Surname is required.";
    if (!formData.email) formErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) formErrors.email = "Email is not valid.";
    if (!formData.phone) formErrors.phone = "Phone number is required.";
    if (!formData.payment) formErrors.payment = "Please select a payment method.";
    if (!formData.terms) formErrors.terms = "You must agree to the terms and conditions.";
    return Object.keys(formErrors).length === 0 ? true : formErrors;
  };

  const handleSubmit = () => {
    const validation = validate();
    if (validation === true) {
      setShowPopup(true);
      window.scrollTo(0, 0); // Scroll to top when popup opens
    } else {
      setErrors(validation);
    }
  };

  const formattedDate = selectedDate.toLocaleDateString();
  const formattedDay = selectedDate.toLocaleString("default", { weekday: "long" });
  const formattedMonth = selectedDate.toLocaleString("default", { month: "long" });

  return (
    <div className="h-screen p-4 md:p-8 lg:p-12 ">
      {step === "select" ? (
        <div className="max-w-5xl mx-auto bg-white p-6 mt-6 min-h-[40rem]">
          <h2 className="text-3xl font-bold text-center text-green-600 mb-4 mt-8">
            Select Your Session
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative w-full h-60 sm:h-80 md:h-full rounded-lg overflow-hidden"
            >
              <img
                src={formData.image}
                alt="Tennis Court"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-between p-4">
                <div className="text-white text-xl font-bold text-center">{formData.address}</div>

                <div className="p-4 bg-white bg-opacity-80 rounded-lg flex flex-col items-center w-4/5 mx-auto">
                  <span className="font-semibold text-green-600 bg-white px-3 py-1 rounded-lg">PLAYERS</span>
                  <div className="flex items-center gap-3 mt-2">
                    <button onClick={() => setPlayers(Math.max(1, players - 1))} className="px-4 py-2 bg-gray-300 rounded-lg text-lg font-bold hover:bg-gray-400">-</button>
                    <span className="text-lg font-bold bg-gray-300 text-black px-3.5 py-1.5 rounded-lg">{players}</span>
                    <button onClick={() => setPlayers(players + 1)} className="px-4 py-2 bg-gray-300 rounded-lg text-lg font-bold hover:bg-gray-400">+</button>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="bg-green-600 text-white p-4 rounded-lg w-full shadow-lg">
              <div className="flex justify-between items-center mb-4  gap-2">
                <button onClick={() => handleMonthChange(-1)} className="px-3 py-1 bg-white text-green-600 rounded-md">Prev</button>
                <h2 className="text-lg font-bold text-center w-full md:w-auto">
                  {formattedMonth} {currentYear}
                </h2>
                <button onClick={() => handleMonthChange(1)} className="px-3 py-1 bg-white text-green-600 rounded-md">Next</button>
              </div>

              {/* Days Grid Rendering */}
<div className="grid grid-cols-7 gap-2 mt-2">
  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
    <div key={day} className="text-center font-semibold text-sm md:text-base">
      {day}
    </div>
  ))}

  {[...Array(firstDayOfMonth)].map((_, index) => (
    <div key={`empty-${index}`}></div>
  ))}

  {Array.from({ length: getDaysInMonth(currentMonth, currentYear) }).map((_, i) => {
    const day = i + 1;
    return (
      <button
        key={day}
        onClick={() => setSelectedDate(new Date(currentYear, currentMonth, day))}
        className={`p-2 rounded-md text-sm md:text-base  ${
          selectedDate.getDate() === day &&
          selectedDate.getMonth() === currentMonth &&
          selectedDate.getFullYear() === currentYear
            ? "bg-white text-green-600"
            : "bg-green-700 text-white hover:bg-green-500"
        }`}
      >
        {day}
      </button>
    );
  })}
</div>

            </div>
          </div>

          <div className="mt-4 flex flex-wrap justify-center gap-3 w-full">
            <h3 className="font-semibold text-xl text-center w-full">Select Time:</h3>
            {times.map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`px-4 py-2 rounded-lg text-sm md:text-base ${
                  selectedTime === time ? "bg-black text-white" : "bg-gray-300 hover:bg-gray-400"
                }`}
              >
                {time}
              </button>
            ))}
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setStep("details")}
            className="mt-4 mx-auto flex items-center text-center w-34 px-4 py-2 bg-green-600 text-white text-lg font-bold rounded-lg shadow-md hover:bg-green-700"
          >
            BOOK NOW
          </motion.button>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row items-center bg-white p-4 w-full mt-14 max-h-[36rem]">
          <div className="w-full lg:w-1/2 p-4">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <img src={formData.image} alt="Tennis Court" className="w-full rounded-lg" />
              <div className="absolute top-4 left-4 text-white text-xl font-bold">
                {formData.address}
              </div>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2 p-4 ">
            <h2 className="text-xl font-bold mb-4">Your Details:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Name *" className="p-2  border-2  rounded" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

              <input type="text" placeholder="Surname *" className="p-2  border-2  rounded" value={formData.surname} onChange={(e) => setFormData({ ...formData, surname: e.target.value })} />
              {errors.surname && <p className="text-red-500 text-sm">{errors.surname}</p>}

              <input type="email" placeholder="Email *" className="p-2  border-2  rounded col-span-2" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

              <input type="text" placeholder="Phone *" className="p-2  border-2  rounded col-span-2" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

              <textarea placeholder="Message" className="p-2  border-2  rounded col-span-2" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
            </div>

            <h2 className="text-xl font-bold mt-6">Choose Hours:</h2>
            <select className="p-2  border-2  rounded w-full mt-2" onChange={(e) => setFormData({ ...formData, hours: e.target.value })}>
              <option value="1">1 Hour - ₹500</option>
              <option value="2">2 Hours - ₹1000</option>
              <option value="3">3 Hours - ₹1500</option>
              <option value="4">4 Hours - ₹2000</option>
            </select>

            <h2 className="text-xl font-bold mt-6">Choose Payment Method:</h2>
            <select className="p-2  border-2  rounded w-full mt-2" onChange={(e) => setFormData({ ...formData, payment: e.target.value })}>
              <option value="">-- Select Payment --</option>
              <option value="credit">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="upi">UPI</option>
              <option value="cash">Cash</option>
            </select>
            {errors.payment && <p className="text-red-500 text-sm">{errors.payment}</p>}

            <div className="col-span-2 flex items-center gap-2 mt-4">
              <input type="checkbox" className="w-4 h-4" checked={formData.terms} onChange={(e) => setFormData({ ...formData, terms: e.target.checked })} />
              <span>Terms and Conditions</span>
            </div>
            {errors.terms && <p className="text-red-500 text-sm">{errors.terms}</p>}

            <motion.button
              whileTap={{ scale: 0.9 }}
              className="mt-6 mx-auto flex py-2 px-16 bg text-lg font-bold rounded-lg border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
              onClick={handleSubmit}
            >
              SUBMIT
            </motion.button>
          </div>

          {showPopup && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white rounded-xl p-6 shadow-lg max-w-lg w-full relative">
                <h2 className="text-2xl font-bold text-center mb-4 text-green-600">
                  Booking Confirmed ✅
                </h2>

                <img src={formData.image} alt="Booking Visual" className="w-full h-48 object-cover rounded mb-4" />

                <div className="text-sm text-gray-800 space-y-2">
                  <p><strong>Name:</strong> {formData.name} {formData.surname}</p>
                  <p><strong>Email:</strong> {formData.email}</p>
                  <p><strong>Phone:</strong> {formData.phone}</p>
                  <p><strong>Message:</strong> {formData.message || "N/A"}</p>
                  <p><strong>Hours:</strong> {formData.hours} {formData.hours > 1 ? "Hours" : "Hour"}</p>
                  <p><strong>Payment Method:</strong> {formData.payment.toUpperCase()}</p>
                  <p><strong>Address:</strong> {formData.address}</p>
                  <p><strong>Selected Time:</strong> {selectedTime}</p>
                  <p><strong>Date:</strong> {formattedDate}</p>
                  <p><strong>Day:</strong> {formattedDay}</p>
                  <p><strong>Month:</strong> {formattedMonth}</p>
                  <p><strong>Players:</strong> {players}</p>
                </div>

                <div className="flex justify-center gap-4 mt-6">
                <Link to="/">
                  <button className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700">
                    OK
                  </button>
                  </Link>

                  <button className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700" onClick={() => setShowPopup(false)}>
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BookingComponent;
