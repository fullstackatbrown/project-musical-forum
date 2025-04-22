import Navbar from '@/components/Navbar';
import { navItems } from '@/data/navItems';
import React from 'react';

const BoardMember = ({ image, name, role }) => (
  <div className="border-2 border-white rounded-md overflow-hidden mx-auto">
    <img
      src={image}
      alt={`Photo of ${name}`}
      className="w-full h-auto block"
    />
    <div className="bg-black px-4 py-2 border-t-2 border-white text-center">
      <h3 className="uppercase text-lg font-bold text-[#CD82BB]">{name}</h3>
      <p className="uppercase text-sm text-[#CD82BB]">{role}</p>
    </div>
  </div>
);

export default function MeetTheBoard() {
  const members = [
    {
      id: 1,
      name: 'Thomas Seeger',
      role: 'BAI Liaison',
      image: 'https://brownmusicalforum.weebly.com/uploads/1/2/7/5/127563613/6.jpg',
    },
    {
      id: 2,
      name: 'Sunday Labrucherie',
      role: 'Equipment Chair',
      image: 'https://brownmusicalforum.weebly.com/uploads/1/2/7/5/127563613/7.jpg',
    },
    {
      id: 3,
      name: 'Sita Pawar',
      role: 'Financial Chair',
      image: 'https://brownmusicalforum.weebly.com/uploads/1/2/7/5/127563613/mf-co-chair-photo.png',
    },
    {
      id: 4,
      name: 'Jake Delesky',
      role: 'SAO Liaison',
      image: 'https://brownmusicalforum.weebly.com/uploads/1/2/7/5/127563613/bryce-cochair.png',
    },
    {
      id: 5,
      name: 'Hayley Gasbarro',
      role: 'Publicity Chair',
      image: 'https://brownmusicalforum.weebly.com/uploads/1/2/7/5/127563613/3.jpg',
    },
    {
      id: 6,
      name: 'Emily Mayo',
      role: 'Co-Chair',
      image: 'https://brownmusicalforum.weebly.com/uploads/1/2/7/5/127563613/5.jpg',
    },
    {
      id: 7,
      name: 'Grace Miller',
      role: 'Co-Chair',
      image: 'https://brownmusicalforum.weebly.com/uploads/1/2/7/5/127563613/9.jpg',
    },
    {
      id: 8,
      name: 'Avery Espiritu',
      role: 'Social Chair',
      image: 'https://brownmusicalforum.weebly.com/uploads/1/2/7/5/127563613/1.jpg',
    },
    {
      id: 9,
      name: 'Bryce Gray',
      role: 'Incoming Co-Chair',
      image: 'https://brownmusicalforum.weebly.com/uploads/1/2/7/5/127563613/4.jpg',
    },
    {
      id: 10,
      name: 'Yaffa Segal',
      role: 'Incoming Co-Chair',
      image: 'https://brownmusicalforum.weebly.com/uploads/1/2/7/5/127563613/2.jpg',
    },
    {
      id: 11,
      name: 'Chris Pollack',
      role: 'Secretorian',
      image: '/placeholder.png', // No photo available
    },
    {
      id: 12,
      name: 'Sam Kelemen',
      role: 'Pit Liaison',
      image: '/placeholder.png', // No photo available
    },
  ];

  return (
     <div className="w-full bg-black min-h-screen overflow-hidden">
          <div className="relative flex flex-col justify-center items-center pt-[100px] bg-black">
            <Navbar navItems={navItems} />
      <h1 className="text-center text-4xl text-white font-extrabold mb-10 uppercase">MEET THE BOARD</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto max-w-4xl">
        {members.map(member => (
          <BoardMember key={member.id} {...member} />
        ))}
      </div>
      </div>
    </div>
  );
}