import React from 'react';
import CardProduct from "./CardProduct";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getCafeteria } from '../redux/thunks';

const Cafe = () =>
{
  const { cafeteria } = useSelector(state => state.carta);

  const dispatch = useDispatch()
  useEffect(() =>
  {
    dispatch(getCafeteria())

  }, [dispatch]);

  let frio = cafeteria.filter(e => e.section === "cold");
  let especialidad = cafeteria.filter(e => e.section === "specialty");
  let clasico = cafeteria.filter(e => e.section === "classics");
  let infusiones = cafeteria.filter(e => e.section === "infusions");

  return (
    <div className=" w-full h-[94%] mt-2" >
      <div className="w-full h-full grid grid-cols-2 gap-2 text-xs overflow-y-scroll">

        <div className='flex flex-col gap-2 px-2'>
          <>
            <div className='flex items-center gap-1'>
              <div className='rounded-full w-3 h-3 lg:w-4 lg:h-4 bg-[#f6cec6]'></div>
              <h1 className="text-sm">CAFÉ DE ESPECIALIDAD</h1>
            </div>
            <div className='py-2'>
              {
                especialidad && especialidad.map((e) => (
                  <CardProduct
                    name={e.name}
                    price={e.price}
                    description={e.description || ""}
                  />

                ))
              }
            </div>
          </>
          <>
            <div className='flex items-center gap-1'>
              <div className='rounded-full w-3 h-3 lg:w-4 lg:h-4 bg-[#f6cec6]'></div>
              <h1 className="text-sm ">CLÁSICOS</h1>
            </div>
            <div className='py-2'>
              {
                clasico && clasico.map(e => (
                  <CardProduct
                    nombre={e.nombre}
                    precio={e.precio}
                    description={e.description || ""}
                  />

                ))
              }
            </div>
          </>
        </div>

        <div className='flex flex-col gap-2 px-2'>
          {
            frio.length > 0 &&
            <>
              <div className='flex items-center gap-1'>
                <div className='rounded-full w-3 h-3 lg:w-4 lg:h-4 bg-[#f6cec6]'></div>
                <h1 className="text-sm">CAFÉ FRIOS</h1>
              </div>
              <div className='py-2'>
                {
                  frio.map(e => (
                    <CardProduct
                      nombre={e.nombre}
                      precio={e.precio}
                      description={e.description || ""}
                    />

                  ))
                }
              </div>
            </>
          }
          <>
            <div className='flex items-center gap-1'>
              <div className='rounded-full w-3 h-3 lg:w-4 lg:h-4 bg-[#f6cec6]'></div>
              <h1 className="text-sm">INFUSIONES</h1>
            </div>
            {
              infusiones && infusiones.map(e => (
                <CardProduct
                  nombre={e.nombre}
                  precio={e.precio}
                  description={e.description || ""}
                />

              ))
            }
          </>

        </div>

      </div>
    </div>
  );
};



export default Cafe;