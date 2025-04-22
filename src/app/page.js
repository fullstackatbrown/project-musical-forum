'use client';
import { Footer } from "@/components/Footer";
import TopPane from "@/components/TopPane";
import FeaturedEvents from "@/app/events/page";
import Image from "next/image";
import ImageGallery from "@/components/ImageGallery";
import Navbar from "@/components/Navbar";
import { navItems } from "@/data/navItems";

export const images = [
  "https://brownmusicalforum.weebly.com/uploads/1/2/7/5/127563613/chris-karli-2_orig.jpeg",
  "https://brownmusicalforum.weebly.com/uploads/1/2/7/5/127563613/jake-anger.jpeg",
  "https://brownmusicalforum.weebly.com/uploads/1/2/7/5/127563613/b3a7350.jpeg",
  "https://brownmusicalforum.weebly.com/uploads/1/2/7/5/127563613/b3a7620.jpeg",
  "https://brownmusicalforum.weebly.com/uploads/1/2/7/5/127563613/b3a7504.jpg",
  "https://brownmusicalforum.weebly.com/uploads/1/2/7/5/127563613/karli-speaking-2.jpeg",
  "https://brownmusicalforum.weebly.com/uploads/1/2/7/5/127563613/meg-gorg-2.jpeg",
  "https://brownmusicalforum.weebly.com/uploads/1/2/7/5/127563613/superstar-2.jpeg",
  "https://brownmusicalforum.weebly.com/uploads/1/2/7/5/127563613/superstar-girls-2.jpeg",
  "https://brownmusicalforum.weebly.com/uploads/1/2/7/5/127563613/superstar-dance-2.jpeg",
  "https://brownmusicalforum.weebly.com/uploads/1/2/7/5/127563613/jcs-karli.jpeg",
];

export default function Home() {
  return (
    <div className="bg-black text-white">
      <Navbar navItems={navItems} />

      {/* Hero Section */}
      <section className="relative h-[80vh] w-full fade-in slide-in-left">
        
        <Image
          src="https://brownmusicalforum.weebly.com/uploads/1/2/7/5/127563613/jcs-karli.jpeg"
          alt="The Musical Forum"
          layout="fill"
          objectFit="cover"
          className="z-0 mt-4"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center z-10 slide-in-up">
          <h1 className="text-4xl md:text-6xl font-bold tracking-wide">
            The Brown Musical Forum
          </h1>
        </div>
      </section>

      {/* Image Gallery Carousel */}
      <section className="fade-in slide-in-up">
        <div className="group">
          <ImageGallery images={images} />
        </div>
      </section>

      {/* About Section */}
      <section className="bg-[#CD82BB] text-black px-8 py-16 text-center fade-in slide-in-right">
        <h2 className="text-3xl font-bold mb-4">
          About the Brown Musical Forum
        </h2>
        <p className="max-w-3xl mx-auto">
          Musical Forum (MF) is an entirely student run group at Brown
          University dedicated to the production of musical theatre by the
          student body. Our mission is to bring exciting, entirely student
          produced musical theatre to the Brown University campus, while
          nurturing budding directors, designers, and actors. We produce one
          full-length musical each semester in T.F. Green Hall’s PW Downspace,
          in addition to a concert musical or revue during the fall semester,
          and a Mini-Musical Festival each spring. We also organize and produce
          cabaret nights, workshops, and other musical theatre opportunities
          throughout the academic year. Originally called “The Musical Forum,”
          MF was founded in 1987. Musical Forum’s first production, You’re a
          Good Man, Charlie Brown, was mounted in March of that year. Since
          then, we have produced over 50 full-length musicals and supported
          hundreds of student theatre artists. For over 30 years, Musical Forum
          has allowed professional quality musical theatre produced by students
          for students to thrive on Brown’s campus. Notable alumni include Tony
          Award winner John Lloyd Young, New York Musical Theatre Festival
          executive producer Isaac Hurwitz, playwright Stephen Karam, Broadway
          actor Jed Resnick, and Charlie Alterman, musical director of the
          Pulitzer Prize-winning Next to Normal.
        </p>
        <div className="mt-6 flex justify-center gap-6 text-xl">
          <a href="#" aria-label="Instagram" className="social-icon inline-block mx-2 transition-transform">
            📷
          </a>
          <a href="#" aria-label="YouTube" className="social-icon inline-block mx-2 transition-transform">
            🎥
          </a>
          <a href="#" aria-label="Spotify" className="social-icon inline-block mx-2 transition-transform">
            🎵
          </a>
        </div>
      </section>

      {/* What's Up Section */}
      <section className="bg-[#000000] text-white px-6 py-12 text-center fade-in slide-in-up">
        <h3 className="text-2xl font-bold mb-4">What’s Up With Us?</h3>
        <p className="max-w-xl mx-auto mb-6">
          We are currently in the process of planning our next production! Stay
          tuned for more updates and information on auditions, rehearsals, and
          performances.
        </p>
        <div className="flex justify-center">
          <Image
            src="https://brownmusicalforum.weebly.com/uploads/1/2/7/5/127563613/meg-gorg-2.jpeg" // Replace with your image path
            alt="BOCA 2020"
            width={300}
            height={300}
          />
        </div>
        <p className="mt-4 font-semibold uppercase text-sm">
          Best of College A Cappella 2020, Available Now!
        </p>
      </section>

      <Footer />
      <style jsx global>{`
        .fade-in {
          opacity: 0;
          animation: fadeIn 0.8s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .slide-in-up {
          opacity: 0;
          transform: translateY(20px);
          animation: slideInUp 0.8s ease-out forwards;
        }
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .slide-in-left {
          opacity: 0;
          transform: translateX(-20px);
          animation: slideInLeft 0.8s ease-out forwards;
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .slide-in-right {
          opacity: 0;
          transform: translateX(20px);
          animation: slideInRight 0.8s ease-out forwards;
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .group :global(.gallery-image) {
          transition: transform 0.3s ease;
        }
        .group :global(.gallery-image:hover) {
          transform: scale(1.05);
        }
        .social-icon:hover {
          transform: scale(1.2);
        }
      `}</style>
    </div>
  );
}
