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
      <section className="relative h-[80vh] w-full">
        <Image
          src="/images/brownderbies-group.jpg" // Replace with actual path
          alt="The Musical Forum"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold tracking-wide">
            The Brown Musical Forum
          </h1>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-[#CD82BB] text-black px-8 py-16 text-center">
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
          {/* Add your social icons here using lucide-react or react-icons */}
          <a href="#" aria-label="Instagram">
            📷
          </a>
          <a href="#" aria-label="YouTube">
            🎥
          </a>
          <a href="#" aria-label="Spotify">
            🎵
          </a>
        </div>
      </section>

      {/* What's Up Section */}
      <section className="bg-[#000000] text-white px-6 py-12 text-center">
        <h3 className="text-2xl font-bold mb-4">What’s Up With Us?</h3>
        <p className="max-w-xl mx-auto mb-6">
          We are currently in the process of planning our next production! Stay
          tuned for more updates and information on auditions, rehearsals, and
          performances.
        </p>
        <div className="flex justify-center">
          <Image
            src="/images/boca2020.png" // Replace with your image path
            alt="BOCA 2020"
            width={300}
            height={300}
          />
        </div>
        <p className="mt-4 font-semibold uppercase text-sm">
          Best of College A Cappella 2020, Available Now!
        </p>
      </section>

      {/* <Footer /> */}
    </div>
  );
}
