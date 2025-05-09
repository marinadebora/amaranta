import React from 'react';
import CardProduct from "./CardProduct";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getPostres } from "../redux/thunks";

const Postres = () =>
{
  const { postres } = useSelector(state => state.carta);
  const dispatch = useDispatch()

  useEffect(() =>
  {
    dispatch(getPostres())
  }, [dispatch]);
  let TotalPostres = postres?.filter(e => e.name !== "Adicional");
  let adicional = postres?.filter(e => e.name === "Adicional");

  return (
    <div className=" w-full h-[94%] mt-2" >
      <div className="w-full h-full grid grid-cols-2 gap-2 text-xs overflow-y-scroll">

        <div className='flex flex-col gap-2 px-2'>
          <>
            <div className='flex items-center gap-1'>
              <div className='rounded-full w-3 h-3 lg:w-4 lg:h-4 bg-[#f6cec6]'></div>
              <h1 className="text-xs">POSTRES</h1>
            </div>
            <div className='py-1'>
              {
                TotalPostres && TotalPostres.map((e) => (
                  <CardProduct
                    name={e.name}
                    price={e.price}
                    description={e.description || ""}
                  />

                ))
              }
              {
                adicional.length > 0 && <div className='w-full flex flex-col'>
                  <div className='w-full flex justify-between'>
                    {adicional[0].name && <p className='w-[80%] text-[0.6rem]'>{adicional[0].name}</p>}
                    {adicional[0].price && <div className='w-[20%] text-[0.6rem] flex justify-end'><p>${adicional[0].price}</p></div>}
                  </div>

                  {adicional[0].description && <p className='w-[80%] text-[0.5rem] font-extralight italic'>({adicional[0].description})</p>}

                </div>
              }
            </div>
          </>
        </div>

      </div>
    </div>
  );
};


export default Postres;