import { Footer } from "@/components/Footer";
import TopPane from "@/components/TopPane";
import Image from "next/image";
import ImageGallery from "@/components/ImageGallery";

const images = [
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
    <div>
      <TopPane></TopPane>
      <ImageGallery images={images} />
      <Footer />

    </div>
  );
}
