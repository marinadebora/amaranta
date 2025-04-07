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
    <div className=" w-full h-[94%] mt-2" >
      <div className="w-full h-full grid grid-cols-2 gap-2 text-xs overflow-y-scroll">

        <div className='flex flex-col gap-2 px-2'>

          <div className='flex flex-col gap-2'>
            <div className='flex items-center gap-1'>
              <div className='rounded-full w-3 h-3 lg:w-4 lg:h-4 bg-[#f6cec6]'></div>
              <h1 className="text-sm">VINOS</h1>
            </div>
            <div className='flex flex-col gap-2'>
              <div>
                <p className='italic'>Bodega Vinos de Potrero</p>
                {
                  vinosPotreo && vinosPotreo.map((e) => (

                    <CardProduct
                      name={e.name}
                      price={e.price1}
                      description=""
                    />

                  ))
                }
              </div>

              {
                vinos && vinos.map((e) => (
                  <div >
                    <p className='italic'>{e.bodega}</p>
                    <CardProduct
                      name={e.name}
                      price={e.price1}
                      description={e.description || ""}
                    />
                  </div>
                ))
              }
            </div>

          </div>

          <div className='flex flex-col gap-3'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-1'>
                <div className='rounded-full w-3 h-3 lg:w-4 lg:h-4 bg-[#f6cec6]'></div>
                <h1 className="text-sm">CERVEZAS</h1>
              </div>
              <div className='flex items-center justify-end gap-1'>
                <p className='text-xs md:w-[2.5rem] flex justify-end'>Botella</p>
                <p className='text-xs md:w-[2.5rem] flex justify-end'>Lata</p>
              </div>
            </div>
            {
              cervezas && cervezas.map((e) => (
                <div>
                  <div className='w-full flex items-start justify-between gap-1'>
                    <div className='flex items-center justify-between '>
                      {e.name && <p className='text-xs'>{funcCapitalize(e.name)}</p>}

                    </div>
                    <div className='flex items-center justify-end gap-1'>
                      {e.price1 && <p className='text-xs md:w-[2.5rem] flex justify-end'>${e.price1}</p>}
                      {e.price2 && <p className='text-xs md:w-[2.5rem] flex justify-end '>${e.price2}</p>}
                    </div>
                  </div>
                  {e.description && <p className='w-[80%]'>{e.description}</p>}
                </div>
              ))
            }
          </div>

        </div>
        <div className='flex flex-col gap-2 px-2'>
          <>
            <div className='flex items-center gap-1'>
              <div className='rounded-full w-3 h-3 lg:w-4 lg:h-4 bg-[#f6cec6]'></div>
              <h1 className="text-sm">TRAGOS Y APERITIVOS</h1>
            </div>
            {
              tragosAperitivos && tragosAperitivos.map((e) => (
                <CardProduct
                  name={funcCapitalize(e.name)}
                  price={e.price1}
                  description=""
                />

              ))
            }
          </>
        </div>
      </div>
    </div>
  );
};


export default BebidasAlcohol;