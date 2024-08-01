// components/VideoWithText.js
import Image from 'next/image';
import React from 'react';

const VideoWithText = () => {
  return (
    <div className="relative w-full h-screen">
       <img 
              src="/img/inicio.jpg" 
              alt="CCD Logo" 
              className='h-full w-full'
            />
      <div className="absolute inset-0 flex justify-start items-center">
        <div className="trapezoid flex flex-col items-center justify-center gap-6 pl-10 pr-[13rem] bg-gray-700 bg-opacity-60 text-white">
          <div className='flex justify-center items-end gap-4'>
            <p className='font-bold text-6xl p-2 text-black'>SOMOS CDD</p>
            <Image
              src="/img/ccdlogo.png" 
              alt="CCD Logo" 
              className=''
              width={120}
              height={0}
            />
          </div>
          <p className='text-6xl text-center text-black'>Comprometidos con la Calidad y la Satisfacción</p>
        </div>
      </div>
    </div>
  );
};

export default VideoWithText;
