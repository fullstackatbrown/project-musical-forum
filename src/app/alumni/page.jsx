import React from 'react';
import Navbar from '@/components/Navbar';

export const navItems = [
  { name: "About Us", path: "/about-us" },
  { name: "Meet the Board", path: "/meet-the-board" },
  { name: "Alumni", path: "/alumni" },
  {name: "Events", path: "/events"},
  {name: "Get involved", path: "/get-involved"},
  {name: "Gallery", path: "/gallery"}
]

const AlumniPage = () => {
  const alumni = [
    { name: 'ISAAC JENEMANN', year: '24' },
    { name: 'ELLA SPUNGEN', year: '23.5' },
    { name: 'MIRIAM ARDEN', year: '23' },
    { name: 'JOHN COADY', year: '23' },
  ];

  return (
    <div className="min-h-screen bg-[#f3e1f6] pb-8">
      <Navbar navItems={navItems} />
      
      <div className="w-full bg-[#e75480] py-4 mt-20">
        <h1 className="text-white text-4xl font-bold text-center m-0">PLAYBILL</h1>
      </div>

      <main className="max-w-3xl mx-auto mt-16 text-center px-4">
        <h1 className="text-5xl font-bold mb-2 text-black">ALUMNI</h1>
        <h2 className="text-xl font-normal mb-12 text-black">(in order of appearance)</h2>
        
        <div className="my-8 text-left">
          {alumni.map((alum, index) => (
            <div key={index} className="flex items-baseline mb-6 text-xl">
              <span className="text-[#e75480] font-bold whitespace-nowrap">{alum.name}</span>
              <span className="flex-1 mx-2 text-[#e75480] overflow-hidden whitespace-nowrap">
                {'.'.repeat(100)}
              </span>
              <span className="text-[#e75480] whitespace-nowrap">'{alum.year}</span>
            </div>
          ))}
        </div>

        <div className="text-4xl my-8">...</div>
        
        <button className="bg-[#e75480] text-white px-16 py-4 text-2xl rounded-lg cursor-pointer transition-colors hover:bg-[#d64672] border-none">
          Donate
        </button>
      </main>
    </div>
  );
};

export default AlumniPage;