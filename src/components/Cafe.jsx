import React from 'react';
import PropTypes from 'prop-types';
import CardProduct from "./CardProduct";
import "../index.css"


const Cafe = ({ cafeteria }) =>
{
  let frio = cafeteria.filter(e=>e.description === "frio");
  let especialidad = cafeteria.filter(e=>e.description === "especialidad");
  let clasico = cafeteria.filter(e=>e.description === "clasico");
  let infusiones = cafeteria.filter(e=>e.description === "infusiones");

  return (
    <div className=" w-full h-[90%]" >
      <div className="h-full grid grid-cols-2 gap-4 text-xs overflow-y-scroll px-2">
        <div className='flex flex-col gap-4'>
          <div className=''>
            <h1 className="text-sm">CAFÉ DE ESPECIALIDAD</h1>
            {
              especialidad && especialidad.map((e)=> (
                <CardProduct
                  nombre={e.nombre}
                  precio={e.precio}
                  descripcion={e.descripcion}
                />

              ))
            }
          </div>

          <div  className=''>
            <h1 className="text-sm">CAFÉ FRIOS</h1>
            {
              frio && frio.map(e => (                
                <CardProduct
                  nombre={e.nombre}
                  precio={e.precio}
                  descripcion={e.descripcion}
                />

              ))
            }
          </div>
          <div className=''>
            <h1 className="text-sm ">CLÁSICOS</h1>
            {
              clasico && clasico.map(e => (
                <CardProduct
                  nombre={e.nombre}
                  precio={e.precio}
                  descripcion={e.descripcion}
                />

              ))
            }
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <div className="">
            <h1 className="text-sm">INFUSIONES</h1>
            {
              infusiones && infusiones.map(e => (
                <CardProduct
                  nombre={e.nombre}
                  precio={e.precio}
                  descripcion={e.descripcion}
                />

              ))
            }
          </div>

        </div>
      </div>
    </div>
  );
};

Cafe.propTypes = {
  cafeteria: PropTypes.array,
};

export default Cafe;