import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (

    <nav className="relative flex flex-wrap items-center justify-between px-2 py-1 bg-oriental text-white">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          {/* Logo */}
          <div>
            <a href='#'>
              <img src='./images/logo.png' className='max-h-14'/>
            </a>
          </div>
          <button
            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <div
          className={`lg:flex flex-grow items-center ${navbarOpen ? " flex" : " hidden"}`}>
          <ul className="my-2 flex flex-col lg:flex-row items-center list-none lg:ml-auto w-full lg:w-auto">
            <Link to="/" className='px-4 hover:text-oriental-dark w-full text-center'>Home</Link>
            <Link to="/products" className='px-4 hover:text-oriental-dark'>Products</Link>
            <Link to="/about" className='px-4 hover:text-oriental-dark'>About</Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}
