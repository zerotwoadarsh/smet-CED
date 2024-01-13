import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import {FaTimes} from 'react-icons/fa'
import {CiMenuFries} from "react-icons/ci"


const Nav = () => {
  const [click, setClick] = useState(false);
  const handelClick = () => {
    setClick(!click);
  }
  const content = <>
    <div className='lg:hidden-block top-16 w-full left-0 rigth-0 bg-slate-600 transition' >
      <ul className='text-center text-xl p-20'>
        <NavLink to='/'>
          <li className='my-4 py-4 border-b border-slate-800 hover:rounded'>Home</li>
        </NavLink>
        <NavLink to='/about'>
          <li className='my-4 py-4 border-b border-slate-800 hover:rounded'>About</li>
        </NavLink>
        <NavLink to='/conference-track'>
          <li className='my-4 py-4 border-b border-slate-800 hover:rounded'>Conference Track</li>
        </NavLink>
        <NavLink to='registration-information'>
          <li className='my-4 py-4 border-b border-slate-800 hover:rounded'>Registration Information</li>
        </NavLink>
        <NavLink to='submissions'>
          <li className='my-4 py-4 border-b border-slate-800 hover:rounded'>Submissions</li>
        </NavLink>
        <NavLink to='committee'>
          <li className='my-4 py-4 border-b border-slate-800 hover:rounded'>Committee</li>
        </NavLink>
        <NavLink to='sponsorships'>
          <li className='my-4 py-4 border-b border-slate-800 hover:rounded'>Sponsorships</li>
        </NavLink>
        <NavLink to='contact'>
          <li className='my-4 py-4 border-b border-slate-800 hover:rounded'>Contact</li>
        </NavLink>

      </ul>
    </div>
  </>
  return (
    <nav>
      <div className=' h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4 '>
        <div className='flex items-center flex-1'>
          <span className='text-3xl font-bold'>Logo</span>
        </div>
        <div className='lg:flex md:flex lg: flex-1 items-center justify-end font-normal hidden'>
          <div className='flex-10'>
            <ul className='flex gap-8 mr-16 text-[18px]'>
              <NavLink to='/'>
                <li className='hover:text-fuchsia-400 transition border-b-2 border-slate-500 hover:border-fuchsia-400 cursor-pointer'>Home</li>
              </NavLink>
              <NavLink to='/about'>
                <li className='hover:text-fuchsia-400 transition border-b-2 border-slate-500 hover:border-fuchsia-400 cursor-pointer'>About</li>
              </NavLink>
              <NavLink to='/conference-track'>
                <li className='hover:text-fuchsia-400 transition border-b-2 border-slate-500 hover:border-fuchsia-400 cursor-pointer'>Conference Track</li>
              </NavLink>
              <NavLink to='registration-information'>
                <li className='hover:text-fuchsia-400 transition border-b-2 border-slate-500 hover:border-fuchsia-400 cursor-pointer'>Registration Information</li>
              </NavLink>
              <NavLink to='submissions'>
                <li className='hover:text-fuchsia-400 transition border-b-2 border-slate-500 hover:border-fuchsia-400 cursor-pointer'>Submissions</li>
              </NavLink>
              <NavLink to='committee'>
                <li className='hover:text-fuchsia-400 transition border-b-2 border-slate-500 hover:border-fuchsia-400 cursor-pointer'>Committee</li>
              </NavLink>
              <NavLink to='sponsorships'>
                <li className='hover:text-fuchsia-400 transition border-b-2 border-slate-500 hover:border-fuchsia-400 cursor-pointer'>Sponsorships</li>
              </NavLink>
              <NavLink to='contact'>
                <li className='hover:text-fuchsia-400 transition border-b-2 border-slate-500 hover:border-fuchsia-400 cursor-pointer'>Contact</li>
              </NavLink>

            </ul>
          </div>
        </div>
        <div>
        {click && content}
        </div>
        <button className=' block sm:hidden transition' onClick={handelClick}>
          {click ? <FaTimes/> : <CiMenuFries/>}
        </button>
      </div>
    </nav>
  )
}

export default Nav

