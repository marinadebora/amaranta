import { useState, useEffect } from "react";
import "../index.css"
import Cafe from "./Cafe";
import Pasteleria from "./Pasteleria";
import AlPlato from "./AlPlato";
import image from '../Images'
import Tapeo from "./Tapeo";
import PizzaTartasEmpanadas from "./PizzaTartasEmpanadas";
import EntrePanes from "./EntrePanes";
import EnsaladasGuarniciones from "./EnsaladasGuarniciones";
import Postres from "./Postres";
import Bebidas from "./Bebidas";
import BebidasAlcohol from "./BebidasAlcohol";

const Carta = () =>
{
  const [page, setPage] = useState(0);
  const backgrounds = ["", image.Coffee, image.pastries, "", image.pizza, image.hamburgers, "", image.menus, image.desserts, image.drinks, ""];
  const currentPage = page % backgrounds.length;
  const nextPage = () =>
  {
    if(page === 10){
      setPage(1)
    }else{
      setPage(page + 1)
    }
   
  }
  const previouPage = () =>
  {
    if (page === 1) {
      setPage(10)
    } else {
      setPage(page - 1)
    }

  }
  useEffect(() =>
  {
    if (page === 0) {
      setTimeout(() =>
      {
        setPage(1)
      }, 1000)
    }

  }, [page]);



  return (
    <main className="flex flex-grow items-center justify-center ">

      {
        page === 0 ?
          <div className=" w-[90%] h-[90vh] flex flex-col items-center justify-between">

            <div className="w-full h-full  flex flex-col  items-center justify-center text-[#fcf2f2]">
              <h1 className="text-3xl">AMARANTA</h1>
              <h2 className="text-sm">CAFE RESTO</h2>
            </div>

            <div className="text-[#f0f3e3]">
              <div className="text-[#f6cec6] w-full flex items-center justify-center gap-2  text-2xl">
                <p>●</p>
              </div>
              <p className="text-xs">CLUB PARAISO</p>
            </div>
          </div> :


          <div className=" w-full  h-[85vh] flex flex-col items-center justify-center" >
            <div className=" bg-[#fcf2f0] w-[90%] md:w-[50%] h-full flex flex-col  " style={{ backgroundImage: `url(${backgrounds[currentPage]})`, backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>

              <div className="w-full flex flex-col items-center mt-3 text-[#f0d1ce]">
                <h1 className="text-2xl ">AMARANTA</h1>
                <h2 className="text-sm">CAFE RESTO</h2>
              </div>

              <div className=" w-full h-full flex flex-col text-[#8f9980] p-2 ">

                {
                  page === 1 &&
                  <Cafe />
                }
                {
                  page === 2 &&
                  <Pasteleria />
                }
                {
                  page === 3 &&
                  <Tapeo />
                }
                {
                  page === 4 &&
                  <PizzaTartasEmpanadas />
                }

                {
                  page === 5 &&
                  <EntrePanes />
                }
                {
                  page === 6 &&
                  <EnsaladasGuarniciones />
                }

                {
                  page === 7 &&
                  <AlPlato />
                }
                {
                  page === 8 &&
                  <Postres />
                }
                {
                  page === 9 &&
                  <Bebidas />
                }
                {
                  page === 10 &&
                  <BebidasAlcohol />
                }
              </div>

            </div>

            <div className=" w-full flex items-center justify-center gap-2 my-1 text-2xl text-[#769164] ">
              <button className="bg-[#f2d0c7] rounded-md px-2 shadow-md cursor-pointer  hover:shadow-[#769164] hover:tetxt-[#f2d0c7]" onClick={previouPage} >←</button>
              <button className="bg-[#f2d0c7] rounded-md px-2 shadow-md cursor-pointer  hover:shadow-[#769164] hover:tetxt-[#f2d0c7]" onClick={nextPage}>→</button>
            </div>

          </div>

      }


    </main>
  );
};

export default Carta;