import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Search, List } from "lucide-react";

const EventSection = () => {
    const [view, setView] = useState("list");
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        // Scroll to top when component is mounted
        window.scrollTo(0, 0);
    }, []);

    const events = [
        {
            title: "Fusion Tennis Tournament",
            dateRange: "April 10, 2025 - April 12, 2025",
            location: "Ahmedabad, India",
            image: "https://t3.ftcdn.net/jpg/04/33/02/54/240_F_433025468_3oXWvUtCbkzCFHFUWPPzX8Gc5NhptZLn.jpg",
            path: "/tennis-tournament"
        },
        {
            title: "Fusion Badminton Championship",
            dateRange: "May 5, 2025 - May 6, 2025",
            location: "Ahmedabad, India",
            image: "https://t3.ftcdn.net/jpg/06/82/21/52/240_F_682215257_AWtI5ehenUoCz2fBVMB3LzqQC5wigzTC.jpg",
            path: "/badminton-championship"
        },
        {
            title: "Fusion Football Contest | Season 10",
            dateRange: "December 15, 2023 - December 25, 2023",
            location: "Ahmedabad, India",
            image: "https://as2.ftcdn.net/v2/jpg/05/05/87/33/1000_F_505873359_8zRswl8kV21KamvyD0H3I6DPZ350je17.jpg",
            path: "/football-contest"
        },
        {
            title: "Fusion Cricket League | Season 13",
            dateRange: "October 2, 2023 - October 7, 2023",
            location: "Ahmedabad, India",
            image: "https://t4.ftcdn.net/jpg/03/76/86/03/240_F_376860318_3aq5bX5EDVM7hMoHxmDaGS4qbTe4vV9o.jpg",
            path: "/cricket-league"
        }
    ];

    const filteredEvents = events.filter(event =>
        event.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="relative w-full bg-gray-50 min-h-screen">
            <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                        Our Events
                    </h1>
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-4 flex-wrap">
                    <div className="relative flex-1 min-w-[200px]">
                        <Search className="absolute left-3 top-3 text-gray-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search for events"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full rounded-md border border-gray-300 p-2 pl-10 text-sm shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                        />
                    </div>

                    <div className="flex gap-4">
                        <button className="px-4 py-2 rounded-md bg-blue-500 text-white flex items-center gap-2">
                            <List size={16} /> List
                        </button>
                    </div>
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredEvents.length > 0 ? (
                        filteredEvents.map((event, index) => (
                            <Link
                                key={index}
                                to={event.path}
                                className="flex flex-col bg-white rounded-lg shadow-md hover:shadow-xl transition p-4"
                            >
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="w-full h-40 object-cover rounded-md mb-4"
                                />
                                <h3 className="text-lg font-semibold">{event.title}</h3>
                                <p className="text-sm text-gray-600">{event.dateRange}</p>
                                <p className="text-sm text-gray-500">📍 {event.location}</p>
                            </Link>
                        ))
                    ) : (
                        <p className="text-center text-gray-500 col-span-3">No events found.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default EventSection;
