import React from 'react';
import Navbar from '../navbar/Navbar';
import { Link } from 'react-router-dom';

const Home = ({ setBackgroundImageUrl }) => {
  setBackgroundImageUrl('https://cdn.pixabay.com/photo/2019/06/14/21/43/hardhat-4274430_1280.jpg');

  return (
    <div className="relative hero min-h-screen" style={{ backgroundImage: 'url(https://cdn.pixabay.com/photo/2019/06/14/21/43/hardhat-4274430_1280.jpg)' }}>
      <div className="absolute top-0 left-0 right-0 z-10"> {/* z-10 para asegurarse de que el Navbar esté encima */}
        <Navbar />
      </div>
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-4xl font-bold text-white">Grupo CONSULTORIA
          </h1>
          <h2 className='text-4xl font-bold text-white'>Seguridad e Higiene y Protección Ambiental</h2>
          <Link to={`/about`}>
          <button className="btn bg-gray-500 text-white btn-xs sm:btn-sm md:btn-md lg:btn-lg m-5">Hace click para saber mas</button>  
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
