import React from 'react';
import CardProduct from "./CardProduct";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getBebidasAlcohol } from "../redux/thunks";
const BebidasAlcohol = () =>
{
  const { bebidasAlcohol } = useSelector(state => state.carta);
  const dispatch = useDispatch()

  useEffect(() =>
  {
    dispatch(getBebidasAlcohol())
  }, [dispatch]);

  let vinosPotreo = bebidasAlcohol.filter(e => e.section === "vinos" && e.bodega === "vinos de potrero");
  let vinos = bebidasAlcohol.filter(e => e.section === "vinos" && e.bodega != "vinos de potrero");
  let cervezas = bebidasAlcohol.filter(e => e.section === "cervezas");
  let tragosAperitivos = bebidasAlcohol.filter(e => e.section === "tragos y aperitivos");
  console.log(bebidasAlcohol)
  return (
    <div className=" w-full h-[94%] " >
      <div className="h-full grid grid-cols-2 gap-2 text-xs overflow-y-scroll">
        <div className='flex flex-col gap-10'>

          <div className='flex flex-col gap-2'>
            <div className='flex items-start gap-2'>
              <div className='rounded-full w-3 h-3 lg:w-4 lg:h-4 bg-[#f6cec6] mt-1'></div>
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
                      description=""
                    />
                  </div>
                ))
              }
            </div>

          </div>

          <div className='flex flex-col gap-3'>
            <div className='w-full flex items-center justify-center'>
              <div className=' w-[60%] flex gap-1 items-center '>
                <div className='rounded-full w-3 h-3 lg:w-4 lg:h-4 bg-[#f6cec6] mt-1'></div>
                <h1 className="text-sm">CERVEZAS</h1>
              </div>
              <div className='w-[40%] flex items-center justify-end gap-2'>
                <p>Botella</p>
                <p>Lata</p>
              </div>
            </div>
            {
              cervezas && cervezas.map((e) => (
                <div className='w-full flex items-start justify-between gap-1'>
                  <div className='w-[60%]'>
                    <p>{e.name && e.name}</p>
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
        <div className=''>
          <div className='flex items-start gap-2'>
            <div className='rounded-full w-3 h-3 lg:w-4 lg:h-4 bg-[#f6cec6] mt-1'></div>
            <h1 className="text-sm">TRAGOS Y APERITIVOS</h1>
          </div>
          {
            tragosAperitivos && tragosAperitivos.map((e) => (
              <CardProduct
                name={e.name}
                price={e.price1}
                description=""
              />

            ))
          }
        </div>

      </div>
    </div>
  );
};


export default BebidasAlcohol;