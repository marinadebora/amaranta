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
    <div className=" w-full h-[90%] md:h-full mt-2" >
      <div className="w-full h-full grid grid-cols-2 gap-2 text-xs overflow-y-scroll">

        <div className='flex flex-col gap-2 px-2'>
          <>
            <div className='flex items-center gap-1'>
              <div className='rounded-full w-3 h-3 lg:w-4 lg:h-4 bg-[#f6cec6]'></div>
              <h1 className="text-xs">PIZZAS</h1>
            </div>
            <div className='py-1'>
              {
                pizzas && pizzas.map((e) => (
                  <CardProduct
                    name={e.name}
                    price={e.price}
                    description={e.description || ""}
                  />

                ))
              }
            </div>
          </>
          <>
            <div className='flex items-center gap-1'>
              <div className='rounded-full w-3 h-3 lg:w-4 lg:h-4 bg-[#f6cec6]'></div>
              <h1 className="text-xs ">TARTAS</h1><p className='text-[0.6rem] font-extralight italic'>individuales</p>
            </div>
            <div className='py-1'>
              {
                tartas && tartas.map(e => (
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

        <div className='flex flex-col gap-2 px-2 pt-12'>
        <>
          <div className='flex items-center gap-1'>
              <div className='rounded-full w-3 h-3 lg:w-4 lg:h-4 bg-[#f6cec6]'></div>
              <h1 className="text-xs">EMPANADAS</h1>
            </div>
            <div className="py-1">
              {
                empanadas && empanadas.map(e => (
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


export default PizzaTartasEmpanadas;