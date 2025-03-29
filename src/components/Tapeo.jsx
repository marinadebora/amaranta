import React from 'react';
import CardProduct from './CardProduct';
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase/config";
const Tapeo = () =>
{
  const [tapeo, setTapeo] = useState([]);

  useEffect(() =>
  {
    const tapeoRef = collection(db, "tapeo")
    getDocs(tapeoRef)
      .then(res =>
      {

        const arr = res.docs.map(e => ({ ...e.data(), id: e.id }))
        setTapeo([...arr])
      })
  }, []);

  let picadasCalientes = tapeo?.filter(e => e.section === "picadas"&&e.name === "hot" );
  let picadasClasicas = tapeo?.filter(e => e.section === "picadas" && e.name === "classics");
  let tapeos = tapeo?.filter(e => e.section === "picadas" && e.name !== "classics"&& e.name !== "hot" );
  return (
    <div className=" w-full h-[94%]" >
      <div className="h-full grid grid-cols-2 gap-2 text-xs overflow-y-scroll">
        <div className='flex flex-col gap-10'>

          <div className='flex flex-col gap-8'>
            <div className='flex items-start gap-2 h-[2rem]'>
              <div className='rounded-full w-3 h-3 lg:w-4 lg:h-4 bg-[#f6cec6] mt-1'></div>
              <h1 className="text-sm">PICADAS</h1>
            </div>
            <div>
            <p className='text-sm'>Calientes</p>
           {
              picadasCalientes&&picadasCalientes.map(e=>(
                 <div className='flex flex-col gap-4'>
                <p>({e.description})</p>
                <div className='flex w-full items-center justify-between'>
                  <p>Para 2</p>
                  <p>{e.price1}</p>
                  </div>
                  <div className='flex w-full items-center justify-between'>
                  <p>Para 4</p>
                  <p>{e.price2}</p>
                  </div>
               </div>
                ))
            
            } 
            </div>

            <div>
            <p className='text-sm'>Clasicas</p>
            {
              picadasClasicas&&picadasClasicas.map(e=>(
                 <div className='flex flex-col gap-4'>
                <p>({e.description})</p>
                <div className='flex w-full items-center justify-between'>
                  <p>Para 2</p>
                  <p>{e.price1}</p>
                  </div>
                  <div className='flex w-full items-center justify-between'>
                  <p>Para 4</p>
                  <p>{e.price2}</p>
                  </div>
               </div>
                ))
            
            } 
            </div>
          
        
          </div>

        </div>

        <div className='flex flex-col gap-4'>

          <div className="">
            <div className='flex items-start gap-2 h-full'>
              <div className='rounded-full w-3 h-3 lg:w-4 lg:h-4 bg-[#f6cec6] mt-1'></div>
              <h1 className="text-sm">Tapeo</h1>
            </div>
            {
              tapeos && tapeos.map((e) => (
                <CardProduct
                  name={e.name}
                  price={e.price}
                  description={e.description}
                />

              ))
            }{ 

            }
          </div>

        </div>
      </div>
    </div>
  );
};


export default Tapeo;