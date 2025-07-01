import React from 'react';

const Rules: React.FC = () => {
  return (
    <div className='bg-gray-200 pb-10'>
      <h1 className='text-center text-[1.7rem] underline text-red-600 font-semibold mb-4 pt-4'>Basic Rules to Know About F1</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 px-4 max-w-5xl mx-auto'>

        {/* Race Weekend Format */}
        <div className='border rounded-xl shadow-lg p-4 bg-white'>
          <h2 className='text-xl font-extrabold  mb-2'>Race Weekend Format :</h2>
          <p className='mb-2'>Usually runs Friday → Sunday.</p>
          <ul className='list-disc list-inside text-left space-y-1'>
            <li>2 Free Practice sessions on Friday.</li>
            <li>1 Free Practice + Qualifying on Saturday.</li>
            <li>Race on Sunday.</li>
          </ul>
        </div>

        {/* Qualifying Rules */}
        <div className='border rounded-xl shadow-lg p-4 bg-white'>
          <h2 className='text-xl  font-extrabold  mb-2'>Qualifying Rules :</h2>
          <p className='mb-2'>Sets the starting grid for Sunday’s race.</p>
          <ul className='list-disc list-inside text-left space-y-1'>
            <li>Q1: 18 mins, all cars → slowest 5 eliminated</li>
            <li>Q2: 15 mins, 15 cars → slowest 5 eliminated</li>
            <li>Q3: 12 mins, top 10 cars fight for pole</li>
          </ul>
        </div>

        {/* Race Start Rules */}
        <div className='border rounded-xl shadow-lg p-4 bg-white'>
          <h2 className='text-xl font-extrabold  mb-2'>Race Start Rules :</h2>
          <ul className='list-disc list-inside text-left space-y-1'>
            <li>Standing start unless safety car start mandated</li>
            <li>Warm-up formation lap → cars line up on grid</li>
            <li>Lights go out → race begins</li>
            <li>Jump starts penalised</li>
          </ul>
        </div>

        {/* Flags and Signals */}
        <div className='border rounded-xl shadow-lg p-4 bg-white'>
          <h2 className='text-xl font-extrabold  mb-2'>Flags and Signals :</h2>
          <ul className='list-disc list-inside text-left space-y-1'>
            <li>Green: track clear</li>
            <li>Yellow: danger ahead, no overtaking</li>
            <li>Double Yellow: extreme danger</li>
            <li>Red: session/race stopped</li>
            <li>Blue: let faster car lap you</li>
            <li>Black/white diagonal: unsporting conduct warning</li>
            <li>Black: disqualification</li>
            <li>Chequered: end of session or race</li>
          </ul>
        </div>

        {/* Penalties */}
        <div className='border rounded-xl shadow-lg p-4 bg-white'>
          <h2 className='text-xl font-extrabold  mb-2'>Penalties :</h2>
          <ul className='list-disc list-inside text-left space-y-1'>
            <li>Time penalty (5 or 10 seconds)</li>
            <li>Drive-through penalty</li>
            <li>Stop/go penalty (serve in pit)</li>
            <li>Grid penalty (for engine/gearbox changes)</li>
            <li>Disqualification (severe breaches)</li>
            <li>License points: 12 in 12 months → 1-race ban</li>
          </ul>
        </div>

        {/* Points System */}
        <div className='border rounded-xl shadow-lg p-4 bg-white'>
          <h2 className='text-xl font-extrabold  mb-2'>Points System : </h2>
          <ul className='list-disc list-inside text-left space-y-1'>
            <li>1st: 25 pts</li>
            <li>2nd: 18 pts</li>
            <li>3rd: 15 pts</li>
            <li>4th: 12 pts</li>
            <li>5th: 10 pts</li>
            <li>6th: 8 pts</li>
            <li>7th: 6 pts</li>
            <li>8th: 4 pts</li>
            <li>9th: 2 pts</li>
            <li>10th: 1 pt</li>
            <li>+1 for fastest lap (if in top 10)</li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Rules;
