import React from 'react';

interface PlayerCardProps {
  img: string;
  name: string;
  age: number;
  title: string;
  team: string;
  Car: string;
  jersey: number;
  bio: string;
  partner: string;
}

const PlayerCard: React.FC<PlayerCardProps> = ({img,  name,age,title, team, partner,Car,bio,jersey,
}) => {
  return (
    <div className="max-w-xs bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
      <img
        className="w-full h-auto  object-cover"
        src={img}
        alt={name}
      />

      <div className="p-4 space-y-2">
        <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
        <p className="text-md text-gray-500 font-semibold"><span className='font-bold text-black '>Bio</span>:{bio}</p>

        <div className="mt-2 text-md text-gray-700 space-y-1">
          <p><span className="font-semibold">Title:</span> {title}</p>
          <p><span className="font-semibold">Age:</span> {age}</p>
          <p><span className="font-semibold">Team:</span> {team}</p>
          <p><span className="font-semibold">Jersey No:</span> {jersey}</p>
          <p><span className="font-semibold">Partner:</span> {partner}</p>
          <p><span className="font-semibold">Car:</span> {Car}</p>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
