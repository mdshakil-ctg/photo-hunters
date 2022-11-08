import React, { useEffect, useState } from 'react';
import ServiceCard from '../serviceCard/ServiceCard';

const Services = () => {
   const [services, setServices] = useState([])
   console.log(services)

   useEffect(()=>{
      fetch('http://localhost:5000/home/services')
      .then(res=> res.json())
      .then(data => setServices(data))
   },[])
   return (
      <div>
         <h1>this is service page.{services.length}</h1>
         <div className='grid lg:grid-cols-3 gap-5'>
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