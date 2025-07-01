import React from 'react'
import { Link } from 'react-router-dom'

const Navbar :React.FC = () => {
  return (
    <>
    
    <nav>
      <div className='bg-white py-4 flex justify-between '>
         <div className="text-4xl ml-3 font-extrabold tracking-[0.2rem] text-red-600  max-md:text-2xl  ">
             F1-Racing
         </div>

         <ul className="flex list-none text-xl mr-5 items-center gap-10 max-md:gap-3 font-semibold max-md:text-lg ">
          
          <Link to="/">
          <li>Home</li>
          </Link>
             
          <Link to="/Player">   
          <li>Players</li>
          </Link>

          <Link to="/Rules">
          <li>Rules</li>
          </Link>

         </ul>
        

      </div>
    </nav>
    
    
    </>
  )
}

export default Navbar;