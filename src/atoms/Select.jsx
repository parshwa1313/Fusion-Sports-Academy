import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SelectSession = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("9:00 am");
  const [players, setPlayers] = useState(1);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const times = ["9:00 am", "10:00 am", "11:00 am", "12:00 pm", "1:00 pm", "2:00 pm", "3:00 pm", "4:00 pm"];

  const getDaysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();

  const handleMonthChange = (direction) => {
    const newDate = new Date(currentYear, currentMonth + direction, 1);
    setCurrentMonth(newDate.getMonth());
    setCurrentYear(newDate.getFullYear());
  };

  return (
    <div className="flex flex-col items-center p-4 bg-white w-full mt-10 md:mt-20">
      <div className="w-full p-4 max-w-6xl mx-auto">
        {/* Grid Layout for Image and Calendar */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-8">
          {/* Image Section with Players Selection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative w-full h-60 md:h-96 rounded-lg overflow-hidden"
          >
            <img
              src="https://img.freepik.com/premium-photo/tennis-racket-tennis-ball-court-with-ball_1315312-98714.jpg"
              alt="Tennis Court"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-between p-4">
              <div className="text-white text-xl font-bold text-center">Fusion Science City</div>

              {/* Players Selection Inside Image */}
              <div className="p-4 rounded-lg flex flex-col items-center w-4/5 mx-auto">
                <span className="font-semibold bg-white text-black px-3 py-1 rounded-lg">PLAYERS</span>
                <div className="flex items-center gap-3 mt-2">
                  <button
                    onClick={() => setPlayers(Math.max(1, players - 1))}
                    className="px-4 py-2 bg-gray-300 rounded-lg text-lg font-bold"
                  >
                    -
                  </button>
                  <span className="text-lg font-bold bg-gray-300 text-black px-3.5 py-1.5 rounded-lg">
                    {players}
                  </span>
                  <button
                    onClick={() => setPlayers(players + 1)}
                    className="px-4 py-2 bg-gray-300 rounded-lg text-lg font-bold"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Live Calendar with Month Selector */}
          <div className="bg-green-600 text-white p-4 rounded-lg w-full">
            <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
              <button
                onClick={() => handleMonthChange(-1)}
                className="px-3 py-1 bg-white text-green-600 rounded-md"
              >
                Prev
              </button>
              <h2 className="text-lg font-bold text-center w-full md:w-auto">
                {new Date(currentYear, currentMonth).toLocaleString("default", { month: "long" })} {currentYear}
              </h2>
              <button
                onClick={() => handleMonthChange(1)}
                className="px-3 py-1 bg-white text-green-600 rounded-md"
              >
                Next
              </button>
            </div>

            <div className="grid grid-cols-7 gap-2 mt-2">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div key={day} className="text-center font-semibold text-sm md:text-base">{day}</div>
              ))}

              {[...Array(new Date(currentYear, currentMonth, 1).getDay())].map((_, index) => (
                <div key={`empty-${index}`}></div>
              ))}

              {Array.from({ length: getDaysInMonth(currentMonth, currentYear) }).map((_, i) => {
                const day = i + 1;
                return (
                  <button
                    key={day}
                    onClick={() => setSelectedDate(new Date(currentYear, currentMonth, day))}
                    className={`p-2 rounded-md text-sm md:text-base ${
                      selectedDate.getDate() === day &&
                      selectedDate.getMonth() === currentMonth &&
                      selectedDate.getFullYear() === currentYear
                        ? "bg-white text-green-600"
                        : "bg-green-700 text-white"
                    }`}
                  >
                    {day}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Time Selection */}
        <div className="mt-4 flex flex-wrap justify-center gap-2 w-full">
          <h3 className="font-semibold w-full text-center text-xl">Time:</h3>
          <div className="flex flex-wrap justify-center gap-2 w-full">
            {times.map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`px-3 py-2 rounded-lg text-sm md:text-base ${
                  selectedTime === time ? "bg-black text-white" : "bg-gray-200"
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        {/* Booking Button */}
        <Link to="/details">
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="mt-6 items-center flex justify-center mx-auto w-40 px-4 py-2 bg-white text-green-600 text-lg font-bold rounded-lg border-2 border-green-600 hover:bg-green-600 hover:text-white"
          >
            BOOK NOW
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default SelectSession;
