import React, { useEffect, useState } from 'react';
import ICAL from 'ical.js';

const Calendar = () => {
  const [events, setEvents] = useState([]);
  // Replace with your actual iCal URL
  const icalUrl = 'https://example.com/calendar.ics';

  useEffect(() => {
    fetch(icalUrl)
      .then((res) => res.text())
      .then((data) => {
        // Parse the iCal text using ical.js
        const jCalData = ICAL.parse(data);
        const vcalendar = new ICAL.Component(jCalData);
        const vevents = vcalendar.getAllSubcomponents('vevent');

        // Map each event to an object with summary, start, and end dates.
        const parsedEvents = vevents.map((vevent) => {
          const event = new ICAL.Event(vevent);
          return {
            summary: event.summary,
            start: event.startDate.toJSDate(),
            end: event.endDate.toJSDate(),
          };
        });

        setEvents(parsedEvents);
      })
      .catch((err) => console.error('Error fetching iCal:', err));
  }, [icalUrl]);

  // For demo, show the current month
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth(); // 0-indexed
  const monthName = new Date(year, month).toLocaleString('default', {
    month: 'long',
  });

  // Get number of days in the month
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  // Day of week the month starts on (0 = Sunday, 6 = Saturday)
  const firstDayOfWeek = new Date(year, month, 1).getDay();
  // Blank cells before the first day of month
  const blanks = Array.from({ length: firstDayOfWeek }, (_, i) => i);
  // Days array [1, 2, …, daysInMonth]
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  // Check if a given day has any event
  const dayHasEvent = (day) => {
    return events.some((ev) => {
      const eventDate = new Date(ev.start);
      return (
        eventDate.getFullYear() === year &&
        eventDate.getMonth() === month &&
        eventDate.getDate() === day
      );
    });
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-black text-white rounded-md shadow-md">
      {/* Calendar Header */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-lg font-bold">{monthName}</span>
        <span className="text-sm">{year}</span>
      </div>

      {/* Weekday Labels */}
      <div className="grid grid-cols-7 gap-1 text-center font-bold text-sm mb-1">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((dayName) => (
          <div key={dayName}>{dayName}</div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1">
        {blanks.map((_, index) => (
          <div key={`blank-${index}`} className="h-10"></div>
        ))}

        {days.map((day) => (
          <div
            key={day}
            className={`h-10 border border-white flex items-center justify-center rounded ${
              dayHasEvent(day) ? 'bg-pink-500' : ''
            }`}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
