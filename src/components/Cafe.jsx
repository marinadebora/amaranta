import React from 'react';
import CardProduct from "./CardProduct";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase/config";


const Cafe = () =>
{
  const [cafeteria, setCafeteria] = useState([]);
    useEffect(() => {
     const cafeteriaRef = collection(db,"cafeteria")
      getDocs(cafeteriaRef)
      .then(res=>{
        
        const arr = res.docs.map(e=>({...e.data(),id:e.id}))
        setCafeteria([...arr])
      })
    }, []);
  let frio = cafeteria.filter(e=>e.section === "cold");
  let especialidad = cafeteria.filter(e=>e.section === "specialty");
  let clasico = cafeteria.filter(e=>e.section === "classics");
  let infusiones = cafeteria.filter(e=>e.section === "infusions");

  return (
    <div className=" w-full h-[94%]" >
      <div className="h-full grid grid-cols-2 gap-2 text-xs overflow-y-scroll">
        <div className='flex flex-col gap-10'>

          <div className=''>
            <div className='flex items-start gap-2 h-full'>
            <div className='rounded-full w-3 h-3 lg:w-4 lg:h-4 bg-[#f6cec6] mt-1'></div>
            <h1 className="text-sm">CAFÉ DE ESPECIALIDAD</h1>
            </div>
            {
              especialidad && especialidad.map((e)=> (
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
            <h1 className="text-sm ">CLÁSICOS</h1>
            </div>
            {
              clasico && clasico.map(e => (
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
          {
            frio.length > 0 &&
            <div  className=''>
               <div className='flex items-start gap-2 h-full'>
            <div className='rounded-full w-3 h-3 lg:w-4 lg:h-4 bg-[#f6cec6] mt-1'></div>
            <h1 className="text-sm">CAFÉ FRIOS</h1>
            </div>
            {
              frio.map(e => (                
                <CardProduct
                  nombre={e.nombre}
                  precio={e.precio}
                  descripcion=""
                />

              ))
            }
              </div>
          }
       
        
          <div className="">
          <div className='flex items-start gap-2 h-full'>
            <div className='rounded-full w-3 h-3 lg:w-4 lg:h-4 bg-[#f6cec6] mt-1'></div>
            <h1 className="text-sm">INFUSIONES</h1>
            </div>
            {
              infusiones && infusiones.map(e => (
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



export default Cafe;