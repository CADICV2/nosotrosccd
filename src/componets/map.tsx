// components/GoogleMap.js o components/GoogleMap.tsx
import React from 'react';

const GoogleMap = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d234.93868540952667!2d-77.02670280195808!3d-12.094885153082986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDA1JzQxLjMiUyA3N8KwMDEnMzYuMCJX!5e1!3m2!1ses-419!2spe!4v1722878014662!5m2!1ses-419!2spe"
      width="600"
      height="450"
      style={{ border: 0 }}
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className='rounded-xl transition duration-300 ease-in-out transform hover:scale-105'
    ></iframe>
  );
};

export default GoogleMap;
