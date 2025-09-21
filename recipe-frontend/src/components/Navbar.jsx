import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import  recipeimg from '../assets/recipe-book_9273848.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className='w-full md:px-36 px-auto flex items-center py-4 box-border shadow-lg bg-pink-200 relative'>
      <div className='flex w-full md:justify-start justify-center'>
        <div className='flex gap-2 items-center cursor-pointer md:mx-0 mx-auto'>
          <img src={recipeimg} alt="Recipe Img" className='w-10 h-10 mr-2'/>
          <Link to="/" className='text-pink-500 font-bold text-3xl text-center'>Recipe Generator</Link>
        </div>
      </div>

      <button className="md:hidden absolute right-4 top-6" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">
        <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
     
      <div className='hidden md:flex box-border md:gap-4 gap-2 justify-center items-center'>
        <Link to={'/home'} className='px-4 py-2 box-border text-pink-600 text-xl cursor-pointer hover:underline'>Home </Link>
        <Link to={'/features'} className='px-4 py-2 text-pink-600 text-xl cursor-pointer hover:underline'>Features </Link>
        <Link to={'/contact'} className='md:px-4 md:py-2 box-border text-pink-600 text-xl cursor-pointer hover:underline'>Contact</Link>
        <Link to={'/login'} className='px-4 py-2 box-border border-1 text-pink-600 border-pink-600 rounded-xl text-xl hover:bg-pink-200 cursor-pointer'>Login</Link>
      </div>
     
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md rounded-b-xl flex flex-col items-center z-50 md:hidden animate-slideDown">
          <Link to={'/home'} className='w-full px-4 py-3 text-pink-600 text-lg text-center border-b hover:bg-pink-50' onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to={'/features'} className='w-full px-4 py-3 text-pink-600 text-lg text-center border-b hover:bg-pink-50' onClick={() => setMenuOpen(false)}>Features</Link>
          <Link to={'/contact'} className='w-full px-4 py-3 text-pink-600 text-lg text-center border-b hover:bg-pink-50' onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link to={'/login'} className='w-full px-4 py-3 text-pink-600 text-lg text-center hover:bg-pink-50' onClick={() => setMenuOpen(false)}>Login</Link>
        </div>
      )}
    </nav>
  )
};
export default Navbar;