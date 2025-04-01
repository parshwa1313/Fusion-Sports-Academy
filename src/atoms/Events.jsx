import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Search, Calendar, List } from "lucide-react";

const EventSection = () => {
    const [view, setView] = useState("list");
    const [searchQuery, setSearchQuery] = useState("");
    const [month, setMonth] = useState(new Date().getMonth());
    const [year, setYear] = useState(new Date().getFullYear());
    const [selectedDate, setSelectedDate] = useState(null);

    const months = [
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ];

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const today = new Date().getDate();

    const events = [
        { title: "Fusion Tennis Tournament",
             dateRange: "April 10, 2025 - April 12, 2025",
              location: "Ahmedabad, India",
               image: "https://sdmntprwestus.oaiusercontent.com/files/00000000-3aa0-5230-8f1c-790cb16450fc/raw?se=2025-04-01T07%3A19%3A06Z&sp=r&sv=2024-08-04&sr=b&scid=fb499802-33fc-5c8e-8e9f-b21204b33528&skoid=4ae7b564-2531-470e-8ddb-6913f4bee2ee&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-03-31T11%3A31%3A28Z&ske=2025-04-01T11%3A31%3A28Z&sks=b&skv=2024-08-04&sig=Iot4OKp0P7STqLxpC7vjfenA48LWCbyoC8fmsFLGHXk%3D", 
               path: "/tennis-tournament" },
        { title: "Fusion Badminton Championship",
             dateRange: "May 5, 2025 - May 6, 2025", 
             location: "Ahmedabad, India", 
             image: "https://sdmntprwestus.oaiusercontent.com/files/00000000-e01c-5230-9aa1-2c8f32796751/raw?se=2025-04-01T07%3A29%3A25Z&sp=r&sv=2024-08-04&sr=b&scid=b5f1cff5-6a4f-5714-8a30-a56eb056c676&skoid=4ae7b564-2531-470e-8ddb-6913f4bee2ee&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-03-31T22%3A20%3A14Z&ske=2025-04-01T22%3A20%3A14Z&sks=b&skv=2024-08-04&sig=YrYqv3HIDJvUB/gkDLMTeiwesI0NE6oautkv7YcJATc%3D",
              path: "/badminton-championship" },
        {
            title: "Fusion Football Contest | Season 10",
            dateRange: "December 15, 2023 - December 25, 2023",
            location: "Ahmedabad, India",
            image: "https://files.oaiusercontent.com/file-UkHZHqYXxWuBBbptuXPdig?se=2025-03-21T07%3A57%3A53Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D501fd562-f5e0-4f51-865e-ae4be9774ed7.webp&sig=mE9/XvdvsNPIsIRYSUI9cn7K6RFT9l12NhAH3%2Bly3k4%3D",
            path: "/football-contest"
        },
        {
            title: "Fusion Cricket League | Season 13",
            dateRange: "October 2, 2023 - October 7, 2023",
            location: "Ahmedabad, India",
            image: "https://sdmntprwestus.oaiusercontent.com/files/00000000-8b4c-5230-ab3c-f36138063055/raw?se=2025-04-01T07%3A23%3A44Z&sp=r&sv=2024-08-04&sr=b&scid=5dc45def-86b1-59de-96c7-d92313c5c227&skoid=4ae7b564-2531-470e-8ddb-6913f4bee2ee&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-01T01%3A14%3A05Z&ske=2025-04-02T01%3A14%3A05Z&sks=b&skv=2024-08-04&sig=X/UUS5HnbxrIAnneWhrR6PmUqCART6DaWTBRH77QqmA%3D",
            path: "/cricket-league"
        },
    ];

    const filteredEvents = events.filter(event =>
        event.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleDateClick = (day) => {
        setSelectedDate(day);
    };

    return (
        <div className="relative w-full">
            <div className="relative h-96 w-full bg-[url('https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center">
                <div className="absolute inset-0 bg-black/40">
                    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="absolute inset-0 flex items-center justify-center">
                        <h1 className="text-white text-5xl font-bold">Our Events</h1>
                    </motion.div>
                </div>
            </div>


            <div className="relative mx-auto mt-6 max-w-4xl p-4">
                <div className="flex items-center gap-2">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-3 text-gray-400" size={18} />
                        <input type="text" placeholder="Search for events" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full rounded-md border border-gray-300 p-2 pl-10 text-sm shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200" />
                    </div>
                </div>

                <div className="mt-4 flex items-center gap-4 border-b pb-2">
                    <button className={`flex items-center gap-2 px-4 py-1 ${view === "list" ? "border-b-2 border-black font-bold" : "text-gray-500"}`} onClick={() => setView("list")}>
                        <List size={16} /> List
                    </button>
                    <button className={`flex items-center gap-2 px-4 py-1 ${view === "month" ? "border-b-2 border-black font-bold" : "text-gray-500"}`} onClick={() => setView("month")}>
                        <Calendar size={16} /> Month
                    </button>
                </div>
            </div>

            {view === "list" && (
                <div className="mx-auto max-w-4xl py-6">
                    <h2 className="text-2xl font-bold mb-4">Events</h2>
                    {filteredEvents.length > 0 ? (
                        filteredEvents.map((event, index) => (
                            <Link key={index} to={event.path} className="border-b py-4 flex gap-4 items-center hover:bg-gray-100 transition">
                                <img src={event.image} alt={event.title} className="w-24 h-24 object-cover rounded-md" />
                                <div>
                                    <h3 className="text-lg font-semibold">{event.title}</h3>
                                    <p className="text-sm text-gray-600">{event.dateRange}</p>
                                    <p className="text-sm text-gray-500">📍 {event.location}</p>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <p className="text-center text-gray-500">No events found.</p>
                    )}
                </div>
            )}

            {view === "month" && (
                <div className="mx-auto max-w-4xl py-6">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-2xl font-bold">{months[month]} {year}</h2>
                        <select className="p-2 border rounded-md" value={month} onChange={(e) => setMonth(parseInt(e.target.value))}>
                            {months.map((m, index) => (
                                <option key={index} value={index}>{m}</option>
                            ))}
                        </select>
                    </div>

                    <div className="grid grid-cols-7 text-center font-bold mb-2">
                        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                            <div key={day} className="p-2">{day}</div>
                        ))}
                    </div>

                    <div className="grid grid-cols-7 gap-2 border p-4 bg-white rounded-md" style={{ height: "400px" }}>
                        {Array(firstDay).fill(null).map((_, index) => (
                            <div key={"empty-" + index} className="p-4"></div>
                        ))}
                        {[...Array(daysInMonth)].map((_, day) => (
                            <button key={day} className={`p-4 text-center rounded-md border-2 transition-all ${day + 1 < today && month === new Date().getMonth() ? "bg-gray-300 cursor-not-allowed border-transparent" : `bg-blue-500 text-white hover:bg-blue-600 ${selectedDate === day + 1 ? "border-black" : "border-transparent"}`}`} disabled={day + 1 < today && month === new Date().getMonth()} onClick={() => handleDateClick(day + 1)}>
                                {day + 1}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default EventSection;