import React from 'react';
import CardProduct from "./CardProduct";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getBebidasAlcohol } from "../redux/thunks";
import funcCapitalize from "../utils/capitalizeFirstLatter";

const BebidasAlcohol = () =>
{
  const { bebidasAlcohol } = useSelector(state => state.carta);
  const dispatch = useDispatch()

  useEffect(() =>
  {
    dispatch(getBebidasAlcohol())
  }, [dispatch]);

  let vinosPotreo = bebidasAlcohol.filter(e => e.section === "vinos" && e.bodega.toLowerCase() === "vinos de potrero");
  let vinos = bebidasAlcohol.filter(e => e.section === "vinos" && e.bodega.toLowerCase() != "vinos de potrero");
  let cervezas = bebidasAlcohol.filter(e => e.section === "cervezas");
  let tragosAperitivos = bebidasAlcohol.filter(e => e.section === "tragos y aperitivos");

  return (
    <div className=" w-full h-[95%] mt-2" >
      <div className="w-full h-full grid grid-cols-2 gap-2 text-xs overflow-y-scroll">

        <div className='flex flex-col gap-2 px-2'>
          <>
            <div className='flex items-center gap-1'>
              <div className='rounded-full w-3 h-3 lg:w-4 lg:h-4 bg-[#f6cec6]'></div>
              <h1 className="text-xs">VINOS</h1>
            </div>
            <div className='py-1'>
              <p className='italic text-[0.7rem] pb-1'>Bodega Vinos de Potrero</p>
              {
                vinosPotreo && vinosPotreo.map((e) => (

                  <CardProduct
                    name={e.name}
                    price={e.price1}
                    description=""
                  />

                ))
              }
              {
                vinos && vinos.map((e) => (
                    <CardProduct
                      name={e.name}
                      price={e.price1}
                      description={e.description || ""}
                    />
                 
                ))
              }
            </div>
          </>
          <>
            <div className='flex flex-col'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-1'>
                  <div className='rounded-full w-3 h-3 lg:w-4 lg:h-4 bg-[#f6cec6]'></div>
                  <h1 className="text-xs">CERVEZAS</h1>
                </div>
                <div className='w-[40%] flex items-center justify-end gap-1'>
                  <p className='text-[0.7rem]'>Botella</p>
                  <p className='text-[0.7rem]'>Lata</p>
                </div>
              </div>
              <div className='py-1'>
                {
                  cervezas && cervezas.map((e) => (
                    <div className='w-full flex items-start justify-between'>
                      <div className='w-[60%]'>
                        {e.name && <p className='w-[80%] text-[0.6rem]'>{funcCapitalize(e.name)}</p>}
                        {e.description && <p className='text-[0.6rem] italic'>({e.description})</p>}
                      </div>
                      <div className='w-[40%] flex items-start justify-end gap-2'>
                        {e.price1 && <p className='text-[0.6rem]'>{e.price1}</p>}
                        {e.price2 && <p className='text-[0.6rem]'>{e.price2}</p>}
                      </div>
                    </div>
                  ))
                }
              </div>

            </div>
          </>

        </div>
        <div className='flex flex-col gap-2 px-2 pt-18 md:pt-8'>
          <>
            <div className='flex items-center gap-1'>
              <div className='rounded-full w-3 h-3 lg:w-4 lg:h-4 bg-[#f6cec6]'></div>
              <h1 className="text-xs">TRAGOS Y APERITIVOS</h1>
            </div>
            <div className='py-1'>
              {
                tragosAperitivos && tragosAperitivos.map((e) => (
                  <CardProduct
                    name={funcCapitalize(e.name)}
                    price={e.price1}
                    description=""
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

export default BebidasAlcohol;