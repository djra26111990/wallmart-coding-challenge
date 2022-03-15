import React from 'react'
export const Footer = () => {
    return (
      <div className="flex flex-wrap items-center px-4 flex-col justify-center md:flex-row bg-venice-blue-600 py-4">
        <span className="text-white text-xs mx-4 align-middle">&copy;{new Date().getFullYear()} - Razón Social: Lider Domicilio Ventas y Distribución Limitada, RUT: 78.968.610-6, es administrada y representada por Sermob Limitada, la que a su vez es representada por Matías Puente S. Dirección: Avenida del Valle N° 725, Huechuraba, Chile.</span>
      </div>
    );
  };
  