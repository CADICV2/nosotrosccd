"use client";
import Modal2 from '@/componets/modal2';
import Map from '@/componets/map'
import VideoWithText from '@/componets/VideoWithText ';
import { Button, Card, CardBody, Tab, Tabs } from '@nextui-org/react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import React, { useState } from "react";
import { FaUserGraduate, FaUsers, FaUserTie } from 'react-icons/fa';
import { GiEyeShield } from "react-icons/gi";
import { GrDocumentPdf } from 'react-icons/gr';
import { IoDocumentText, IoDocumentTextSharp, IoMail } from "react-icons/io5";
import 'aos/dist/aos.css'; // Importa los estilos de AOS
import AOS from 'aos'; // Importa AOS
import { useEffect } from 'react';
import { log } from 'console';



export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duración de las animaciones
      once: true, // Si la animación se ejecuta solo una vez
      mirror: false, // Si las animaciones se deben volver a ejecutar al hacer scroll hacia arriba
      // delay: 500,
      // startEvent: 'load'  
    });
  }, []);
  const [activeContent, setActiveContent] = useState('default');
  const [showModal, setShowModal] = useState(false);
  const [selected, setSelected] = useState("photos"); // Define el estado para la pestaña seleccionada
  const Carrusel = dynamic(() => import('@/componets/carrusel'), {
    ssr: false,
  });

  // Define el tipo Key si está disponible
  type Key = string | number;

  // Función manejadora del cambio de selección
  const handleSelectionChange = (key: Key) => {
    setSelected(key.toString());
  };

  return (
    <main className="flex flex-col items-center gap-12">
      <section className="w-full bg-[#dad9d9]">
        <div className="w-[90%] lg:w-[100%] mx-auto flex flex-col lg:flex-row gap-10 justify-center items-center">
          <VideoWithText />
        </div>
      </section>

      {/* Sección de "Sobre nosotros" */}
      <section className="w-full bg-[#dad9d9] py-16">
        <div className="w-[90%] lg:w-[80%] mx-auto flex flex-col lg:flex-row gap-10 justify-center items-center">
          <div className="flex flex-col gap-6 w-full lg:w-[50%] mb-8 lg:mb-0" data-aos="fade-right">
            <div className='flex gap-2 items-center'>
              <Image
                src="/img/ccdlogo.png"
                alt="CCD Logo"
                className='animate-bounce animate-infinite'
                width={100}
                height={0}
              />
              <span className="text-3xl sm:text-4xl lg:text-6xl font-bold">Sobre <span className='animate-colorChange delay-2s'>Nosotros</span></span>
            </div>
            <p className='pr-2 sm:pr-6 lg:pr-10'>En <b>CCD</b>, ofrecemos cursos en línea de alta calidad impartidos por un equipo de expertos dedicados y apasionados por la educación. Nuestro personal está compuesto por profesionales líderes en sus campos, comprometidos a proporcionar una experiencia de aprendizaje accesible y transformadora para estudiantes de todo el mundo. Utilizamos tecnología avanzada y métodos innovadores para asegurar que cada curso sea relevante, atractivo y efectivo.</p>
          </div>
          <div className="w-full lg:w-[50%]" data-aos="fade-left">
            <video
              src="/video/cddnosotros.mp4"
              autoPlay
              loop
              muted
              className='rounded-2xl'
            />
          </div>
        </div>
      </section>

      {/* Nueva sección */}
      <section className="w-full bg-[#dad9d9] py-16">
        <div className="w-[90%] lg:w-[80%] mx-auto flex flex-col items-center">
          <div data-aos="zoom-in" className="flex w-full flex-col">
            <Tabs
              aria-label="Options"
              selectedKey={selected}
              onSelectionChange={handleSelectionChange}
              className='flex justify-center'
              color='primary'
            >
              <Tab key="photos"
                title={<div className="flex items-center space-x-2">
                  <GiEyeShield />
                  <span>VISION</span>
                </div>}>
                <Card>
                  <CardBody className='flex flex-col lg:flex-row gap-8 justify-center p-10'>
                    <div className='flex flex-col gap-4 justify-center items-center'>
                      <h1 className='font-bold text-center text-3xl sm:text-4xl lg:text-6xl'>VISION</h1>
                      <p className='text-lg sm:text-xl lg:text-2xl text-center'>Ser la plataforma líder en educación en línea, empoderando a estudiantes de todo el mundo con cursos de alta calidad y accesibles, impartidos por expertos. Transformamos el aprendizaje para que cada persona pueda alcanzar su máximo potencial y contribuir a un futuro mejor.</p>
                    </div>
                    <Image src="/img/vision.webp"
                      alt=""
                      className='w-full h-48 sm:h-64 lg:h-96 rounded-2xl transition duration-300 ease-in-out transform hover:scale-105'
                      width={400}
                      height={0}
                    />
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="music"
                title={<div className="flex items-center space-x-2">
                  <IoDocumentText />
                  <span>MISION</span>
                </div>}>
                <Card>
                  <CardBody className='flex flex-col-reverse lg:flex-row-reverse gap-8 justify-center p-10'>
                    <div className='flex flex-col gap-4 justify-center items-center'>
                      <h1 className='font-bold text-center text-3xl sm:text-4xl lg:text-6xl'>MISION</h1>
                      <p className='text-lg sm:text-xl lg:text-2xl text-center'>Nuestra misión es proporcionar educación de alta calidad y accesible a todos, ofreciendo una amplia variedad de cursos impartidos por profesionales destacados. Nos esforzamos por crear una experiencia de aprendizaje innovadora y personalizada que permita a cada estudiante desarrollar sus habilidades y alcanzar sus metas profesionales y personales.</p>
                    </div>
                    <Image src="/img/mision.webp"
                      alt=""
                      className='w-full h-48 sm:h-64 lg:h-96 rounded-2xl transition duration-300 ease-in-out transform hover:scale-105'
                      width={400}
                      height={0}
                    />
                  </CardBody>
                </Card>
              </Tab>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Sección de contacto */}
      <section className="w-full bg-[#dad9d9] py-16">
        <div className="w-[90%] lg:w-[80%] mx-auto flex flex-col gap-14 items-center lg:flex-row">
          <Map />
          <div className="flex flex-col bg-white rounded-xl gap-6 w-full p-6 lg:w-[50%]">
            <div className='flex gap-2 items-center'>
              <Image
                src="/img/ccdlogo.png"
                alt="CCD Logo"
                className='animate-bounce animate-infinite'
                width={100}
                height={0}
              />
              <span className="text-3xl sm:text-4xl lg:text-6xl font-bold">Contactos</span>
            </div>
            <div className='flex gap-2 items-center'>
              <FaUsers className='w-8 h-8' />
              <div className='flex flex-col'>
                <p className='text-[#0084EF] font-bold'>Inscripciones - Matrícula</p>
                <p>(+51) 908 841 254</p>
              </div>
            </div>
            <div className='flex gap-2 items-center'>
              <FaUserTie className='w-8 h-8' />
              <div className='flex flex-col'>
                <p className='text-[#0084EF] font-bold'>Dirección Académica</p>
                <p>(+51) 924 691 532</p>
              </div>
            </div>
            <div className='flex gap-2 items-center'>
              <IoMail className='w-8 h-8' />
              <div className='flex flex-col'>
                <p className='text-[#0084EF] font-bold'>Correo Electrónico</p>
                <p>informes@ccdcapacitacion.edu.pe</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

  );
}
