import React from 'react';
import CardProduct from "./CardProduct";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getEnsaladasGuarniciones } from "../redux/thunks";

const EnsaladasGuarniciones = () =>
{
  const { ensaladasGuarniciones } = useSelector(state => state.carta);
  const dispatch = useDispatch()

  useEffect(() =>
  {
    dispatch(getEnsaladasGuarniciones())
  }, [dispatch]);


  let ensaladas = ensaladasGuarniciones.filter(e => e.section === "ensaladas");
  let guarniciones = ensaladasGuarniciones.filter(e => e.section === "guarniciones");

  return (
    <div className=" w-full h-[94%] mt-2" >
      <div className="w-full h-full grid grid-cols-2 gap-2 text-xs overflow-y-scroll">

        <div className='flex flex-col gap-2 px-2'>
          <>
            <div className='flex items-center gap-1'>
              <div className='rounded-full w-3 h-3 lg:w-4 lg:h-4 bg-[#f6cec6]'></div>
              <h1 className="text-xs">ENSALADAS</h1>
            </div>
            <div className='py-1'>
              {
                ensaladas && ensaladas.map((e) => (
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

        <div className='flex flex-col gap-2 px-2 pt-25 md:pt-12'>
          <>
            <div className='flex items-center gap-1'>
              <div className='rounded-full w-3 h-3 lg:w-4 lg:h-4 bg-[#f6cec6]'></div>
              <h1 className="text-xs">GUARNICIONES</h1>
            </div>
            <div className='py-1'>
              {
                guarniciones && guarniciones.map((e) => (
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


export default EnsaladasGuarniciones;