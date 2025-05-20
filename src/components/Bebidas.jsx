import React from 'react';
import CardProduct from "./CardProduct";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getBebidas } from "../redux/thunks";
import funcCapitalize from "../utils/capitalizeFirstLatter";

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
    <div className=" w-full h-[90%] md:h-full mt-2" >
      <div className="w-full h-full grid grid-cols-2 gap-2 text-xs overflow-y-scroll">

        <div className='flex flex-col gap-2 px-2'>
          <>
            <div className='flex items-center gap-1'>
              <div className='rounded-full w-3 h-3 lg:w-4 lg:h-4 bg-[#f6cec6]'></div>
              <h1 className="text-xs">LICUADOS</h1>
            </div>
            <div className='py-1'>
              {
                licuados && licuados.map((e) => (
                  <CardProduct
                    name={e.name}
                    price={e.price}
                    description={e.description || ""}
                    key={e.name + Math.random()}
                  />

                ))
              }
            </div>
          </>

          <div className='flex flex-col'>
            <div className='w-full flex items-center justify-center'>
              <div className=' w-[60%]'>
                <p className='text-[0.7rem]'>Jugos</p>
              </div>
              <div className='w-[40%] flex items-center justify-end gap-2'>
                <p className='w-[1.6rem] text-end text-[0.7rem]'>Jarra</p>
                <p className='w-[1.6rem] text-end text-[0.7rem]'>Vaso</p>
              </div>
            </div>
            {
              jugos && jugos.map((e) => (
                <div key={e.name + Math.random()} className='w-full flex items-start justify-between'>
                  <div className='w-[60%]'>
                    {e.name && <p className='w-[80%] text-[0.6rem]'>{funcCapitalize(e.name)}</p>}
                    {e.description && <p className='text-[0.6rem] italic'>({e.description})</p>}
                  </div>
                  <div className='w-[40%] flex items-start justify-end gap-2'>
                    {e.price && e.price !== "0" && <p className='text-[0.6rem]'>${e.price}</p>}
                    {e.price2 && e.price2!=="0"? <p className='text-[0.6rem]'>${e.price2}</p>:<p className='w-[1.6rem]'></p>}
                  </div>
                </div>
              ))
            }
          </div>
        </div>

        <div className='flex flex-col px-2 pt-20 md:pt-12'>
          <>
            <div className='flex items-center justify-between '>
              <div className='flex items-center gap-1'>
                <div className='rounded-full w-3 h-3 lg:w-4 lg:h-4 bg-[#f6cec6]'></div>
                <h1 className="text-xs ">REFRESCOS</h1>
              </div>
              <div className='w-[40%] flex items-start justify-end gap-2'>
                <p className='text-[0.6rem]'>500cc</p>
                <p className='text-[0.6rem]'>1.5L</p>
              </div>
            </div>
            <div className='py-1'>
              {
                refrescos && refrescos.map((e) => (
                  <div key={e.name + Math.random()} className='w-full flex items-start justify-between'>
                    <div className='w-[60%]'>
                      {e.name && <p className='w-[80%] text-[0.6rem]'>{funcCapitalize(e.name)}</p>}
                      {e.description && <p className='text-[0.6rem] italic'>({e.description})</p>}
                    </div>
                    <div className='w-[40%] flex items-start justify-end gap-2'>
                    {e.price && e.price !== "0" && <p className='text-[0.6rem]'>${e.price}</p>}
                    {e.price2 && e.price2!=="0"? <p className='text-[0.6rem]'>${e.price2}</p>:<p className='w-[1.6rem]'></p>}
                    </div>
                  </div>

                ))
              }
            </div>
          </>
        </div>

      </div>
    </div>
  );
};


export default Bebidas;