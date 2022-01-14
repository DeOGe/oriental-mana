import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

export default function Navbar2() {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  useEffect(() => {
    const hideMenu = () => {
      console.log(showMobileMenu, window.innerWidth);
      if (window.innerWidth > 768 && showMobileMenu) {
        setShowMobileMenu(false);
        console.log('resize');
      }

      window.addEventListener('resize', hideMenu);
    }
   
    return () => {
      window.removeEventListener('resize', hideMenu);
    }
  }, [window.innerWidth]);

  return (
    <nav className='bg-oriental'>
      <div className="px-5 py-2 shadow-bottom mx-auto items-center">
        <div className='flex justify-between'>
          
          <div className='flex gap-2 items-center'>
            {/* Logo */}
            <div>
              <a href='#'>
                <img src='./images/logo.png' className='max-h-14'/>
              </a>
            </div>
            {/* Primary Nav */}
            <div className="hidden md:flex h-full items-center text-white text-2xl">
              <Link to="/" className='px-3 hover:text-oriental-dark'>Home</Link>
              <Link to="/products" className='px-3 hover:text-oriental-dark'>Products</Link>
              <Link to="/about" className='px-3 hover:text-oriental-dark'>About</Link>
            </div>
          </div>
          {/* Secondary Nav */}
          <div className='hidden md:flex items-center'>
            <input className='p-1 max-h-8 border border-black' type='text' placeholder='search'></input>
          </div>
           {/* Mobile Button Nav */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setShowMobileMenu(!showMobileMenu)}>
              <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        <div className={`flex flex-col ${showMobileMenu ? '' : 'hidden'}` }>
            <Link to="/" className='py-2 hover:text-oriental-dark'>Home</Link>
            <Link to="/products" className='py-2 hover:text-oriental-dark'>Products</Link>
            <Link to="/about" className='py-2 hover:text-oriental-dark'>About</Link>
        </div>
      </div>
    </nav>
  )
}
