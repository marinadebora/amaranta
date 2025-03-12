import React from 'react';
import PropTypes from 'prop-types';
import CardProduct from "./CardProduct";
import "../index.css"


const Cafe = ({ cafeteria }) =>
{
  return (
    <div className=" w-full h-[90%]">
      <div className="h-full grid grid-cols-2 gap-4 text-xs overflow-y-scroll">
        <div className='flex flex-col gap-4'>
          <div className=''>
            <h1 className="text-sm">CAFÉ DE ESPECIALIDAD</h1>
            {
              cafeteria && cafeteria.map(e => (
                e.descripcion === "especialidad" &&
                <CardProduct
                  nombre={e.nombre}
                  precio={e.precio}
                  descripcion={e.descripcion}
                />

              ))
            }
          </div>

          <div className=''>
            <h1 className="text-sm">CAFÉ FRIOS</h1>
            {
              cafeteria && cafeteria.map(e => (
                e.descripcion === "frio" &&
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
              cafeteria && cafeteria.map(e => (
                e.descripcion === "clasico" &&
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
              cafeteria && cafeteria.map(e => (
                e.descripcion === "infusiones" &&
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
  cafeteria: PropTypes.array
};

export default Cafe;