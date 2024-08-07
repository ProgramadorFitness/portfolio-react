import { Link } from 'react-router-dom';
import { TiDocumentText, TiSocialGithubCircular, TiSocialInstagramCircular, TiSocialYoutubeCircular } from 'react-icons/ti';
import { TiThMenu } from 'react-icons/ti';
import { useState } from 'react';
import { GrClose } from "react-icons/gr";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
  <nav className="relative">
      <button onClick={toggleMenu} className="block lg:hidden p-4 text-white z-50">
        {isOpen ? <GrClose className=" text-2xl" /> : <TiThMenu className="text-2xl" />}
      </button>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-gray-800 z-40 transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} lg:relative lg:translate-x-0 lg:w-auto lg:h-auto lg:bg-transparent`}
      >
        <div className="flex flex-col h-full lg:flex-row lg:items-center lg:space-x-6 lg:h-auto">
          {isOpen && (
            <button onClick={toggleMenu} className='absolute top-4 right-4 p-4 text-white z-50 lg:hidden'>
              <GrClose/>
          </button>)}
          <ul className={`flex flex-col items-center justify-center lg:flex-row lg:space-x-6 mt-16 lg:mt-0 ${isOpen ? 'block' : 'hidden'} lg:flex`}>
            <li>
              <a className='block px-4 py-2 text-white hover:text-red-700 cursor-pointer' href="#home" >Home</a>
            </li>
            <li>
              <a className='block px-4 py-2 text-white hover:text-purple-700' href="#projects">Projects</a>
            </li>
            <li>
              <a className='block px-4 py-2 text-white hover:text-blue-700' href="#contact">Contact</a>
            </li>
          </ul>
          <ul className={`flex flex-col items-center justify-center lg:flex-row lg:space-x-6 mt-4 lg:mt-0 lg:flex`}>
            <li>
            <a className='block px-6 py-2 text-2xl text-white hover:text-blue-400' href="#resume"><TiDocumentText /></a>
            </li>
            <li>
              <a className='block px-4 py-2 text-2xl text-white hover:text-gray-400' href="https://www.instagram.com/eltorpeese/"><TiSocialInstagramCircular /></a>
            </li>
            <li>
              <a className='block px-4 py-2 text-2xl text-white hover:text-red-700' href="https://www.youtube.com/channel/UCbQWMV3W_46bK6xAalpRfoQ"><TiSocialYoutubeCircular /></a>
            </li>
            <li>
              <a className='block px-4 py-2 text-2xl text-white hover:text-gray-400' href="https://github.com/ProgramadorFitness"><TiSocialGithubCircular /></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;