import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div id="left-third-div" className="float-left w-1/3 h-full p-4">
        <p>left third</p>
        <Link href="/gallery">Gallery</Link>
        <Link href="/board-and-alumni">Meet Board and Alumni</Link>
        <Link href="/board-application">Apply to Board</Link>
      </div>

      <div id="middle-third-div" className="float-left w-1/3 h-full p-4">
        <p>middle third</p>
        {/* Logo:  <img src=""> </img> */}
      </div>

      <div id="right-third-div" className="float-left w-1/3 h-full p-4">
        <Link href="/donation">Donation</Link>
        <Link href="/contact-us">Contact Us</Link>
        <Link href="/featured-event">Featured Event</Link>
      </div>
    </div>
  );
}
