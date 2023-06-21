/** @format */
'use client'

import Image from 'next/image'
import Link from 'next/link'
import Typewriter from 'typewriter-effect'

const Hero = () => {
  return (
    <>
      */ image /*
      <div className=' w-4/6 absolute bottom-0 right-0 h-5/6 mx-auto lg:left-0 object-cover '>
        <Image src='/author.png' alt='man' fill />
      </div>
      */ circle /*
      <div className='hidden lg:block absolute -bottom-1/4 w-big h-big right-0 left-0 mx-auto bg-indigo-900 rounded-full -z-10'></div>
      */ animated text /*
      <div className=' absolute top-1/3 left-8 text-xl sm:left-10 sm:text-4xl md:left-14 md:text-6xl lg:left-20 xl:left-30 xl:text-7xl font-bold'>
        <span className=' text-gray-600'>Freelance</span>
        <div id='text' className=' text-red-500'>
          <Typewriter
            options={{
              strings: ['Designer', 'Author'],
              autoStart: true,
              loop: true
            }}
          />
        </div>
      </div>
      */ bio /*
      <div className=' hidden lg:flex flex-col gap-5 rounded-md shadow-xl absolute top-0 bottom-0 m-auto right-10 bg-white p-6 h-fit w-1/4 '>
        <h1 className=' text-xl font-bold text-indigo-900'>Hi, I'm Ahmed</h1>
        <p className=' text-gray-400'>
          with over 10 years of experience on web design. I am able to work with
          you on any project you like
        </p>
        <Link
          href='#contact'
          className=' bg-indigo-600 text-white text-xl p-3 w-fit px-3 py-2 rounded-md font-semibold'
        >
          Hire Me
        </Link>
      </div>
    </>
  )
}

export default Hero
