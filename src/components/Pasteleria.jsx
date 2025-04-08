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
    <div className=" w-full h-[94%] mt-2" >
      <div className="w-full h-full grid grid-cols-2 gap-2 text-xs overflow-y-scroll">

        <div className='flex flex-col gap-2 px-2'>
          <>
            <div className='flex items-center gap-1'>
              <div className='rounded-full w-3 h-3 lg:w-4 lg:h-4 bg-[#f6cec6]'></div>
              <h1 className="text-sm">TORTAS</h1>
            </div>

            <div className='py-2'>
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
          </>
          <>
          <div className='flex items-center gap-1'>
              <div className='rounded-full w-3 h-3 lg:w-4 lg:h-4 bg-[#f6cec6]'></div>
              <h1 className="text-sm ">BUDINES</h1>
            </div>
            <div className='py-2'>
              {
                budines && budines.map(e => (
                  <CardProduct
                  name={e.name}
                  price={e.price}
                  description={e.description || ""}
                  />

                ))
              }
            </div>
          </>

        </div>

        <div className='flex flex-col gap-2 px-2'>
        <>
          <div className='flex items-center gap-1'>
              <div className='rounded-full w-3 h-3 lg:w-4 lg:h-4 bg-[#f6cec6]'></div>
              <h1 className="text-sm">BOWLS SALUDABLES</h1>
            </div>
            <div className='py-2'>
              {
                bowlsSaludables && bowlsSaludables.map(e => (
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
              <h1 className="text-sm">TOSTADOSS</h1>
            </div>
            <div className="py-2">
              {
                tostados && tostados.map(e => (
                  <CardProduct
                  name={e.name}
                  price={e.price}
                  description={e.description || ""}
                  />
                ))
              }
            </div>
          </>

        </div>

      </div>
    </div>
  );
};

export default Pasteleria;