import { CSSProperties } from "react";
// import { TiSocialInstagram } from "react-icons/ti";
// import { FaFacebookF, FaEnvelope } from "react-icons/fa";

export function Footer({
  footerClassName = "",
  contentClassName = "",
  textClassName = "",
}) {
  return (
    <footer className={`bg-[#f2f2f2] p-6 px-12 ${footerClassName}`}>
      <div
        className={`flex justify-between items-center max-w-[1200px] mx-auto text-[#333] ${contentClassName}`}
      >
        <div className={`flex text-left ${textClassName}`}>
          <strong>
            Contact Us:
            <br />
            ​brownmusicalforum@gmail.com
          </strong>
        </div>
        <div className="flex items-center gap-5">
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
