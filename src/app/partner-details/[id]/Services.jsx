// components/ServicesSection.js
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const ServicesSection = ({ services }) => {
    // const services = [
    //     { id: 1, title: 'Hair-Cut, Wash & Style', image: '/img/icon.webp' },
    //     { id: 2, title: 'Hair Colour', image: '/img/icon.webp' },
    //     { id: 3, title: 'Nail Bar', image: '/img/icon.webp' },
    //     { id: 4, title: 'Face', image: '/img/icon.webp' },
    //     { id: 5, title: 'Hair-Cut, Wash & Style', image: '/img/icon.webp' },
    //     { id: 6, title: 'Hair Colour', image: '/img/icon.webp' },
    //     { id: 7, title: 'Nail Bar', image: '/img/icon.webp' },
    //     { id: 8, title: 'Face', image: '/img/icon.webp' },
    //   ];
  return (
    <div id="services" className="mt-3 sm:max-w-[1400px] mx-auto p-2 bg-white ">
      <h2 className="text-2xl sm:text-[32px] font-semibold mb-4">Services</h2>
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
        {services?.map((service) => (
        <Link href={'/service-details'}>
               <div key={service.id} className="text-center">
                  <Image src={service.image_url} alt={service.name} width={100} height={100} className="h-20 sm:h-40 sm:w-40 w-20 rounded-lg mx-auto" />
                  <p className="text-[14px] sm:text-[18px] mt-2">{service.name}</p>
                </div>
         </Link>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
