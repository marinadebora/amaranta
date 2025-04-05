import React from 'react';
import CardProduct from './CardProduct';
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getPasteleria } from '../redux/thunks';

const Pasteleria = () =>
{
  const { pasteleria } = useSelector(state => state.carta);
  const dispatch = useDispatch()
  useEffect(() =>
  {
    dispatch(getPasteleria())
  }, [dispatch]);

  let tortas = pasteleria?.filter(e => e.section === "cakes");
  let budines = pasteleria?.filter(e => e.section === "puddings");
  let bowlsSaludables = pasteleria?.filter(e => e.section === "healthy bowls");
  let tostados = pasteleria?.filter(e => e.section === "toasted");

  return (
    <div className=" w-full h-[94%]" >
      <div className="h-full grid grid-cols-2 gap-2 text-xs overflow-y-scroll">
        <div className='flex flex-col gap-10'>

          <div className=''>
            <div className='flex items-start gap-2 h-full'>
              <div className='rounded-full w-3 h-3 lg:w-4 lg:h-4 bg-[#f6cec6] mt-1'></div>
              <h1 className="text-sm">TORTAS</h1>
            </div>
            {
              tortas.length > 0 && tortas.map((e) => (
                <CardProduct
                  name={e.name}
                  price={e.price}
                  description={e.description || ""}
                />

              ))
            }
          </div>

          <div className=''>
            <div className='flex items-start gap-2 h-full'>
              <div className='rounded-full w-3 h-3 lg:w-4 lg:h-4 bg-[#f6cec6] mt-1'></div>
              <h1 className="text-sm ">BUDINES</h1>
            </div>
            {
              budines && budines.map(e => (
                <CardProduct
                  nombre={e.nombre}
                  precio={e.precio}
                  description={e.description || ""}
                />

              ))
            }
          </div>
        </div>

        <div className='flex flex-col gap-4'>

          <div className="">
            <div className='flex items-start gap-2 h-full'>
              <div className='rounded-full w-3 h-3 lg:w-4 lg:h-4 bg-[#f6cec6] mt-1'></div>
              <h1 className="text-sm">BOWLS SALUDABLES</h1>
            </div>
            {
              bowlsSaludables && bowlsSaludables.map(e => (
                <CardProduct
                  nombre={e.nombre}
                  precio={e.precio}
                  description={e.description || ""}
                />

              ))
            }
          </div>

          <div className="">
            <div className='flex items-start gap-2 h-full'>
              <div className='rounded-full w-3 h-3 lg:w-4 lg:h-4 bg-[#f6cec6] mt-1'></div>
              <h1 className="text-sm">TOSTADOSS</h1>
            </div>
            {
              tostados && tostados.map(e => (
                <CardProduct
                  nombre={e.nombre}
                  precio={e.precio}
                  description={e.description || ""}
                />
              ))
            }
          </div>

        </div>
      </div>
    </div>
  );
};

export default Pasteleria;