import React from 'react';
import CardProduct from './CardProduct';
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getTapeo } from '../redux/thunks';


const Tapeo = () =>
{
  const { tapeo } = useSelector(state => state.carta);
  const dispatch = useDispatch();
  useEffect(() =>
  {
    dispatch(getTapeo())
  }, [dispatch]);

  let picadasCalientes = tapeo?.filter(e => e.section === "picadas" && e.subSection === "calientes");
  let picadasClasicas = tapeo?.filter(e => e.section === "picadas" && e.subSection === "clasicas");
  let tapeos = tapeo?.filter(e => e.section === "tapeo" );
  return (
    <div className=" w-full h-[94%] mt-2" >
      <div className="w-full h-full grid grid-cols-2 gap-2 text-xs overflow-y-scroll">
        <div className='flex flex-col gap-2 px-2'>
            <div className='flex items-center gap-1'>
              <div className='rounded-full w-3 h-3 lg:w-4 lg:h-4 bg-[#f6cec6]'></div>
              <h1 className="text-sm">PICADAS</h1>
            </div> 
      
            <div className=''>
              <div className='py-1'>
              <p className='text-sm'>Calientes</p>
              {
                picadasCalientes && picadasCalientes.map(e => (
                  <div className='flex flex-col gap-4'>
                    {e.description && <p className='w-[90%]'>({e.description})</p>}
                    <div className='flex w-full items-center justify-between'>
                      <p>Para 2</p>
                      {e.price1 && <p>${e.price1}</p>}
                    </div>
                    <div className='flex w-full items-center justify-between'>
                      <p>Para 4</p>
                      {e.price2 && <p>${e.price2}</p>}
                    </div>
                  </div>
                ))

              }
              
            </div>

           <div>
              <p className='text-sm'>Clasicas</p>
              {
                picadasClasicas && picadasClasicas.map(e => (
                  <div className='flex flex-col gap-4'>
                  {e.description && <p className='w-[90%]'>({e.description})</p>}
                  <div className='flex w-full items-center justify-between'>
                    <p>Para 2</p>
                    {e.price1 && <p>${e.price1}</p>}
                  </div>
                  <div className='flex w-full items-center justify-between'>
                    <p>Para 4</p>
                    {e.price2 && <p>${e.price2}</p>}
                  </div>
                  </div>
                ))

              }
            </div>

          </div>

        </div>
       
        <div className='flex flex-col gap-2 px-2'>
            <div className='flex items-center gap-1'>
              <div className='rounded-full w-3 h-3 lg:w-4 lg:h-4 bg-[#f6cec6]'></div>
              <h1 className="text-sm">Tapeo</h1>
            </div>

            <div className='py-2'>
            {
              tapeos && tapeos.map((e) => (
                <CardProduct
                  name={e.name}
                  price={e.price1}
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