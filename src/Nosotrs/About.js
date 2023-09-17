import React from 'react'
import Navbar from '../navbar/Navbar';
import { Link } from 'react-router-dom';

const About = ({ setBackgroundImageUrl }) => {
    setBackgroundImageUrl('https://cdn.pixabay.com/photo/2017/09/18/16/36/building-2762319_1280.jpg');

    return (
        <div>
    <div className="relative hero min-h-screen" style={{ backgroundImage: 'url(https://cdn.pixabay.com/photo/2017/09/18/16/36/building-2762319_1280.jpg)' }}>
      <div className="absolute top-0 left-0 right-0 z-10"> {/* z-10 para asegurarse de que el Navbar esté encima */}
        <Navbar />
        </div>
        <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold text-white">Sobre Nosotros</h1>
          </div>
          </div>
        </div>
        <div className="card-normal m-5 w-auto bg-base-100 shadow-xl text-center ">
  <figure className='flex justify-center items-center'><img src="https://i.ibb.co/fr7jxZT/DG-FINAL.png" alt="DG-FINAL" className='' /></figure>
  <div className="card-body">
    <p className='text-lg m-5'>Somos una consultoría en Seguridad e Higiene en el Trabajo y protección 
Ambiental creada por un grupo de profesionales del área, especializados en 
brindar un plan integral acorde a cada cliente y a cada rama de la industria en 
base a su necesidad.
Hemos logrado que la calidad de los servicios que brindamos sea de altos 
estándares y nuestro objetivo es aportar al cliente un seguimiento durante el 
desarrollo de sus actividades, con el fin de contribuir a la mejora de su 
desempeño, crecimiento y rentabilidad
DG está conformada por personas competentes y eficaces que poseen el 
entusiasmo y las ganas que nos ayudan a superarnos día a día. Somos un 
grupo de personas orientadas a una modalidad de trabajo profesional y en 
equipo. Teniendo como compromisos: Responsabilidad, Superación, 
Lealtad, Calidad, Entusiasmo y Capacidad de respuesta. 
  Un compromiso permanente con los valores 
humanos, la excelencia en la calidad de los servicios, y un 
desarrollo continúo para mejorar las condiciones y medios 
laborales de nuestros clientes.
Brindamos un servicio adaptable y personalizado, 
desarrollando un Equipo Técnico a las medidas y necesidades de su 
empresa, conformando un sistema de gestión integral, tanto en el área 
de Seguridad e Higiene, como en el marco técnico legal y protección 
Ambiental. Constituyendo un valioso soporte para todas y cada una de 
las áreas de su empresa.
Ofrecemos un programa integral de mejoramiento en la prevención de 
los riesgos, acompañado por el desarrollo de un plan de capacitación. 
Uno de los Pilares fundamentales para el desarrollo de la Seguridad e 
Higiene y protección Ambiental. 
  Conformar una empresa líder apoyando nuestra gestión en la 
formación, desarrollo y conservación de un equipo humano 
altamente profesional con una genuina vocación de servicio y 
los más elevados principios éticos.</p>
<Link to={`/services`}>
<button className='btn bg-green-200 '>Nuestros Servicios</button>
</Link>
    <div className="card-actions justify-end">
    
    </div>
  </div>
</div>
<div>
  <div>

</div>
  </div>
        </div>
        
    )
    }
export default About
