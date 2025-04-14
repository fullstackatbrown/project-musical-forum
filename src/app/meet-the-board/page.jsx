import React from 'react';

const BoardMember = ({ image, name, role }) => (
  <div className="bg-gray-900 max-w-72 p-4 rounded shadow text-center">
    <img
      src={image}
      alt={`Photo of ${name}`}
      className="w-full h-auto rounded mb-4"
    />
    <div>
      <h3 className="text-xl font-bold text-white">{name}</h3>
      <p className="text-gray-300">{role}</p>
    </div>
  </div>
);

export default function MeetTheBoard() {
  const members = [
    { id: 1, name: 'Alex Johnson', role: 'MFA Design', image: 'https://via.placeholder.com/300?text=Photo+1' },
    { id: 2, name: 'Taylor Smith', role: 'BA in Spanish', image: 'https://via.placeholder.com/300?text=Photo+2' },
    { id: 3, name: 'Jordan Lee', role: 'Production Manager', image: 'https://via.placeholder.com/300?text=Photo+3' },
    { id: 4, name: 'Casey Patton', role: 'BS in Business', image: 'https://via.placeholder.com/300?text=Photo+4' },
    { id: 5, name: 'Morgan Evans', role: 'Executive Director', image: 'https://via.placeholder.com/300?text=Photo+5' },
    { id: 6, name: 'Riley Thompson', role: 'MA in History', image: 'https://via.placeholder.com/300?text=Photo+6' },
    { id: 7, name: 'Chris Adams', role: 'PR Coordinator', image: 'https://via.placeholder.com/300?text=Photo+7' },
    { id: 8, name: 'Sam Williams', role: 'Marketing Lead', image: 'https://via.placeholder.com/300?text=Photo+8' },
    { id: 9, name: 'Jamie Garcia', role: 'Director of Outreach', image: 'https://via.placeholder.com/300?text=Photo+9' },
  ];

  return (
    <div className="bg-black min-h-screen py-10 px-5">
      <h1 className="text-center text-4xl text-white font-extrabold mb-10">MEET THE BOARD</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 mx-auto max-w-6xl">
        {members.map(member => (
          <BoardMember key={member.id} {...member} />
        ))}
      </div>
    </div>
  );
}