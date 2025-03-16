import React from "react";
import Navbar from "./components/Navbar";
import "./globals.css";

function page() {
  return (
    <div className="page-container">
      page
      <body>
        {/*nav bar */}
        <Navbar />
        {/* meet the board title */}
        <h1 class="meet-board-title">Meet The Board</h1>
        {/* grid - waiting on component for this?*/}

        {/* footer - possibly a component in the future? */}
        <footer>
          <p>Contact Us</p>
          <p>brownmusicalforum@gmail.com</p>
          {/* 3 circles */}
          <div className="circles-container">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
        </footer>
      </body>
    </div>
  );
}

export default page;
