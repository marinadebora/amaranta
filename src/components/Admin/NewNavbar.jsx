import React, { useState } from 'react';

const NewNavbar = () =>
{
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className='w-full h-[20rem]  text-[#769164] hover:text-[#4a5b3f]'>
      <div className='bg-[#f9eae6] w-full h-[6rem] border flex items-center justify-between'>
        <div><img className='w-[5rem]' src="/amarantaLogo.svg" alt="" /></div>
        <div className='flex gap-10'>
          <button className='flex items-center justify-center gap-2 border hover:bg-[#f2d0c7]'onClick={() => setIsOpen(!isOpen)}>
            <p>Crear Productos</p>
            <svg className="fill-current  h-4 w-4 delay-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M10 12.59l-6.3-6.3a1 1 0 0 1 1.4-1.42L10 10.77l5.9-5.48a1 1 0 0 1 1.4 1.42L11.4 12.6a1 1 0 0 1-1.4 0z" />
            </svg>
          </button>
          <div><p>Editar Productos</p></div>
        </div>
        <div><p>LogOut</p></div>
      </div>
      {
        isOpen && 
        <div className=" fixed top-0 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white w-48 p-2 rounded-lg shadow-lg z-500">
            <ul className="space-y-2 ">
              <li className="py-2 px-4 hover:bg-gray-600 rounded cursor-pointer">Opción 1</li>
              <li className="py-2 px-4 hover:bg-gray-600 rounded cursor-pointer">Opción 2</li>
              <li className="py-2 px-4 hover:bg-gray-600 rounded cursor-pointer">Opción 3</li>
            </ul>
          </div>
      }
    </nav>
  );
};


export default NewNavbar;