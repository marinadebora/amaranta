import React from 'react';
import CardProduct from "./CardProduct";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getPostres } from "../redux/thunks";

const Postres = () => {
  const { postres } = useSelector(state => state.carta);
  const dispatch = useDispatch()

  useEffect(() =>
  {
    dispatch(getPostres())
  }, [dispatch]);


  return (
   <div className=" w-full h-[94%]" >
        <div className="h-full grid grid-cols-2 gap-2 text-xs overflow-y-scroll">
          <div className='flex flex-col gap-10'>
            <div className=''>
              <div className='flex items-start gap-2 h-full'>
                <div className='rounded-full w-3 h-3 lg:w-4 lg:h-4 bg-[#f6cec6] mt-1'></div>
                <h1 className="text-sm">POSTRES</h1>
              </div>
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
          </div>
       
        </div>
      </div>
  );
};


export default Postres;