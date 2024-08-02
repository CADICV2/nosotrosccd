// components/VideoWithText.js
import Image from 'next/image';
import React from 'react';
import { FaUserGraduate } from 'react-icons/fa';
import { IoDocumentTextSharp } from 'react-icons/io5';
import { MdOutlineScreenSearchDesktop } from 'react-icons/md';


const VideoWithText = () => {
  return (
    <div className="relative w-full h-screen">
      <img
        src="/img/inicio.jpg"
        alt="CCD Logo"
        className='h-full w-full'
      />
      <div className="absolute inset-0 flex  justify-start items-center">
        <div className="trapezoid flex flex-col justify-center gap-8 pl-10 pr-[13rem] bg-gray-700 bg-opacity-60 text-white " data-aos="fade-right">
          <div className='flex justify-normal items-end gap-4'>
            <p className='font-bold text-6xl  text-black'>SOMOS CCD</p>
            <FaUserGraduate  className='w-16 h-16 p-2  rounded-full bg-slate-50 text-black'/>
          </div>
          <p className='text-3xl text-black'>Comprometidos con la Calidad y la Satisfacción</p>
          <div className='flex gap-4 '>

         <div className='flex flex-col items-start  gap-4'>
         <div className='flex flex-row-reverse justify-end items-center gap-4 bg-blue-700/40 p-4 rounded-full'>
              <p className='font-bold text-xl p-2 text-black'>metodologia <br /> <b>E-learning</b></p>
              <MdOutlineScreenSearchDesktop  className='w-16 h-16 p-2  rounded-full bg-slate-50 text-black'  />

            </div>
            <div className='flex justify-normal items-center gap-4  bg-blue-700/40 p-4 rounded-full'>
              <p className='font-bold text-xl p-2 text-black'>Certificacion<br /> <b>internacional</b></p>
              <IoDocumentTextSharp  className='w-16 h-16 p-2  rounded-full bg-slate-50 text-black' />

            </div>
         </div>

         <Image
                src="/img/ccdlogo.png"
                alt="CCD Logo"
                className='w-[15rem] h-full  rounded-full bg-slate-50 p-4 animate-bounce animate-infinite'
                width={120}
                height={0}
              />


          </div>

        </div>

      </div>
    </div>
  );
};

export default VideoWithText;
