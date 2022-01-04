import React from 'react'

export default function Navbar() {
  return (
    <nav className=''>
      <div className="px-5 py-2 shadow-bottom mx-auto items-center">
        <div className='flex justify-between'>
          {/* Primary Nav */}
          <div className='flex gap-2 items-center'>
            <div>
              <a href='#'>
                <img src='/images/logo.png' className='max-h-14'/>
              </a>
            </div>
            <div className="hidden md:flex h-full items-center">
              <a href='#' className='px-3 text-2xl hover:text-green-500'>Home</a>
              <a href='#' className='px-3 text-2xl hover:text-green-500'>Product</a>
              <a href='#' className='px-3 text-2xl hover:text-green-500'>About</a>
            </div>
          </div>
          {/* Secondary Nav */}
          <div className='hidden md:flex items-center'>
            <input className='p-1 max-h-8 border border-black' type='text' placeholder='search'></input>
          </div>
          {/* Mobile button */}
          <div className="md:hidden flex items-center">
            <button className='mobile-menu-button'>
              <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* mobile menu */}
        {/* <div className='mt-2 mobile-menu hidden'>
          <a href='#' className='block p-2 text-sm hover:text-green-400'>Home</a>
          <a href='#' className='block p-2 text-sm hover:text-green-400'>Product</a>
          <a href='#' className='block p-2 text-sm hover:text-green-400'>About</a> 
        </div> */}
      </div>
    </nav>
  )
}
