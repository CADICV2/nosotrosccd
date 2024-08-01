"use client";
import VideoWithText from '@/componets/VideoWithText ';
import { Card, CardBody, Tab, Tabs } from '@nextui-org/react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import React, { useState } from "react";
import { GiEyeShield } from "react-icons/gi";
import { IoDocumentText } from "react-icons/io5";



export default function Home() {
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
    <main className="flex flex-col items-center gap-[5rem]">
      <VideoWithText />

      {/* Sección de "Sobre nosotros" */}
      <section className="w-full h-full bg-[#dad9d9] py-16">
        <div className="w-[80%] mx-auto flex flex-col lg:flex-row gap-10 justify-center items-center">
          <div className="flex flex-col gap-6 w-full lg:w-[50%] mb-8 lg:mb-0">
            <h1 className="text-6xl font-bold">Sobre nosotros</h1>
            <p className='pr-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, deserunt commodi labore nemo optio accusantium fuga autem repellat asperiores pariatur eligendi illum quis voluptate sit voluptatibus aliquam modi molestiae. Earum.</p>
          </div>
          <div className="w-full grid grid-cols-2 gap-6 lg:w-[50%]">
            <div className='grid grid-cols-2 gap-2'>
              <div className='col-span-2'>
                <Image src="/img/grid/img1.jpg"
                  alt=""
                  className='w-full h-full rounded-2xl  transition duration-300 ease-in-out transform hover:scale-105'
                  width={400}
                  height={0}
                />
              </div>
              <div className=''>
                <Image src="/img/grid/img2.jpeg"
                  alt=""
                  className='w-full h-full rounded-2xl  transition duration-300 ease-in-out transform hover:scale-105'
                  width={400}
                  height={0}
                />
              </div>
              <div className=''>
                <Image src="/img/grid/img3.jpg"
                  alt=""
                  className='w-full h-full rounded-2xl  transition duration-300 ease-in-out transform hover:scale-105'
                  width={400}
                  height={0}
                />
              </div>
            </div>

            <div className='grid grid-cols-2 gap-2'>
              <div className=''>
                <Image src="/img/grid/img4.jpeg"
                  alt=""
                  className='w-full h-full rounded-2xl  transition duration-300 ease-in-out transform hover:scale-105'
                  width={400}
                  height={0}
                />
              </div>
              <div className=''>
                <Image src="/img/grid/img5.jpg"
                  alt=""
                  className='w-full h-full rounded-2xl  transition duration-300 ease-in-out transform hover:scale-105'
                  width={400}
                  height={0}
                />
              </div>
              <div className='col-span-2'>
                <Image src="/img/grid/img6.jpeg"
                  alt=""
                  className='w-full h-full rounded-2xl  transition duration-300 ease-in-out transform hover:scale-105'
                  width={400}
                  height={0}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nueva sección */}
      <section className="w-full h-full bg-[#dad9d9]  py-16">
        <div className="w-[80%] mx-auto flex flex-col items-center">
          <div className="flex w-full flex-col">
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
                  <h1 className='font-bold text-6xl'>VISION</h1>
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, facere earum recusandae vero maiores rem sapiente maxime laboriosam ut non. Fugit placeat nostrum ipsam nesciunt exercitationem odit veritatis! Officia, excepturi.</p>
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
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, facere earum recusandae vero maiores rem sapiente maxime laboriosam ut non. Fugit placeat nostrum ipsam nesciunt exercitationem odit veritatis! Officia, excepturi.</p>

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
          
          </div>
        </div>
      </section>
    </main>
  );
}
