import React from 'react'
import { Link } from 'react-router'

function Header() {
  return (
    <div className='flex justify-between items-center px-15 py-5'>
        <div id='logo'>
            {/* <Link to="/" className='text-5xl'>JS</Link> */}
            <Link to={"/"} className='text-5xl outline-1 overflow-hidden block'><span className='font-sans font-extrabold bg-black text-white p-2'>J</span><span className='font-extrabold bg-white text-black p-2'>S</span></Link>
        </div>
        <div id='links' className='flex gap-x-5 font-sans'>
          <Link to="/aboutme">About me</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/resume">Resume</Link>
          <Link to="/contact">Contact</Link>
        </div>
    </div>
  )
}

export default Header