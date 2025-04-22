import React from "react";

export default function Page() {
  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-8">
        <h1 className="text-4xl font-bold mb-8">Tickets</h1>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="col-span-1">
            <img
              src="/event-image.jpg"
              alt="Event"
              className="w-full h-auto rounded-lg mb-4"
            />
            <h2 className="text-2xl font-semibold">Event Title</h2>
          </div>
          <div className="col-span-1 lg:col-span-3">
            <div className="flex justify-start lg:justify-center mb-4 space-x-4">
              {/* Month Selector Tabs */}
              <button className="px-4 py-2 bg-blue-500 text-white rounded">
                January
              </button>
              <button className="px-4 py-2 bg-gray-200 rounded">February</button>
              <button className="px-4 py-2 bg-gray-200 rounded">March</button>
            </div>
            <div className="grid grid-cols-7 gap-2 mb-4">
              {/* Calendar Grid */}
              {[...Array(30)].map((_, i) => (
                <div
                  key={i}
                  className="border border-gray-300 rounded h-12 flex items-center justify-center"
                >
                  {i + 1}
                </div>
              ))}
            </div>
            <div>
              {/* Details Panel */}
              <p>Select a date to see available tickets.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}