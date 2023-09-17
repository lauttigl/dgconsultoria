import React from 'react';
import Navbar from '../navbar/Navbar';

const Contact = ({ setBackgroundImageUrl }) => {
  setBackgroundImageUrl('https://cdn.pixabay.com/photo/2015/11/12/15/43/osh-1040512_1280.jpg');

  return (
    <div>
         <div className="absolute top-0 left-0 right-0 z-10">
          <Navbar />
        </div>
      
      <div className="relative min-h-screen">  
      
        <div className="bg-cover" style={{ backgroundImage: 'url(https://cdn.pixabay.com/photo/2015/11/12/15/43/osh-1040512_1280.jpg)' }}>
            
            
          <div className="mt-40 flex items-center justify-center">
            
            <img
              src="https://i.ibb.co/dpdZWBj/TARJETA-DG.jpg"
              alt="TARJETA-DG"
              className='w-380 mt-32 block'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;




