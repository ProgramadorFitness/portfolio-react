import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='fixed top-0 left-0 w-full p-4 bg-gray-400 z-50 flex items-center justify-between'>
        <Link to="/">Programador Fitness</Link>
        <Navbar/>
    </header>
  )
}

export default Header