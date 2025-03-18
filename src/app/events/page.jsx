import {React} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

function FeaturedEvents() {
  const events = [
    { id: 1, name: "Musical Name 1", image: "/placeholder.png" },
    { id: 2, name: "Musical Name 2", image: "/placeholder.png" },
    { id: 3, name: "Musical Name 3", image: "/placeholder.png" },
  ];

  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-black via-purple-300 to-black py-16">
      <h2 className="text-3xl font-bold text-center text-black mb-6">
        FEATURED EVENTS
      </h2>
      <div className="w-3/4">
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          navigation
          modules={[Navigation]}
        >
          {events.map((event) => (
            <SwiperSlide key={event.id} className="flex flex-col items-center">
              <div className="w-48 h-64 bg-gray-300 rounded-md"></div>
              <p className="mt-2 text-center text-black">{event.name}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <p className="text-center text-black mt-8 px-10 max-w-2xl">
        Since then, we have produced over 50 full-length musicals and supported
        hundreds of student theatre artists. For over 30 years, Musical Forum
        has allowed professional-quality musical theatre produced by students
        for students to thrive on Brown's campus.
      </p>
    </div>
  );
}

export default FeaturedEvents;
