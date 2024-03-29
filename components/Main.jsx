import Link from 'next/link';
import React from 'react';

import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>LET&#39;S BUILD SOMETHING COOL</p>
          <h1 className='py-4 text-gray-700'> Hi, I&#39;m <span className='text-[#5651e5]'> Bilguun</span></h1>
          <h1 className='py-2 text-gray-700'>Mobile Application Developer</h1>
          <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'> I’m focused on building mobile applications.</p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a href='https://www.linkedin.com/in/m-bilguun-8a738115b/' target='_blank' rel='noreferrer'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'><FaLinkedinIn /></div>
            </a>
            <a href='https://github.com/BilguunRomeo' target='_blank' rel='noreferrer'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'> <FaGithub /></div>
            </a>
            <Link href='/resume'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'><BsFillPersonLinesFill /></div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
