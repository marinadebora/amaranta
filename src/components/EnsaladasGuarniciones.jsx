import React from 'react';
import CardProduct from "./CardProduct";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getEnsaladasGuarniciones } from "../redux/thunks";

const EnsaladasGuarniciones = () => {
  const { ensaladasGuarniciones } = useSelector(state => state.carta);
  const dispatch = useDispatch()

  useEffect(() =>
  {
    dispatch(getEnsaladasGuarniciones())
  }, [dispatch]);


  let ensaladas = ensaladasGuarniciones.filter(e => e.section === "ensaladas");
  let guarniciones = ensaladasGuarniciones.filter(e => e.section === "guarniciones");

  return (
     <div className=" w-full h-[94%]" >
         <div className="h-full grid grid-cols-2 gap-2 text-xs overflow-y-scroll">
           <div className='flex flex-col gap-10'>
             <div className=''>
               <div className='flex items-start gap-2 h-full'>
                 <div className='rounded-full w-3 h-3 lg:w-4 lg:h-4 bg-[#f6cec6] mt-1'></div>
                 <h1 className="text-sm">ENSALADAS</h1>
               </div>
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
   
           </div>
           <div className=''>
             <div className='flex items-start gap-2 h-full'>
               <div className='rounded-full w-3 h-3 lg:w-4 lg:h-4 bg-[#f6cec6] mt-1'></div>
               <h1 className="text-sm">GUARNICIONES</h1>
             </div>
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
         </div>
       </div>
  );
};


export default EnsaladasGuarniciones;