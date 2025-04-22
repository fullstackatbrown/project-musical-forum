
import React from "react";
import Navbar from "./components/Navbar";
import "./globals.css";
import { navItems } from '../alumni/page';
import { Footer } from "@/components/Footer";


function page() {
 return (
   <div className="page-container">
     page
     
       
       <Navbar navItems={navItems} />
       {/* meet the board title */}
       <h1 style="color: white; text-align: center;">Meet The Board</h1>
       {/* grid - waiting on component for this?*/}

       
       <footer>
        <Footer />
       </footer>
       
   </div>
 );
}


export default page;
>>>>>>> bd690b7560b133c033c5e3887b607ee265184cac
