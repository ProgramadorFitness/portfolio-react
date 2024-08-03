import React from 'react';
import {Link} from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
        <nav className=" text-black ">
            <ul className='flex space-x-6'>
              <li>
              <Link className='hover:text-red-700' to="/">Home</Link>
              </li>
              <li>
              <Link className='hover:text-purple-700' to="/projects">Projects</Link>
              </li>
              <li>
              <Link className='hover:text-blue-700' to="/contact">Contact</Link>
              </li>
              <li>
              <Link className='hover:text-green-700' to="/resume">Resume</Link>
              </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar