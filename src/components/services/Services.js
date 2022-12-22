import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import ServiceCard from '../serviceCard/ServiceCard';

const Services = () => {
   useTitle("Services")
   const services = useLoaderData();
      
   return (
      <div>
         <h1 className='text-yellow-500 text-center font-semibold text-4xl mt-10'>Exclusive services</h1>
         <p className='text-center mt-3'>I maintain the best services for our honurable clints. <br /> Feelfree feedback me as contact information.</p>
        <div className='grid grid-cols-1 lg:grid-cols-3 p-5 gap-10 mt-10 mb-24'>
        {
            services.map(service => <ServiceCard 
            key={service._id}
            service={service}
            ></ServiceCard>)
         }
        </div>
      </div>
   );
};

export default Services;