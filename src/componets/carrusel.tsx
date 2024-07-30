import React, { useEffect, useRef } from 'react';
import Flickity from 'flickity';
import 'flickity/css/flickity.css';

const MyCarousel: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carouselRef.current) {
      const flkty = new Flickity(carouselRef.current, {
        wrapAround: true,
        autoPlay: 3000,
        pageDots: true,
      });

      // Limpieza al desmontar el componente
      return () => flkty.destroy();
    }
  }, []);

  return (
    <div ref={carouselRef} className="carousel">
      <div className="carousel-cell p-4">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img className="w-full h-48 object-cover" src="/img/inicio.jpg" alt="Image 1" />
          <div className="p-4">
            <h3 className="text-lg font-semibold">Título 1</h3>
            <p className="text-gray-600">Descripción de la tarjeta 1.</p>
          </div>
        </div>
      </div>
      <div className="carousel-cell p-4">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img className="w-full h-48 object-cover" src="/img/inicio.jpg" alt="Image 2" />
          <div className="p-4">
            <h3 className="text-lg font-semibold">Título 2</h3>
            <p className="text-gray-600">Descripción de la tarjeta 2.</p>
          </div>
        </div>
      </div>
      <div className="carousel-cell p-4">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img className="w-full h-48 object-cover" src="/img/inicio.jpg" alt="Image 3" />
          <div className="p-4">
            <h3 className="text-lg font-semibold">Título 3</h3>
            <p className="text-gray-600">Descripción de la tarjeta 3.</p>
          </div>
        </div>
      </div>
      <div className="carousel-cell p-4">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img className="w-full h-48 object-cover" src="/img/inicio.jpg" alt="Image 4" />
          <div className="p-4">
            <h3 className="text-lg font-semibold">Título 4</h3>
            <p className="text-gray-600">Descripción de la tarjeta 4.</p>
          </div>
        </div>
      </div>
      <div className="carousel-cell p-4">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img className="w-full h-48 object-cover" src="/img/inicio.jpg" alt="Image 5" />
          <div className="p-4">
            <h3 className="text-lg font-semibold">Título 5</h3>
            <p className="text-gray-600">Descripción de la tarjeta 5.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCarousel;
