import React from 'react';

const Features = () => {
   return (
      <div className='text-center my-16'>
         <h1 className='text-4xl font-semibold text-yellow-500'>Funfacts You Should Know</h1>
         <p className='my-6 px-20 mb-8'>Lorem ipsum dolor sit amet consec tetur adipiscing elit sed do eius modatemp tempor sed magna aliqua elitar magna aliqua enim ad minim veniam magna.</p>
         
         <div className='flex flex-col-reverse lg:flex-row gap-5'>
         <div className='flex justify-between items-center '>
            <div>
               <p className='text-3xl text-gray-400'><span className='text-4xl font-semibold text-yellow-600'>12</span>+</p>
               <p className='text-gray-400'>Years Of Experience</p>
            </div>
            <div>
               <p className='text-3xl text-gray-400'><span className='text-4xl font-semibold text-yellow-600'>183</span>+</p>
               <p className='text-gray-400'>Expert Photographer</p>
            </div>
            <div>
               <p className='text-3xl text-gray-400'><span className='text-4xl font-semibold text-yellow-600'>398</span>+</p>
               <p className='text-gray-400'>Territory Explore</p>
            </div>
            <div>
               <p className='text-3xl text-gray-400'><span className='text-4xl font-semibold text-yellow-600'>38</span>+</p>
               <p className='text-gray-400'>Winning Awards</p>
            </div>
         </div>

         <div className='my-8 lg:my-5'>
            <img className='rounded-xl' src="https://i.ibb.co/C0dwVKz/service1.png" alt="" />
         </div>
         </div>
      </div>
   );
};

export default Features;