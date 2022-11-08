import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../serviceCard/ServiceCard';

const Services = () => {
   const services = useLoaderData();
   // const [services, setServices] = useState([])
   console.log(services)

   
   return (
      <div>
         <h1>this is service page.{services.length}</h1>
        <div className='grid lg:grid-cols-3 gap-10 my-24'>
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