import React from 'react'

export default function Navbar() {
  return (
    <div>
      <nav className=''>
        <div className="px-8 py-2 shadow-bottom mx-auto items-center">
          <div className='flex justify-between '>
            <div className='flex gap-2 items-center'>
              <div>
                <a href='#'>
                  <img src='/images/logo.png' className='max-h-10'/>
                </a>
              </div>
              <a href='#' className='px-3 hover:text-green-400'>Home</a>
              <a href='#' className='px-3 hover:text-green-400'>Product</a>
              <a href='#' className='px-3 hover:text-green-400'>About</a>
            </div>
            <div className='flex items-center'>
              <input className='p-1 max-h-8 border border-black' type='text' placeholder='search'></input>
            </div>
          </div>
        </div>
      </nav>
    </div>
    )
}
