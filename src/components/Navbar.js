import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className='bg-oriental'>
      <div className="px-5 py-2 shadow-bottom mx-auto items-center">
        <div className='flex justify-between'>
          {/* Primary Nav */}
          <div className='flex gap-2 items-center'>
            <div>
              <a href='#'>
                <img src='./images/logo.png' className='max-h-14'/>
              </a>
            </div>
            <div className="hidden md:flex h-full items-center text-white text-2xl">
              <Link to="/oriental-mana/" className='px-3 hover:text-oriental-dark'>Home</Link>
              <Link to="/oriental-mana/products" className='px-3 hover:text-oriental-dark'>Products</Link>
              <Link to="/oriental-mana/about" className='px-3 hover:text-oriental-dark'>About</Link>
            </div>
          </div>
          {/* Secondary Nav */}
          <div className='hidden md:flex items-center'>
            <input className='p-1 max-h-8 border border-black' type='text' placeholder='search'></input>
          </div>
          {/* Mobile button */}
          <div className="md:hidden flex items-center">
            <button className='mobile-menu-button'>
              <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
  // return (
  //   <div>
  //     <h1>Home</h1>
  //     <nav>
  //       <Link to="/">Home</Link> |{" "}
  //       <Link to="about">About</Link>
  //     </nav>
  //   </div>
  // );
}
