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

  let frio = cafeteria?.filter(e => e.section === "cold");
  let especialidad = cafeteria?.filter(e => e.section === "specialty");
  let clasico = cafeteria?.filter(e => e.section === "classics");
  let infusiones = cafeteria?.filter(e => e.section === "infusions");

  return (
    <div className=" w-full h-[90%] mt-2" >
      <div className="w-full h-full grid grid-cols-2 gap-2 text-xs overflow-y-scroll">

        <div className='flex flex-col gap-2 px-2'>
          <>
            <div className='flex items-center gap-1'>
              <div className='rounded-full w-3 h-3 lg:w-4 lg:h-4 bg-[#f6cec6]'></div>
              <h1 className="text-xs">CAFÉ DE ESPECIALIDAD</h1>
            </div>
            <div className='py-1'>
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
          {
            frio.length > 0 &&
            <>
              <div className='flex items-center gap-1'>
                <div className='rounded-full w-3 h-3 lg:w-4 lg:h-4 bg-[#f6cec6]'></div>
                <h1 className="text-xs">CAFÉ FRIOS</h1>
              </div>
              <div className='py-1'>
                {
                  frio.map(e => (
                    <CardProduct
                    name={e.name}
                  price={e.price}
                  description={e.description || ""}
                    />

                  ))
                }
              </div>
            </>
          }
        </div>

        <div className='flex flex-col gap-2 px-2 pt-20 md:pt-8 '>
           <>
            <div className='flex items-center gap-1'>
              <div className='rounded-full w-3 h-3 lg:w-4 lg:h-4 bg-[#f6cec6]'></div>
              <h1 className="text-xs ">CLÁSICOS</h1>
            </div>
            <div className='py-1'>
              {
                clasico && clasico.map(e => (
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
              <h1 className="text-xs">INFUSIONES</h1>
            </div>
            <div className='py-1'>
            {
              infusiones && infusiones.map(e => (
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



export default Cafe;