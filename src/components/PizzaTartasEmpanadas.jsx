import React from 'react';
import CardProduct from "./CardProduct";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getPizzaTartasEmpanadas } from "../redux/thunks";

const PizzaTartasEmpanadas = () =>
{
  const { pizzaTartasEmpanadas } = useSelector(state => state.carta);
  const dispatch = useDispatch()

  useEffect(() =>
  {
    dispatch(getPizzaTartasEmpanadas())
  }, [dispatch]);

  let pizzas = pizzaTartasEmpanadas.filter(e => e.section === "pizzas");
  let tartas = pizzaTartasEmpanadas.filter(e => e.section === "tartas");
  let empanadas = pizzaTartasEmpanadas.filter(e => e.section === "empanadas");

  return (
    <div className=" w-full h-[94%]" >
         <div className="h-full grid grid-cols-2 gap-2 text-xs overflow-y-scroll">
           <div className='flex flex-col gap-10'>
   
             <div className=''>
               <div className='flex items-start gap-2 h-full'>
               <div className='rounded-full w-3 h-3 lg:w-4 lg:h-4 bg-[#f6cec6] mt-1'></div>
               <h1 className="text-sm">PIZZAS</h1>
               </div>
               {
                 pizzas && pizzas.map((e)=> (
                   <CardProduct
                     name={e.name}
                     price={e.price}
                     description=""
                   />
   
                 ))
               }
             </div>
   
            
             <div className=''>
             <div className='flex items-start gap-2 h-full'>
               <div className='rounded-full w-3 h-3 lg:w-4 lg:h-4 bg-[#f6cec6] mt-1'></div>
               <h1 className="text-sm ">TARTAS</h1>
               </div>
               {
                 tartas && tartas.map(e => (
                   <CardProduct
                     nombre={e.nombre}
                     precio={e.precio}
                     descripcion=""
                   />
   
                 ))
               }
             </div>
           </div>


           <div className='flex flex-col gap-4'>

             <div className="">
             <div className='flex items-start gap-2 h-full'>
               <div className='rounded-full w-3 h-3 lg:w-4 lg:h-4 bg-[#f6cec6] mt-1'></div>
               <h1 className="text-sm">INFUSIONES</h1>
               </div>
               {
                 empanadas && empanadas.map(e => (
                   <CardProduct
                     nombre={e.nombre}
                     precio={e.precio}
                     descripcion=""
                   />
   
                 ))
               }
             </div>
   
           </div>
           
         </div>
       </div>
  );
};


export default PizzaTartasEmpanadas;