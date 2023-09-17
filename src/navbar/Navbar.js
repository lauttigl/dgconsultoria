import React from 'react'
import { Link } from 'react-router-dom';



const Navbar = ({ backgroundImageUrl }) => {
    const navbarStyle = {
      backgroundImage: `url(${backgroundImageUrl})`,
    };

    return (
      <nav className="bg-transparent p-4 flex items-center justify-between">
        <div className=" ml-20 flex items-center">
        
          <div className="h-full"><img src="https://i.ibb.co/xfHskNp/LOGO-DG-removebg-preview.png" alt="LOGO-DG-removebg-preview" className='h-28'/></div>
        </div>
        <ul className=" flex space-x-20  text-black" >
            <Link to={`/`}>
        <li ><a href="#" className="hover:text-gray-300 ">Inicio</a></li>
        </Link>
        <Link to= {`/about`}>
        <li><a href="#" className="hover:text-gray-300">Nosotros</a></li>
        </Link>
        <li><a href="#" className="hover:text-gray-300">Servicios</a></li>
        <Link to={`/contact`}>
        <li><a href="#" className="hover:text-gray-300">Contacto</a></li></Link>
      </ul>
      <div className="m-r-10"></div> {/* Espacio en el margen derecho */}
      </nav>
    );
  };
  
  export default Navbar;
