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
    <div className=" w-full h-[94%] mt-2" >
      <div className="w-full h-full grid grid-cols-2 gap-2 text-xs overflow-y-scroll">

        <div className='flex flex-col gap-2 px-2'>
          <>
            <div className='flex items-center gap-1'>
              <div className='rounded-full w-3 h-3 lg:w-4 lg:h-4 bg-[#f6cec6]'></div>
              <h1 className="text-sm">LICUADOS</h1>
            </div>
            <div className='py-2'>
              {
                licuados && licuados.map((e) => (
                  <CardProduct
                    name={e.name}
                    price={e.price1}
                    description={e.description || ""}
                  />

                ))
              }
            </div>
          </>
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
                    {e.name && <p className='w-[80%] text-xs'>{funcCapitalize(e.name)}</p>}
                    {e.description && <p className='text-[0.6rem] italic'>({e.description})</p>}
                  </div>
                  <div className='w-[40%] flex items-start justify-end gap-2'>
                    {e.price1 &&<p>{e.price1}</p> }
                    {e.price2 &&<p>{e.price2}</p> }
                  </div>
                </div>
              ))
            }
          </div>
        </div>

        <div className='flex flex-col gap-2 px-2 border'>
          <>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-1'>
                <div className='rounded-full w-3 h-3 lg:w-4 lg:h-4 bg-[#f6cec6]'></div>
                <h1 className="text-sm ">REFRESCOS</h1>
              </div>
              <div className='flex items-center justify-end gap-1'>
                <p className='text-xs md:w-[2.5rem] flex justify-end'>500cc</p>
                <p className='text-xs md:w-[2.5rem] flex justify-end'>1.5L</p>
              </div>
            </div>
            {
              refrescos && refrescos.map((e) => (
                <div className='flex items-center justify-between border'>
                  {e.name && <p className='text-xs'>{funcCapitalize(e.name)}</p>}
                  <div className='flex gap-1'>
                    {e.price1 && <p className='text-xs md:w-[2.5rem] flex justify-end'>${e.price1}</p>}
                    {e.price2 && <p className='text-xs md:w-[2.5rem] flex justify-end'>${e.price2}</p>}
                  </div>
                </div>

              ))
            }

          </>
        </div>

      </div>
    </div>
  );
};


export default Bebidas;