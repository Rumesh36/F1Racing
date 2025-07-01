import React from 'react'
import { Link } from 'react-router-dom'

import f1car4 from '../assets/img/f1car4.webp'

const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
   
      
      {/* Background Image */}
      <img
        src={f1car4}
        alt="F1 Car"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Centered Content */}
      <div className="relative z-10 flex flex-col items-center justify-center pb-20  text-center min-h-screen px-4">
        
        <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold max-w-3xl  mb-6 drop-shadow-lg">
          “If you want to win, you don’t lift. You risk it all, or you watch from behind.”
        </h1>
        <p className="text-gray-300 font-semibold text-base md:text-lg max-w-xl mb-8">
          Experience the thrill of Formula 1 – strategy, speed, and precision engineering.
        </p>

        <Link to="/Player">
        <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-lg">
          Explore Drivers
        </button>
        </Link>
      </div>
    </div>
  )
}

export default Home
