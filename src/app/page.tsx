"use client";
import Modal2 from '@/componets/modal2';
import VideoWithText from '@/componets/VideoWithText ';
import { Button, Card, CardBody, Tab, Tabs } from '@nextui-org/react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import React, { useState } from "react";
import { FaUserGraduate } from 'react-icons/fa';
import { GiEyeShield } from "react-icons/gi";
import { GrDocumentPdf } from 'react-icons/gr';
import { IoDocumentText, IoDocumentTextSharp } from "react-icons/io5";
import 'aos/dist/aos.css'; // Importa los estilos de AOS
import AOS from 'aos'; // Importa AOS
import { useEffect } from 'react';



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
    <main className="flex flex-col items-center gap-[3rem]">
      <VideoWithText />

      {/* Sección de "Sobre nosotros" */}
      <section className="w-full h-full bg-[#dad9d9] py-16">
        <div className="w-[80%] mx-auto flex flex-col lg:flex-row gap-10 justify-center items-center">
          <div className="flex flex-col gap-6 w-full lg:w-[50%] mb-8 lg:mb-0" data-aos="fade-right">
            <div className='flex gap-2 items-center'>
              <Image
                src="/img/ccdlogo.png"
                alt="CCD Logo"
                className='animate-bounce animate-infinite'
                width={100}
                height={0}
              />
              <span className="text-6xl font-bold  ">Sobre <span className='animate-colorChange delay-2s'>Nosotros</span></span>
            </div>

            <p className='pr-10'>En <b>CCD</b>, ofrecemos cursos en línea de alta calidad impartidos por un equipo de expertos dedicados y apasionados por la educación. Nuestro personal está compuesto por profesionales líderes en sus campos, comprometidos a proporcionar una experiencia de aprendizaje accesible y transformadora para estudiantes de todo el mundo. Utilizamos tecnología avanzada y métodos innovadores para asegurar que cada curso sea relevante, atractivo y efectivo.</p>
          </div>
          
          <div className="w-full lg:w-[50%]"  data-aos="fade-left">
              <video 
              src="/video/cddnosotros.mp4"
              autoPlay
              loop
              muted
              className=' rounded-2xl'
              />

          </div>

          {/* <div className="w-full grid grid-cols-2 gap-6 lg:w-[50%]" data-aos="fade-left">
            <div className='grid grid-cols-2 gap-2'>
              <div className='col-span-2'>
                <Image
                  src="/img/grid/img1.jpg"
                  alt=""
                  className='w-full h-full rounded-2xl animate-scaleAnimation'
                  width={400}
                  height={0}
                />
              </div>
              <div>
                <Image
                  src="/img/grid/img2.jpeg"
                  alt=""
                  className='w-full h-full rounded-2xl animate-scaleAnimation'
                  width={400}
                  height={0}
                />
              </div>
              <div>
                <Image
                  src="/img/grid/img3.jpg"
                  alt=""
                  className='w-full h-full rounded-2xl animate-scaleAnimation'
                  width={400}
                  height={0}
                />
              </div>
            </div>

            <div className='grid grid-cols-2 gap-2'>
              <div>
                <Image
                  src="/img/grid/img4.jpeg"
                  alt=""
                  className='w-full h-full rounded-2xl animate-scaleAnimation'
                  width={400}
                  height={0}
                />
              </div>
              <div>
                <Image
                  src="/img/grid/img5.jpg"
                  alt=""
                  className='w-full h-full rounded-2xl animate-scaleAnimation'
                  width={400}
                  height={0}
                />
              </div>
              <div className='col-span-2'>
                <Image
                  src="/img/grid/img6.jpeg"
                  alt=""
                  className='w-full h-full rounded-2xl animate-scaleAnimation'
                  width={400}
                  height={0}
                />
              </div>
            </div>
          </div> */}

        </div>
      </section>

      {/* Nueva sección */}
      <section className="w-full h-full bg-[#dad9d9]  py-16">
        <div className="w-[80%] mx-auto flex flex-col items-center">
          <div data-aos="zoom-in" className="flex w-full flex-col">
            <Tabs
              aria-label="Options"
              selectedKey={selected}
              onSelectionChange={handleSelectionChange} // Utiliza la función manejadora
              className='flex justify-center'
              color='primary'
            >
              <Tab key="photos"
                title={<div className="flex items-center space-x-2">
                  <GiEyeShield />
                  <span>VISION</span>
                </div>}>
                <Card>
                  <CardBody className='flex  flex-row gap-8 justify-center p-10'>
                    <div className='flex flex-col gap-4 justify-center items-center'>
                      <h1 className='font-bold text-center text-6xl'>VISION</h1>
                      <p className='text-2xl'>Ser la plataforma líder en educación en línea, empoderando a estudiantes de todo el mundo con cursos de alta calidad y accesibles, impartidos por expertos. Transformamos el aprendizaje para que cada persona pueda alcanzar su máximo potencial y contribuir a un futuro mejor.</p>
                    </div>
                    <Image src="/img/vision.webp"
                      alt=""
                      className='w-full h-[30rem] rounded-2xl  transition duration-300 ease-in-out transform hover:scale-105'
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
                </div>}
                className=''>
                <Card>
                  <CardBody className='flex  flex-row-reverse gap-8 justify-center p-10'>
                    <div className='flex flex-col gap-4 justify-center items-center'>
                      <h1 className='font-bold text-6xl'>MISION</h1>
                      <p className='text-2xl'>Nuestra misión es proporcionar educación de alta calidad y accesible a todos, ofreciendo una amplia variedad de cursos impartidos por profesionales destacados. Nos esforzamos por crear una experiencia de aprendizaje innovadora y personalizada que permita a cada estudiante desarrollar sus habilidades y alcanzar sus metas profesionales y personales.</p>

                    </div>
                    <Image src="/img/mision.webp"
                      alt=""
                      className='w-full h-[30rem] rounded-2xl  transition duration-300 ease-in-out transform hover:scale-105'
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

      <section className="w-full h-full bg-[#dad9d9]  py-16">
        <div className="w-[80%] mx-auto flex flex-col items-center">
          <div className="flex w-full flex-col">
            <div className='mx-10 py-[5rem] ' data-aos="flip-left">
              <div className='w-full'>
                <div className='grid grid-cols-4 gap-10'>
                  <div className='col-span-4'>
                    <div className='flex gap-2 items-center justify-center'>
                      <Image
                        src="/img/ccdlogo.png"
                        alt="CCD Logo"
                        className='animate-bounce animate-infinite'
                        width={100}
                        height={0}
                      />
                      <span className='font-bold text-center text-5xl'>ACREDITACIONES ESTABLECIDAS</span>

                    </div>
                  </div>
                  <div className='flex items-center justify-center p-2 ' data-aos="flip-left">
                    <div className='group relative w-64 h-96 [perspective:1000px]'>
                      <div className='absolute inset-0 bg-gray-600/40 rounded-3xl p-8 transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
                        {/* Front Side */}
                        <div className='absolute inset-0 flex flex-col p-4 items-center justify-center backface-hidden'>
                          <Image
                            alt='colegio de ingenieros del callao'
                            src='/img/abogado.png'
                            width={300}
                            height={0}
                            className='h-full w-full rounded-t-xl  bg-gray-300 p-2'
                          />
                          <div className='py-4 px-4 bg-yellow-600/20 rounded-b-lg text-center'>
                            <span className=' font-bold '>colegio de abogados de lima</span>
                          </div>
                        </div>
                        {/* Back Side */}
                        <div className='absolute inset-0 flex flex-col items-center gap-4 justify-center p-6 bg-blue-500 text-white [transform:rotateY(180deg)] backface-hidden rounded-3xl'>

                          <Image
                            alt='colegio de ingenieros del callao'
                            src='/img/ccdlogo.png'
                            width={300}
                            height={0}
                            className='w-20 h-20 rounded-full  bg-gray-300 p-2'
                          />
                          <p className='mt-2 text-sm text-center'>
                            <b>CCD</b> prioriza la confianza de nuestros socios y clientes. Contamos con documentos que acreditan nuestra confiabilidad.
                          </p>

                          <Modal2 btnName={<div className='flex gap-2 items-center'><GrDocumentPdf className='h-6 w-6 text-red-700' /><h1>Mas informacion</h1></div>}
                            tHeader='colegio de abogados de lima'
                            Pcenter={<span></span>}
                            btndow={<Button color="success" variant="light" as="a" href="/doc/pdf/CONVENIO  CAL LIMA 2021.pdf" download>
                                      Descargar PDF
                                   </Button>}
                            doc={<iframe
                              src="/doc/pdf/CONVENIO  CAL LIMA 2021.pdf"
                              width="100%"
                              height="500px"
                              style={{ border: "none" }}
                              title="PDF Document"

                            />}
                            content={<span></span>}

                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='flex items-center justify-center p-2 ' data-aos="flip-left">
                    <div className='group relative w-64 h-96 [perspective:1000px]'>
                      <div className='absolute inset-0 bg-gray-600/40 rounded-3xl p-8 transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
                        {/* Front Side */}
                        <div className='absolute inset-0 flex flex-col p-4 items-center justify-center backface-hidden'>
                          <Image
                            alt='colegio de ingenieros del callao'
                            src='/img/ing.png'
                            width={300}
                            height={0}
                            className='h-full w-full rounded-t-xl  bg-gray-300 p-2'
                          />
                          <div className='py-4 px-4 bg-yellow-600/20 rounded-xl text-center'>
                            <span className=' font-bold '>colegio de ingenieros del callao</span>
                          </div>
                        </div>
                        {/* Back Side */}
                        <div className='absolute inset-0 flex flex-col items-center gap-4 justify-center p-6 bg-blue-500 text-white [transform:rotateY(180deg)] backface-hidden rounded-3xl'>
                          <Image
                            alt='colegio de ingenieros del callao'
                            src='/img/ccdlogo.png'
                            width={300}
                            height={0}
                            className='w-20 h-20 rounded-full  bg-gray-300 p-2'
                          />
                          <p className='mt-2 text-sm text-center'>
                            <b>CCD</b> prioriza la confianza de nuestros socios y clientes. Contamos con documentos que acreditan nuestra confiabilidad.
                          </p>

                          <Modal2 btnName={<div className='flex gap-2 items-center'><GrDocumentPdf className='h-6 w-6 text-red-700' /><h1>Mas informacion</h1></div>}
                            tHeader='colegio de ingenieros del callao'
                            Pcenter={<span></span>}
                            btndow={<Button color="success" variant="light" as="a" href="/doc/pdf/CONVENIO CENTRO DE CAPACITACIÓN Y DESARROLLO S.A.C..pdf" download>
                              Descargar PDF
                           </Button>}
                            doc={<iframe
                              src="/doc/pdf/CONVENIO CENTRO DE CAPACITACIÓN Y DESARROLLO S.A.C..pdf"
                              width="100%"
                              height="500px"
                              style={{ border: "none" }}
                              title="PDF Document"
                            />}
                            content={<span></span>}

                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='flex items-center justify-center p-2 ' data-aos="flip-left">
                    <div className='group relative w-64 h-96 [perspective:1000px]'>
                      <div className='absolute inset-0 bg-gray-600/40 rounded-3xl p-8 transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
                        {/* Front Side */}
                        <div className='absolute inset-0 flex flex-col p-4 items-center justify-center backface-hidden'>
                          <Image
                            alt='colegio de economistas de lima'
                            src='/img/ecolima.png'
                            width={300}
                            height={0}
                            className='h-full w-full rounded-t-xl  bg-gray-300 p-2 '
                          />
                          <div className='py-4 px-4 bg-yellow-600/20 rounded-xl text-center'>
                            <span className=' font-bold '>colegio de economistas de lima</span>
                          </div>
                        </div>
                        {/* Back Side */}
                        <div className='absolute inset-0 flex flex-col items-center  gap-4 justify-center p-6 bg-blue-500 text-white [transform:rotateY(180deg)] backface-hidden rounded-3xl'>
                          <Image
                            alt='colegio de ingenieros del callao'
                            src='/img/ccdlogo.png'
                            width={300}
                            height={0}
                            className='w-20 h-20 rounded-full  bg-gray-300 p-2'
                          />
                          <p className='mt-2 text-sm text-center'>
                            <b>CCD</b> prioriza la confianza de nuestros socios y clientes. Contamos con documentos que acreditan nuestra confiabilidad.
                          </p>

                          <Modal2 btnName={<div className='flex gap-2 items-center'><GrDocumentPdf className='h-6 w-6 text-red-700' /><h1>Mas informacion</h1></div>}
                            tHeader='colegio de economistas de lima'
                            Pcenter={<span></span>}
                            btndow={<Button color="success" variant="light" as="a" href="/doc/pdf/13-CONVENIO ENTRE EL CEL Y CCD.pdf" download>
                              Descargar PDF
                           </Button>}
                            doc={<iframe
                              src="/doc/pdf/13-CONVENIO ENTRE EL CEL Y CCD.pdf"
                              width="100%"
                              height="500px"
                              style={{ border: "none" }}
                              title="PDF Document"
                            />}
                            content={<span></span>}

                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='flex items-center justify-center p-2 ' data-aos="flip-left">
                    <div className='group relative w-64 h-96 [perspective:1000px]'>
                      <div className='absolute inset-0 bg-gray-600/40 rounded-3xl p-8 transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
                        {/* Front Side */}
                        <div className='absolute inset-0 flex flex-col  p-4 items-center justify-center backface-hidden'>
                          <Image
                            alt='piura'
                            src='/img/piura.png'
                            width={300}
                            height={0}
                            className='h-full w-full rounded-t-xl  bg-gray-300 p-2'
                          />
                          <div className='py-4 px-4 bg-yellow-600/20 rounded-xl text-center'>
                            <span className=' font-bold '>colegio de economistas de piura</span>
                          </div>
                        </div>
                        {/* Back Side */}
                        <div className='absolute inset-0 flex flex-col items-center gap-4 justify-center p-6 bg-blue-500 text-white [transform:rotateY(180deg)] backface-hidden rounded-3xl'>
                          <Image
                            alt='colegio de ingenieros del callao'
                            src='/img/ccdlogo.png'
                            width={300}
                            height={0}
                            className='w-20 h-20 rounded-full  bg-gray-300 p-2'
                          />
                          <p className='mt-2 text-sm text-center'>
                            <b>CCD</b> prioriza la confianza de nuestros socios y clientes. Contamos con documentos que acreditan nuestra confiabilidad.
                          </p>

                          <Modal2 btnName={<div className='flex gap-2 items-center'><GrDocumentPdf className='h-6 w-6 text-red-700' /><h1>Mas informacion</h1></div>}
                            tHeader='colegio de economistas de piura'
                            Pcenter={<span></span>}
                            btndow={<Button color="success" variant="light" as="a" href="/doc/pdf/CONVENIO CEP -PIURA 2023.pdf" download>
                              Descargar PDF
                           </Button>}
                            doc={<iframe
                              src="/doc/pdf/CONVENIO CEP -PIURA 2023.pdf"
                              width="100%"
                              height="500px"
                              style={{ border: "none" }}
                              title="PDF Document"
                            />}
                            content={<span></span>}

                          />
                        </div>
                      </div>
                    </div>
                  </div>





                  {/* Repite el bloque de arriba para más tarjetas */}

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
