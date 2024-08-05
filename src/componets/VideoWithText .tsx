// components/VideoWithText.js
import { Button, Input } from '@nextui-org/react';
import Image from 'next/image';
import React from 'react';
import { FaHandsHelping, FaUserGraduate } from 'react-icons/fa';
import { IoDocumentTextSharp } from 'react-icons/io5';
import { MdOutlineScreenSearchDesktop } from 'react-icons/md';
import Modal2 from './modal2';
import Modal3 from './modal3';

const VideoWithText = () => {
  return (
    <div className=" relative w-full h-screen gap-4 flex flex-col md:flex-row">
      <video
        src="/video/ccdvideo.mp4"
        autoPlay
        muted
        loop
        className="hidden md:block md:w-1/2 h-full object-cover"
      />
      <div className=" absolute md:static inset-0 flex justify-center md:justify-start items-center md:w-1/2 bg-opacity-75 md:bg-opacity-0 md:bg-transparent">
        <div className="flex flex-col items-center py-6 gap-4 lg:gap-8 pl-4 sm:pl-10 pr-4 md:pr-0 text-white" data-aos="fade-right">
          <div className='flex justify-start items-end gap-4'>
            <p className='font-bold text-4xl sm:text-5xl md:text-6xl text-[#042D56]'>SOMOS CCD</p>
            <FaUserGraduate className='w-12 h-12 sm:w-16 sm:h-16 p-2 rounded-full bg-slate-50 text-black' />
          </div>
          <p className='text-2xl sm:text-3xl md:text-4xl font-bold text-[#0084EF]'>Comprometidos con la <br /> Calidad y la Satisfacción</p>
          <div className='flex flex-col sm:flex-row gap-4'>
            <div className='flex flex-col sm:flex-row items-center gap-4'>
              <div className='flex flex-row-reverse justify-end items-center gap-4 bg-blue-700/40 p-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105'>
                <p className='font-bold text-xl p-2 text-black'>Metodologia <br /><b className='text-white'>E-learning</b></p>
                <div className='bg-sky-500 rounded-full w-[4.5rem] h-[4.5rem] flex items-center justify-center'>
                  <MdOutlineScreenSearchDesktop className='w-12 h-12 sm:w-16 sm:h-16 p-2 rounded-full bg-slate-50 text-black' />
                </div>
              </div>
              <div className='flex justify-normal items-center gap-4 bg-blue-700/40 p-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105'>
                <p className='font-bold text-xl p-2 text-black'>Certificacion<br /><b className='text-white'>internacional</b></p>
                <div className='bg-sky-500 rounded-full w-[4.5rem] h-[4.5rem] flex items-center justify-center'>
                  <IoDocumentTextSharp className='w-12 h-12 sm:w-16 sm:h-16 p-2 rounded-full bg-slate-50 text-black' />
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col sm:flex-row gap-8 justify-start text-black p-6 items-center'>
            <div className='flex flex-col gap-2 items-center p-2 bg-blue-700/40 rounded-xl transition duration-300 ease-in-out transform hover:scale-105'>
              <div className='bg-sky-500 rounded-full w-[4.5rem] h-[4.5rem] flex items-center justify-center'>
                <FaHandsHelping className='h-12 w-12 bg-white p-2 rounded-full' />
              </div>
              <h1 className='font-bold'>Trabaja con CDD</h1>
              <p className='text-center'>Descubre el universo de profesiones de la compañia</p>
              <Modal3 />
            </div>
            <div className='hidden md:flex flex-col gap-2 items-center p-2 bg-blue-700/40 rounded-xl transition duration-300 ease-in-out transform hover:scale-105'>
              <div className='bg-sky-500 rounded-full w-[4.5rem] h-[4.5rem] flex items-center justify-center'>
                <FaHandsHelping className='h-12 w-12 bg-white p-2 rounded-full' />
              </div>
              <h1 className='font-bold text'>Estudiantes, prácticas <br /> y primer empleo</h1>
              <p className='text-center'>Una oportunidad única para orientar tu carrera profesional</p>
              <Modal3 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoWithText;
