import React from 'react';
import CardProduct from "./CardProduct";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAlPlato } from "../redux/thunks";

const AlPlato = () =>
{
  const { alPlato } = useSelector(state => state.carta);
  const dispatch = useDispatch()

  useEffect(() =>
  {
    dispatch(getAlPlato())
  }, [dispatch]);


  let pastas = alPlato?.filter(e => e.section === "pastas" && e.subSection !== "sorrentinos"&& e.subSection !== "arroz");
  let sorrentinos = alPlato?.filter(e => e.section === "pastas" && e.subSection === "sorrentinos");
  let risotto = alPlato?.filter(e => e.section === "pastas" &&  e.subSection === "arroz")
  let carnesYPollos = alPlato?.filter(e => e.section === "carnes y pollos");
  let salsas = alPlato?.filter(e => e.section === "salsas");
  return (
    <div className=" w-full h-[90%] md:h-full mt-2" >
      <div className="w-full h-full grid grid-cols-2 gap-2 text-xs overflow-y-scroll">

        <div className='flex flex-col gap-2 px-2'>
          <>
          <div className='flex items-center gap-1'>
            <div className='rounded-full w-3 h-3 lg:w-4 lg:h-4 bg-[#f6cec6]'></div>
            <h1 className="text-xs">PASTAS</h1>
          </div>
          <div  className='py-1'>
            {
              pastas && pastas.map((e) => (
                <CardProduct
                  name={e.name}
                  price={e.price}
                  description={e.description || ""}
                  key={e.name + Math.random()}
                />

              ))
            }

            <p className='py-1'>Sorrentinos</p>
            {
              sorrentinos && sorrentinos.map((e) => (
                <CardProduct
                  name={e.name}
                  price={e.price}
                  description={e.description || ""}
                  key={e.name + Math.random()}
                />
              ))
            }
             <p className='py-1'></p>
             {
              salsas && salsas.map((e) => (
                <CardProduct
                  name={e.name}
                  price={e.price}
                  description={e.description || ""}
                  key={e.name + Math.random()}
                />
              ))
            }
             <p className='py-1'></p>
               {
              risotto && risotto.map((e) => (
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

        <div className='flex flex-col gap-2 px-2 pt-12'>
          <>
          <div className='flex items-center gap-1'>
            <div className='rounded-full w-3 h-3 lg:w-4 lg:h-4 bg-[#f6cec6]'></div>
            <h1 className="text-xs">CARNES Y POLLOS</h1>
          </div>
          <div className='py-1'>
            {
              carnesYPollos && carnesYPollos.map((e) => (
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
        
      </div>
    </div>
  );
};

export default AlPlato;