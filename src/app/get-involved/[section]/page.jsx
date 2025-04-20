import { involvedContent } from "@/data/involvedContent";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import { navItems } from "@/data/navItems";
import Carousel from "@/components/Carousel";
import { Footer } from "@/components/Footer";

async function getInvolvedPage(props) {
  const params = await props.params;
  const section = params.section;
  const content = involvedContent[section];

  if (!content) return notFound();
  return (
    <div className="w-full bg-black min-h-screen overflow-hidden">
      <div className="relative flex flex-col justify-center items-center pt-[100px] bg-black">
        <Navbar navItems={navItems} />
        <Carousel />
        <div className="text-white w-full px-16 min-h-screen">
          <h1 className="font-karantina text-6xl text-center my-16">
            {content.title}
          </h1>
          <div className="font-kadwa text-base max-w-none space-y-8">
            {content.body}
          </div>
        </div>
        <Footer
          footerClassName="bg-black my-16 py-2"
          contentClassName="text-white flex flex-col gap-1"
          textClassName="text-center mb-2"
        />
      </div>
    </div>
  );
}

export default getInvolvedPage;
