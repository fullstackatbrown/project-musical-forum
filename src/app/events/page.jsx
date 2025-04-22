'use client'
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Navbar from "@/components/Navbar";
import { navItems } from "@/data/navItems";

const eventsData = [
  {
    id: 1,
    name: "Jesus Christ Superstar Spring 2024",
    credit: "pc: Wells Bussey '26",
    image: "https://brownmusicalforum.weebly.com/uploads/1/2/7/5/127563613/chris-karli-2.jpeg",
  },
  {
    id: 2,
    name: "Little Shop of Horrors Fall 2023",
    credit: "pc: Jake Srebnick '25, others",
    image: "https://brownmusicalforum.weebly.com/uploads/1/2/7/5/127563613/315a6410.jpeg",
  },
  {
    id: 3,
    name: "Spring Awakening Spring 2023",
    credit: "pc: Dori Walker '24",
    image: "https://brownmusicalforum.weebly.com/uploads/1/2/7/5/127563613/img-1303.jpeg",
  },
];

const fakeEvents = [
  { day: 5, time: "5:00 PM" },
  { day: 7, time: "7:30 PM" },
  { day: 12, time: "5:00 PM" },
  { day: 14, time: "7:30 PM" },
  { day: 19, time: "5:00 PM" },
];

export default function EventsPage() {
  const [currentMonth, setCurrentMonth] = useState("March");
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(eventsData[0]);

  const months = ["February", "March", "April"];
  const daysInMonth = 31;

  return (
    <div className="bg-black text-white pt-20">
      <Navbar navItems={navItems} />
      {/* Featured Events */}
      <section className="relative overflow-hidden flex flex-col items-center bg-black py-16">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-20 -20 140 140"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full pointer-events-none -z-10"
        >
          <defs>
            <linearGradient id="eventsGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="42.61%" stopColor="#E8C4E5" />
              <stop offset="97.66%" stopColor="#CD82BB" />
            </linearGradient>
            <filter id="blur2" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="0.5" />
            </filter>
          </defs>
          <polygon
            points="0,100 100,100 50,0"
            fill="url(#eventsGradient)"
            filter="url(#blur2)"
          />
        </svg>
        <h2 className="text-4xl font-bold text-center mb-6">FEATURED EVENTS</h2>
        <div className="w-full max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 mt-6">
  {eventsData.map((event) => (
    <button
      key={event.id}
      onClick={() => setSelectedEvent(event)}
      className={`flex flex-col items-center transition-shadow hover:shadow-lg${selectedEvent.id === event.id ? " ring-2 ring-purple-600" : ""}`}
    >
      <div className="w-full h-80 bg-gray-300 rounded-md overflow-hidden">
        <img src={event.image} alt={event.name} className="w-full h-full object-cover" />
      </div>
      <p className="mt-2 text-center font-semibold">{event.name}</p>
      <p className="text-sm italic text-gray-300">{event.credit}</p>
    </button>
  ))}
</div>
        </div>
        <p className="text-center mt-8 px-10 max-w-2xl leading-relaxed">
          Since then, we have produced over 50 full-length musicals and supported hundreds of student theatre artists.
          For over 30 years, Musical Forum has allowed professional-quality musical theatre produced by students for students to thrive on Brown's campus.
        </p>
      </section>

      {/* Tickets Calendar */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-center mb-8">TICKETS</h2>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Event Info */}
            <div className="col-span-1">
              <div className="w-full h-64 bg-gray-300 rounded-md overflow-hidden">
                <img src={selectedEvent.image} alt={selectedEvent.name} className="w-full h-full object-cover" />
              </div>
              <p className="mt-2 text-center font-semibold">{selectedEvent.name}</p>
              <p className="text-sm italic text-gray-400">{selectedEvent.credit}</p>
            </div>

            {/* Month Selector & Calendar */}
            <div className="col-span-1 lg:col-span-3">
              {/* Month Tabs */}
              <div className="flex justify-start lg:justify-center space-x-6 mb-6">
                {months.map((m) => (
                  <button
                    key={m}
                    onClick={() => {
                      setCurrentMonth(m);
                      setSelectedDay(null);
                    }}
                    className={`px-3 py-1 text-lg rounded-md transition ${
                      m === currentMonth
                        ? "font-bold bg-purple-600 text-white shadow-md"
                        : "opacity-60 hover:opacity-100"
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>

              {/* Day Labels */}
              <div className="grid grid-cols-7 gap-1 text-center mb-2 font-semibold text-sm select-none">
                {["M", "T", "W", "Th", "F", "St", "S"].map((d) => (
                  <div key={d}>{d}</div>
                ))}
              </div>

              {/* Dates Grid */}
              <div className="grid grid-cols-7 gap-1 text-sm">
                {Array.from({ length: daysInMonth }, (_, idx) => {
                  const day = idx + 1;
                  const event = fakeEvents.find((e) => e.day === day);
                  const isSelected = day === selectedDay;
                  return (
                    <button
                      key={day}
                      onClick={() => setSelectedDay(day)}
                      className={`h-20 border rounded-md relative flex flex-col justify-between px-1 py-1 focus:outline-none transition ${
                        isSelected
                          ? "bg-purple-700 border-purple-500"
                          : "border-white hover:bg-purple-900/50"
                      }`}
                      aria-pressed={isSelected}
                    >
                      <div className="text-xs font-semibold text-left">{day}</div>
                      {event && (
                        <div className="flex flex-col items-center text-xs">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mb-1"></span>
                          <span>{event.time}</span>
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              {selectedDay && (
                <div className="mt-6 border-t border-white pt-4 max-w-3xl mx-auto text-center">
                  <h3 className="text-xl font-bold mb-2">Events on {currentMonth} {selectedDay}</h3>
                  <ul className="list-disc list-inside space-y-1 text-left mx-auto inline-block">
                    {fakeEvents.filter(e => e.day === selectedDay).length > 0 ? (
                      fakeEvents
                        .filter(e => e.day === selectedDay)
                        .map((e, i) => (
                          <>
                          <li key={i}>{e.time}: Spring Musical!</li>
                          <a href="#" className="text-purple-500 hover:underline">
                            Buy Tickets
                          </a>
                          </>
                        ))
                    ) : (
                      <li>No events scheduled.</li>
                    )}
                  </ul>
                  <button
                    onClick={() => setSelectedDay(null)}
                    className="mt-3 text-sm text-purple-500 hover:underline"
                  >
                    Hide details
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
