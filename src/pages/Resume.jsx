import React from 'react'
import HDV from '../assets/HDV.jpg'

const Resume = () => {
  return (
    <div className='flex justify-center items-center lg:h-screen md:h-screen h-auto w-full bg-gradient-to-t from-black via-gray-700 to-gray-400'>
      <img
        src={HDV}
        title="Resume"
        className='w-auto h-full'
      ></img>
    </div>
  );
};

export default Resume