import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Dialog } from "@headlessui/react";
import { Link } from "react-router-dom";

const trainers = [
  {
    name: "Anantha Krishnan",
    specialty: "Fitness Coach",
    location: "Bangalore, India",
    age: 32,
    role: "Personal Trainer",
    contact: "+91 9876543210",
    image:
      "https://media.istockphoto.com/id/2166986800/photo/a-happy-sportswoman-is-doing-russian-twist-with-kettle-bell-in-a-gym-and-her-trainer-is.jpg?s=612x612&w=0&k=20&c=xnicshyi7GC1Ed-LCkdJIZdqk4TGZ9i1hgLojERsWVA=",
    rating: "4.9/5",
  },
  {
    name: "Arjun Das",
    specialty: "Fitness Coach",
    location: "Chennai, India",
    age: 35,
    role: "Head Fitness Coach",
    contact: "+91 8765432109",
    image:
      "https://img.freepik.com/premium-photo/portrait-personal-trainer-sportswear-fitness-center-gym_109710-1637.jpg",
    rating: "4.8/5",
  },
  {
    name: "Vineeth K S",
    specialty: "Fitness Coach",
    location: "Kochi, India",
    age: 29,
    role: "Youth Team Coach",
    contact: "+91 9988776655",
    image:
      "https://media.istockphoto.com/id/1270378722/photo/personal-trainer-to-practice-sit-ups-in-the-gym.jpg?s=612x612&w=0&k=20&c=GZtSrU6CX-lTaFHqbvKSfQ-yvY4ftTgvd_XIG1q7_YQ=",
    rating: "4.7/5",
  },
  {
    name: "Diya Mary Mathew",
    specialty: "Fitness Coach",
    location: "Trivandrum, India",
    age: 28,
    role: "Women’s Fitness Specialist",
    contact: "+91 9090909090",
    image:
      "https://media.istockphoto.com/id/856797530/photo/portrait-of-a-beautiful-woman-at-the-gym.jpg?s=612x612&w=0&k=20&c=0wMa1MYxt6HHamjd66d5__XGAKbJFDFQyu9LCloRsYU=",
    rating: "4.9/5",
  },
  {
    name: "Neel Gunde",
    specialty: "Athletics Coach",
    location: "Hyderabad, India",
    age: 34,
    role: "Track & Field Expert",
    contact: "+91 9123456789",
    image:
      "https://media.istockphoto.com/id/1849345050/photo/personal-instructor-and-athletic-woman-going-through-exercise-plans-in-a-gym.jpg?s=612x612&w=0&k=20&c=iGI2Se15zweVTHt31ENGqeXJlGcagS_XUqMhB_g8mvU=",
    rating: "4.6/5",
  },
  {
    name: "Anand T",
    specialty: "Fitness Coach",
    location: "Coimbatore, India",
    age: 31,
    role: "Senior Fitness Trainer",
    contact: "+91 9988001122",
    image:
      "https://media.istockphoto.com/id/1084251084/photo/personal-weight-training-in-the-gym.jpg?s=612x612&w=0&k=20&c=aGunGKHwpa4LUpOoqcBTuhDz2MFpfPS0vAJ6jMOF9_w=",
    rating: "4.8/5",
  },
];

export default function TrainerGrid() {
  const [selectedTrainer, setSelectedTrainer] = useState(null);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="relative w-full mx-auto">
      {/* Hero */}
      <div className="relative h-[40vh] md:h-[50vh] lg:h-[60vh] overflow-hidden">
        <img
          src="https://recserv.uiowa.edu/sites/recserv.uiowa.edu/files/styles/ultrawide__1312_x_562/public/2024-10/Personal%20Training_12-2.jpg"
          alt="Trainers"
          className="w-full h-full object-cover"
        />
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 px-4"
        >
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center">Trainers</h1>
        </motion.div>
      </div>

      {/* Grid */}
      <section className="p-4 max-w-6xl mx-auto">
        <Link to="/community">
          <button className="mb-4 px-4 py-2 rounded-lg flex items-center gap-1 ">
            <span className="material-symbols-outlined">arrow_back_ios</span>
          
          </button>
        </Link>
        <h2 className="text-3xl font-bold text-center mb-6">Expert Trainers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {trainers.map((trainer, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <img
                src={trainer.image}
                alt={trainer.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{trainer.name}</h3>
                <p className="text-gray-600 text-sm">{trainer.specialty}</p>
                <p className="text-gray-500 text-sm">{trainer.location}</p>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-yellow-600 font-semibold">💪 {trainer.rating}</p>
                  <button
                    onClick={() => setSelectedTrainer(trainer)}
                    className="text-blue-500 text-md font-semibold underline hover:text-blue-800 transition"
                  >
                    View More
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modal */}
      <Dialog open={!!selectedTrainer} onClose={() => setSelectedTrainer(null)} className="relative z-50">
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <Dialog.Panel className="bg-white max-w-md w-full rounded-xl p-6 space-y-4 shadow-xl relative">
            {/* Close Icon */}
            <button
              className="absolute top-1 right-2 text-xl font-bold text-gray-600 hover:text-black"
              onClick={() => setSelectedTrainer(null)}
            >
              ×
            </button>

            <Dialog.Title className="text-xl font-bold text-center mb-2">
              Trainer Details
            </Dialog.Title>
            {selectedTrainer && (
              <>
                <img
                  src={selectedTrainer.image}
                  alt={selectedTrainer.name}
                  className="rounded-lg w-full h-48 object-cover"
                />
                <div className="text-sm space-y-1">
                  <p><strong>Name:</strong> {selectedTrainer.name}</p>
                  <p><strong>Age:</strong> {selectedTrainer.age}</p>
                  <p><strong>Location:</strong> {selectedTrainer.location}</p>
                  <p><strong>Profession:</strong> {selectedTrainer.specialty}</p>
                  <p><strong>Role:</strong> {selectedTrainer.role}</p>
                  <p><strong>Rating:</strong> {selectedTrainer.rating}</p>
                  <p><strong>Contact:</strong> {selectedTrainer.contact}</p>
                </div>
              </>
            )}
          </Dialog.Panel>
        </div>
      </Dialog>
    </section>
  );
}
