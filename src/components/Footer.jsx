import { CSSProperties } from "react";
// import { TiSocialInstagram } from "react-icons/ti";
// import { FaFacebookF, FaEnvelope } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-[#f2f2f2] p-6 px-12">
      <div className="flex justify-between items-center max-w-[1200px] mx-auto">
        <div className="flex text-left text-[#333]">
          <strong>
            Contact Us:
            <br />
            ​brownmusicalforum@gmail.com
          </strong>
        </div>
        <div className="flex items-center gap-5 text-[#333] ">
          <a
            href="https://www.facebook.com/musicalforum/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#555] text-2xl"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/brownmusicalforum/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#555] text-3xl"
          >
            <TiSocialInstagram />
          </a>
          <a
            href="mailto:​brownmusicalforum@gmail.com"
            className="hover:text-[#555] text-2xl"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}
