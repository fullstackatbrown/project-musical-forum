import TopPane from "@/components/TopPane";
import FeaturedEvents from "@/app/events/page";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <TopPane />
      <FeaturedEvents />
    </div>
  );
}
