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
    <div className=" w-full h-[94%] mt-2" >
      <div className="w-full h-full grid grid-cols-2 gap-2 text-xs overflow-y-scroll">

        <div className='flex flex-col gap-2 px-2'>
          <>
            <div className='flex items-center gap-1'>
              <div className='rounded-full w-3 h-3 lg:w-4 lg:h-4 bg-[#f6cec6]'></div>
              <h1 className="text-sm">SANDWICHES</h1>
            </div>
            <div className='py-2'>
              {
                sandwiches && sandwiches.map((e) => (
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
        <div className='flex flex-col gap-2 px-2'>
          <>
            <div className='flex items-center gap-1'>
              <div className='rounded-full w-3 h-3 lg:w-4 lg:h-4 bg-[#f6cec6]'></div>
              <h1 className="text-sm">HAMBUERGUESAS</h1>
            </div>
            <div className='py-2'>
              <p>CARNE</p>
              {
                hamburguesasCarne && hamburguesasCarne.map((e) => (
                  <CardProduct
                    name={e.name}
                    price={e.price}
                    description={e.description || ""}
                  />

                ))
              }
              <p>POLLO</p>
              {
                hamburguesasPollo && hamburguesasPollo.map((e) => (
                  <CardProduct
                    name={e.name}
                    price={e.price}
                    description={e.description || ""}
                  />

                ))
              }
              <p>OPCIONAL</p>
              {
                opcional && opcional.map((e) => (
                  <CardProduct
                    name={e.name || ""}
                    price={e.price || ""}
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


export default EntrePanes;