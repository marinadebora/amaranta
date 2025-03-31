import React from 'react';
import CardProduct from "./CardProduct";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAlPlato } from "../redux/thunks";

const AlPlato = () =>
{
  const { alPlato } = useSelector(state => state.carta);
  const dispatch = useDispatch()

  useEffect(() =>
  {
    dispatch(getAlPlato())
  }, [dispatch]);


  let pastas = alPlato.filter(e => e.section === "pastas");
  let carnesYPollos = alPlato.filter(e => e.section === "carnes y pollos");
  return (
    <div className=" w-full h-[94%]" >
      <div className="h-full grid grid-cols-2 gap-2 text-xs overflow-y-scroll">
        <div className='flex flex-col gap-10'>
          <div className=''>
            <div className='flex items-start gap-2 h-full'>
              <div className='rounded-full w-3 h-3 lg:w-4 lg:h-4 bg-[#f6cec6] mt-1'></div>
              <h1 className="text-sm">PASTAS</h1>
            </div>
            {
              pastas && pastas.map((e) => (
                <CardProduct
                  name={e.name}
                  price={e.price}
                  description=""
                />

              ))
            }
          </div>

        </div>
        <div className=''>
          <div className='flex items-start gap-2 h-full'>
            <div className='rounded-full w-3 h-3 lg:w-4 lg:h-4 bg-[#f6cec6] mt-1'></div>
            <h1 className="text-sm">CARNES Y POLLOS</h1>
          </div>
          {
            carnesYPollos && carnesYPollos.map((e) => (
              <CardProduct
                name={e.name}
                price={e.price}
                description=""
              />

            ))
          }
        </div>
      </div>
    </div>
  );
};

export default AlPlato;