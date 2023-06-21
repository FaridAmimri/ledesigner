/** @format */
'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { RiMenu3Fill } from 'react-icons/ri'

const Navbar = () => {
  const [toggleBtn, setToggleBtn] = useState(false)

  const handleClick = () => {
    setToggleBtn((prev) => !prev)
    console.log('ok')
  }

  return (
    <header>
      <nav className='fixed w-full top-0 bg-white '>
        <div className='container mx-auto py-5 flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <Image src='/logo.png' alt='logo' width={32} height={50} />
            <span className='text-2xl font-bold text-indigo-900'>
              The Designer
            </span>
          </div>
          <ul className='hidden md:flex space-x-10 text-gray-600 font-bold text-sm uppercase'>
            <li className='hover:text-gray-500'>
              <Link href='/'>Homepage</Link>
            </li>
            <li className='hover:text-gray-500'>
              <Link href='/'>About Me</Link>
            </li>
            <li className='hover:text-gray-500'>
              <Link href='/'>Services</Link>
            </li>
            <li className='hover:text-gray-500'>
              <Link href='/'>Works</Link>
            </li>
            <li className='hover:text-gray-500'>
              <Link href='/'>Contact</Link>
            </li>
          </ul>
          <div className='hidden md:block w-5 cursor-pointer'>
            <Image src='/moon.png' alt='moon' width={20} height={20} />
          </div>
          <div className='md:hidden cursor-pointer z-20' onClick={handleClick}>
            <RiMenu3Fill />
          </div>
          <ul
            className={`${
              !toggleBtn
                ? ' hidden'
                : ' block absolute bg-indigo-500 left-0 top-0 w-full p-10 rounded-b-3xl space-y-10  text-white text-center'
            }`}
          >
            <li>
              <Link href='/'>Homepage</Link>
            </li>
            <li>
              <Link href='/'>About Me</Link>
            </li>
            <li>
              <Link href='/'>Services</Link>
            </li>
            <li>
              <Link href='/'>Works</Link>
            </li>
            <li>
              <Link href='/'>Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
