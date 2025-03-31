import React from 'react';
import CardProduct from "./CardProduct";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getBebidas } from "../redux/thunks";

const Bebidas = () =>
{
  const { bebidas } = useSelector(state => state.carta);
  const dispatch = useDispatch()

  useEffect(() =>
  {
    dispatch(getBebidas())
  }, [dispatch]);

  let licuados = bebidas.filter(e => e.section === "licuados");
  let jugos = bebidas.filter(e => e.section === "jugos");
  let refrescos = bebidas.filter(e => e.section === "refrescos");

  return (
    <div className=" w-full h-[94%] " >
      <div className="h-full grid grid-cols-2 gap-2 text-xs overflow-y-scroll">
        <div className='flex flex-col gap-10'>
          <div className=''>
            <div className='flex items-start gap-2 h-full'>
              <div className='rounded-full w-3 h-3 lg:w-4 lg:h-4 bg-[#f6cec6] mt-1'></div>
              <h1 className="text-sm">LICUADOS</h1>
            </div>
            {
              licuados && licuados.map((e) => (
                <CardProduct
                  name={e.name}
                  price={e.price1}
                  description=""
                />

              ))
            }
          </div>
          <div className='flex flex-col gap-3'>
            <div className='w-full flex items-center justify-center'>
              <div className=' w-[60%]'>
                <p className='text-sm'>Jugos</p>
              </div>
              <div className='w-[40%] flex items-center justify-end gap-2'>
                <p>Jarra</p>
                <p>Vaso</p>
              </div>
            </div>
            {
              jugos && jugos.map((e) => (
                <div className='w-full flex items-start justify-between gap-1'>
                  <div className='w-[60%]'>
                    <p>{e.name && e.name}</p>
                    <p className='text-[0.6rem] italic'>({e.description && e.description})</p>
                  </div>
                  <div className='w-[40%] flex items-start justify-end gap-2'>
                    <p>{e.price1 && e.price1}</p>
                    <p>{e.price2 && e.price2}</p>
                  </div>
                </div>
              ))
            }
          </div>




        </div>
        <div className='mt-[5rem]'>
          <div className='flex items-center justify-between gap-2 px-1'>
            <div className='flex gap-1'>
              <div className='rounded-full w-3 h-3 lg:w-4 lg:h-4 bg-[#f6cec6] mt-1'></div>
              <h1 className="text-sm">REFRESCOS</h1>
            </div>
            <div className='flex items-center justify-end gap-4'>
              <p className='text-xs'>500cc</p>
              <p className='text-xs'>1.5L</p>
            </div>
          </div>
          {
            refrescos && refrescos.map((e) => (
              <div className='flex border items-center justify-between'>
                <p>{e.name && e.name}</p>
                <div className='border flex gap-1'>
                  <p>{e.price1 && e.price1}</p>
                  <p>{e.price2 && e.price2}</p>
                </div>
              </div>

            ))
          }
        </div>

      </div>
    </div>
  );
};


export default Bebidas;