"use client"
import { useState } from "react";
import Image from "next/image";
import { FaHandsHelping } from "react-icons/fa";

export default function Home() {
  const [activeContent, setActiveContent] = useState('default');

  const renderContent = () => {
    switch (activeContent) {
      case 'programa':
        return (
          <div className="w-full h-full flex items-center">
            <div className="w-[50%] flex flex-col gap-8 px-40">
              <p>Contenido del programa</p>
            </div>
            <div className="w-[50%]">
              <img src="/img/udemy.jpg" alt="" className="w-full h-full" />
            </div>
          </div>
        );
      case 'video':
        return (
          <div className="w-full h-full flex items-center">
            <div className="w-[50%] flex flex-col gap-8 px-40">
              <p>Contenido del video</p>
            </div>
            <div className="w-[50%]">
              <img src="/img/udemy.jpg" alt="" className="w-full h-full" />
            </div>
          </div>
        );
      case 'curso':
        return (
          <div className="w-full h-full flex items-center">
            <div className="w-[50%] flex flex-col gap-8 px-40">
              <p>Contenido del curso</p>
            </div>
            <div className="w-[50%]">
              <img src="/img/udemy.jpg" alt="" className="w-full h-full" />
            </div>
          </div>
        );
      default:
        return (
          <div className="w-full h-full flex items-center">
            <div className="w-[50%] flex flex-col gap-8 px-40">
              <p>El primer paso lo das con tu pasión y conocimiento. Después, solo tienes que escoger un tema prometedor con la ayuda de nuestra herramienta Marketplace Insights.</p>
              <p>Tú decides la forma de enseñar, cómo le vas a poner tu sello propio.</p>
              <h3>¿Cómo podemos ayudarte?</h3>
              <p>Ofrecemos numerosos recursos con información para crear tu primer curso. Y nuestro panel del instructor y las páginas del programa de curso te ayudarán a mantenerlo todo organizado.</p>
            </div>
            <div className="w-[50%]">
              <img src="/img/udemy.jpg" alt="" className="w-full h-full" />
            </div>
          </div>
        );
    }
  };

  return (
    <main className="bg-[#F8F8F8] relative flex  min-h-screen flex-col items-center gap-[5rem] ">
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
          <h1 className="text-center">Tu carrera profesional hacia el futuro</h1>
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

      <div className="w-[70%] flex flex-col justify-center items-center gap-8">
        <div><h1 className="text-center font-bold text-3xl">cómo empezar</h1></div>
        <div className="flex flex-col gap-10">
          <div className="flex gap-6 justify-center">
            <button onClick={() => setActiveContent('programa')}>crea tu programa</button>
            <button onClick={() => setActiveContent('video')}>graba tu video</button>
            <button onClick={() => setActiveContent('curso')}>publica tu curso</button>
          </div>
          {renderContent()}
        </div>
      </div>
    </main>
  );
}
