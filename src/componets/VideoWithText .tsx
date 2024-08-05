// components/VideoWithText.js
import { Button } from '@nextui-org/react';
import Image from 'next/image';
import React from 'react';
import { FaHandsHelping, FaUserGraduate } from 'react-icons/fa';
import { IoDocumentTextSharp } from 'react-icons/io5';
import { MdOutlineScreenSearchDesktop } from 'react-icons/md';

const VideoWithText = () => {
  return (
    <div className="relative w-full h-screen">
      <video
        src="/video/ccdvideo.mp4"
        autoPlay
        muted
        loop
        // alt="CCD Logo"
        className='h-full w-full object-cover'
      />
      <div className="absolute inset-0 flex justify-start items-center">
        <div className="trapezoid flex flex-col  py-6 gap-16 pl-10 pr-[13rem] text-white " data-aos="fade-right">
          <div className='flex justify-normal items-end gap-4'>
            <p className='font-bold text-6xl  text-black'>SOMOS CCD</p>
            <FaUserGraduate className='w-16 h-16 p-2  rounded-full bg-slate-50 text-black' />
          </div>
          <p className='text-3xl text-black'>Comprometidos con la Calidad y la Satisfacción</p>
          <div className='flex  gap-4 '>
            <div className='flex  items-start  gap-4'>
              <div className='flex flex-row-reverse justify-end items-center gap-4 bg-blue-700/40 p-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105' >
                <p className='font-bold text-xl p-2 text-black'>metodologia <br /> <b className='text-white '>E-learning</b></p>
                <MdOutlineScreenSearchDesktop className='w-16 h-16 p-2  rounded-full bg-slate-50 text-black' />
              </div>
              <div className='flex justify-normal items-center gap-4  bg-blue-700/40 p-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105'>
                <p className='font-bold text-xl p-2 text-black'>Certificacion<br /> <b className='text-white '>internacional</b></p>
                <IoDocumentTextSharp className='w-16 h-16 p-2  rounded-full bg-slate-50 text-black' />
              </div>
            </div>
            {/* <Image
              src="/img/ccdlogo.png"
              alt="CCD Logo"
              className='w-[14rem] h-full  rounded-full bg-slate-50 p-4 animate-bounce animate-infinite'
              width={120}
              height={0}
            /> */}
          </div>
        
            <div className=' rounded-2xl'>
              <div className='flex gap-8 justify-center rounded-full bg-blue-700/40  text-black p-6 items-center'>
                {/* <Button>trabaja con <br /> nosotros</Button> */}
                <div className='flex flex-col gap-4 items-center p-2 bg-[#dad9d95a]  rounded-xl transition duration-300 ease-in-out transform hover:scale-105'>
                  <FaHandsHelping className='h-12 w-12 bg-white p-2 rounded-full' />
                  <p className='text-center'>Lorem ipsum dolor sit,<br /> Oe odio! aque aliquam eius?</p>
                </div>
                <div className='flex flex-col gap-4 items-center p-2 bg-[#dad9d94b]  rounded-xl transition duration-300 ease-in-out transform hover:scale-105'>
                  <FaHandsHelping className=' h-12 w-12 bg-white p-2 rounded-full ' />
                  <p className='text-center'>Lorem ipsum dolor sit,<br /> Oe odio! aque aliquam eius?</p>
                </div>
              </div>
        
          </div>

        </div>
      </div>
    </div>
  );
};

export default VideoWithText;
