"use client";
import dynamic from 'next/dynamic';
import React from 'react';

import { useState } from "react";
import Image from "next/image";
import { FaHandsHelping } from "react-icons/fa";


export default function Home() {
  const [activeContent, setActiveContent] = useState('default');
  const Carrusel = dynamic(() => import('@/componets/carrusel'), {
    ssr: false,
  });
  

  const renderContent = () => {
    switch (activeContent) {
      default:
        return (
          <div className="w-full h-full flex items-center">
            <div className="w-[50%] flex flex-col gap-8 px-24">
              <p>El primer paso lo das con tu pasión y conocimiento. Después, solo tienes que escoger un tema prometedor con la ayuda de nuestra herramienta Marketplace Insights.</p>
              <p>Tú decides la forma de enseñar, cómo le vas a poner tu sello propio.</p>
              <h3 className="font-bold">¿Cómo podemos ayudarte?</h3>
              <p>Ofrecemos numerosos recursos con información para crear tu primer curso. Y nuestro panel del instructor y las páginas del programa de curso te ayudarán a mantenerlo todo organizado.</p>
            </div>
            <div className="w-[50%]">
              <img src="/img/udemy.jpg" alt="" className="w-full h-full" />
            </div>
          </div>
        );
      case 'video':
        return (
          <div className="w-full h-full flex items-center">
            <div className="w-[50%] flex flex-col gap-8 px-24">
              <p>Utilice herramientas básicas como un teléfono inteligente o una cámara DSLR. Añade un buen micrófono y estarás listo para empezar.</p>
              <p>Si no te gusta estar frente a la cámara, simplemente captura tu pantalla. De cualquier manera, recomendamos dos horas o más de video para un curso pago.</p>
              <h3 className="font-bold">¿Cómo te ayudamos?</h3>
              <p>Nuestro equipo de soporte está disponible para ayudarlo durante todo el proceso y proporcionar comentarios sobre los videos de prueba.</p>
            </div>
            <div className="w-[50%]">
              <img src="/img/udemy.jpg" alt="" className="w-full h-full" />
            </div>
          </div>
        );
      case 'curso':
        return (
          <div className="w-full h-full flex items-center">
            <div className="w-[50%] flex flex-col gap-8 px-24">
              <p>Recopila tus primeras valoraciones y reseñas promocionando tu curso a través de las redes sociales y tus redes profesionales.</p>
              <p>Tu curso se podrá encontrar en nuestro mercado, donde obtendrás ingresos de cada inscripción pagada.</p>
              <h3 className="font-bold">¿Cómo te ayudamos?</h3>
              <p>Nuestra herramienta de cupones personalizados le permite ofrecer incentivos de inscripción mientras que nuestras promociones globales dirigen el tráfico a los cursos. Hay aún más oportunidades para los cursos elegidos para Udemy Business.</p>
            </div>
            <div className="w-[50%]">
              <img src="/img/udemy.jpg" alt="" className="w-full h-full" />
            </div>
          </div>
        );
    }
  };

  return (
    <main className="bg-[#dad9d9] relative flex  min-h-screen flex-col items-center gap-[5rem] ">
      <div className="relative w-full h-full">
        <div className="h-[35rem] ">
          <img
            alt=""
            src='/img/inicio.jpg'
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0 flex items-center justify-center  bg-black bg-opacity-50">
          <div className=" w-[70%] flex flex-col gap-8 ">
            <h1 className="text-white text-lg ">CCD Empleo</h1>
            <h2 className="text-white text-6xl font-bold">Únete a CDD y genera Impacto</h2>
            <h2 className="text-white text-6xl font-bold">en el futuro de la energía</h2>
            <p className="text-white text-lg  w-[50%]   ">
              Somos una compañía global en la que trabajamos más de
              25.000 personas, de 75 nacionalidades en 27 países. Buscamos
              personas con talento que nos ayuden a crear valor de manera
            </p>
            <div className="flex gap-4">
              <button className="p-4 bg-blue-600 text-white rounded-2xl">consulta de vacantes</button>
              <button className="p-4 bg-blue-600 text-white rounded-3xl">conoce donde estamos presentes</button>
            </div>
          </div>
        </div>
      </div>

      <div className=" w-[60%] flex flex-col justify-center items-center gap-8">
        <div className="flex flex-col gap-8">
          <h1 className="text-center font-bold text-3xl">Tu carrera profesional hacia el futuro</h1>
          <p className="text-center">Somos una compañía multienergética presente en más de 20 países que se apoya en la innovación tecnológica y la digitalización para crear un futuro más sostenible y que trabaja para contribuir al progreso de la sociedad. Únete a un proyecto de
            impacto global y deja tu huella en el reto de la
            energía sostenible.</p>
        </div>
        <div className="flex justify-center items-center gap-6 ">
          <div className="flex flex-col items-center gap-6 px-6 py-8 hover:bg-[#FFFFFF]" >
            <div className="bg-blue-500/35 rounded-xl  p-10"><FaHandsHelping className="h-8 w-8" /></div>
            <h1>trabaja en Repsol</h1>
            <p className="text-center">descubre el universo de profesiones de la <br />compañia</p>
          </div>
          <div className="flex flex-col items-center gap-6 px-6 py-8 hover:bg-[#FFFFFF]" >
            <div className="bg-blue-500/35 rounded-xl  p-10"><FaHandsHelping className="h-8 w-8" /></div>
            <h1>trabaja en Repsol</h1>
            <p className="text-center">descubre el universo de profesiones de la <br />compañia</p>
          </div>
          <div className="flex flex-col items-center gap-6 px-6 py-8 hover:bg-[#FFFFFF]" >
            <div className="bg-blue-500/35 rounded-xl  p-10"><FaHandsHelping className="h-8 w-8" /></div>
            <h1>trabaja en Repsol</h1>
            <p className="text-center">descubre el universo de profesiones de la <br />compañia</p>
          </div>
        </div>
      </div>


      <div  className=" w-[90%]  flex justify-center items-center"> 
        <Carrusel/>
      </div>

      <div className="w-[70%] flex flex-col justify-center items-center gap-8">
        <div><h1 className="text-center font-bold text-3xl">cómo empezar</h1></div>
        <div className="flex flex-col gap-10">
          <div className="flex gap-6 justify-center border-b">
            <button
              onClick={() => setActiveContent('programa')}
              className={`p-4 ${activeContent === 'programa' ? 'font-bold text-black border-b-2 border-black' : 'text-gray-600'} hover:text-black`}
            >
              Planifica tu currículo
            </button>
            <button
              onClick={() => setActiveContent('video')}
              className={`p-4 ${activeContent === 'video' ? 'font-bold text-black border-b-2 border-black' : 'text-gray-600'} hover:text-black`}
            >
              Graba tu video
            </button>
            <button
              onClick={() => setActiveContent('curso')}
              className={`p-4 ${activeContent === 'curso' ? 'font-bold text-black border-b-2 border-black' : 'text-gray-600'} hover:text-black`}
            >
              Lanza tu curso
            </button>
          </div>
          {renderContent()}
        </div>
      </div>
    </main>
  );
}
