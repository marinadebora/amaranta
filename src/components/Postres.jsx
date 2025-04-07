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


  return (
    <div className=" w-full h-[94%] mt-2" >
      <div className="w-full h-full grid grid-cols-2 gap-2 text-xs overflow-y-scroll">

        <div className='flex flex-col gap-2 px-2'>
          <>
            <div className='flex items-center gap-1'>
              <div className='rounded-full w-3 h-3 lg:w-4 lg:h-4 bg-[#f6cec6]'></div>
              <h1 className="text-sm">POSTRES</h1>
            </div>
            <div className='py-2'>
              {
                postres && postres.map((e) => (
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


export default Postres;