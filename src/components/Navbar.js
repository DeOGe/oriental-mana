import React from 'react'
import logo from '../logo.png';
export default function Navbar() {
  return (
    <div>
      <nav className=''>
        <div className="px-8 py-1 mx-auto border border-black items-center">
          <div className='flex justify-between '>
            <div className='flex gap-3 border items-center'>
              <div>
                <a href='#'>
                  <img src={logo} className='max-h-10'/>
                </a>
              </div>
              <a href='#' className='border px-3 text-gray-700'>Home</a>
              <a href='#' className='border px-3 text-gray-700'>Product</a>
              <a href='#' className='border px-3 text-gray-700'>About</a>
            </div>
            <div className='flex border'>
              <input type='text' placeholder='search'></input>
            </div>
          </div>
        </div>
      </nav>
    </div>
    )
}
