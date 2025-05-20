import React from 'react';
import CardProduct from "./CardProduct";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getEntrePanes } from "../redux/thunks";

const EntrePanes = () =>
{
  const { entrePanes } = useSelector(state => state.carta);
  const dispatch = useDispatch()

  useEffect(() =>
  {
    dispatch(getEntrePanes())
  }, [dispatch]);


  let sandwiches = entrePanes.filter(e => e.section === "sandwiches");
  let hamburguesasCarne = entrePanes.filter(e => e.section === "hamburguesas" && e.subSection === "carne");
  let hamburguesasPollo = entrePanes.filter(e => e.section === "hamburguesas" && e.subSection === "pollo");
  let opcional = entrePanes.filter(e => e.section === "hamburguesas" && e.subSection === "opcional");

  return (
    <div className=" w-full h-[90%] md:h-full mt-2" >
      <div className="w-full h-[80%] grid grid-cols-2 gap-2 text-xs overflow-y-scroll">

        <div className='flex flex-col gap-2 px-2'>
          <>
            <div className='flex items-center gap-1'>
              <div className='rounded-full w-3 h-3 lg:w-4 lg:h-4 bg-[#f6cec6]'></div>
              <h1 className="text-xs">SANDWICHES</h1>
            </div>
            <div className='py-1'>
              {
                sandwiches && sandwiches.map((e) => (
                  <CardProduct
                    name={e.name}
                    price={e.price}
                    description={e.description || ""}
                    key={e.name + Math.random()}
                  />

                ))
              }
            </div>
          </>
        </div>
        <div className='flex flex-col gap-2 px-2'>
          <>
            <div className='flex items-center gap-1 pt-12'>
              <div className='rounded-full w-3 h-3 lg:w-4 lg:h-4 bg-[#f6cec6]'></div>
              <h1 className="text-xs ">HAMBUERGUESAS</h1>
            </div>
            <div className='flex flex-col gap-2'>
            <div className=''>
              <p className='text-[0.7rem] mb-1'>CARNE</p>
              {
                hamburguesasCarne && hamburguesasCarne.map((e) => (
                  <CardProduct
                  name={e.name}
                  price={e.price}
                  description={e.description || ""}
                  key={e.name + Math.random()}
                  />
                  
                ))
              }
              </div>
              <div className=''>
              <p className='text-[0.7rem] mb-1'>POLLO</p>
              {
                hamburguesasPollo && hamburguesasPollo.map((e) => (
                  <CardProduct
                  name={e.name}
                  price={e.price}
                  description={e.description || ""}
                  key={e.name + Math.random()}
                  />
                  
                ))
              }
              </div>
              <div>
              <p className='text-[0.7rem] mb-1'>OPCIÓN VEGGIE</p>
              {
                opcional && opcional.map((e) => (
                  <CardProduct
                    name={e.name || ""}
                    price={e.price || ""}
                    description={e.description || ""}
                    key={e.name + Math.random()}
                  />

                ))
              }
              </div>
              </div>
          </>
        </div>
      </div>
    </div>
  );
};


export default EntrePanes;