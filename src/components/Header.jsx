import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='text-white bg-gray-700 text-base fixed top-0 left-0 w-full p-2 rounded-full z-50 flex items-center justify-between shadow-2xl'>
        <Link to="/">Programador Fitness</Link>
        <Navbar/>
    </header>
  )
}

export default Header