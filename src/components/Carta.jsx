import { useState, useEffect } from "react";
import { FiArrowLeft , FiArrowRight } from "react-icons/fi";
import { useSwipeable } from 'react-swipeable';
import "../index.css"
import Cafe from "./Cafe";
import Pasteleria from "./Pasteleria";
import AlPlato from "./AlPlato";
import Tapeo from "./Tapeo";
import PizzaTartasEmpanadas from "./PizzaTartasEmpanadas";
import EntrePanes from "./EntrePanes";
import EnsaladasGuarniciones from "./EnsaladasGuarniciones";
import Postres from "./Postres";
import Bebidas from "./Bebidas";
import BebidasAlcohol from "./BebidasAlcohol";
import  imagenes  from "../Images";

const Carta = () =>
{
  const [page, setPage] = useState(0);
  const currentPage = page % imagenes.length;
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

  const handlers = useSwipeable({
    onSwipedLeft: () => nextPage(),
    onSwipedRight: () => previouPage(),
    preventScrollOnSwipe: true,
    trackTouch: true,
    trackMouse: false,
  });

  return (
    <div key={"carta"} {...handlers}>
    <main className="flex items-center justify-center pt-5 md:pt-0" >

      {
        page === 0 ?
          <div  key={"landing"} className=" w-[90%] h-[70vh] md:w-[30rem] md:h-[35rem] flex flex-col items-center justify-center shadow-2xl "style={{ backgroundImage: `url(${imagenes[currentPage]})`, backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>

            <div className="w-full h-[80%] flex flex-col  items-center justify-start text-[#fcf2f2] ">
              <h1 className="text-[3.5rem]">AMARANTA</h1>
              <h2 className="text-sm">CAFE RESTO</h2>
            </div>

            <div className="text-[#f0f3e3]">
              <div className="text-[#f6cec6] w-full flex items-center justify-center gap-2  text-2xl">
                <p>●</p>
              </div>
              <p className="text-xs">CLUB PARAISO</p>
            </div>
          </div> :



          <div key="carta" className="w-full h-[35rem]  md:w-[30rem] shadow-2xl flex flex-col items-center justify-around " >
            <div className=" bg-[#fcf2f0] w-[90%] h-[90%] flex flex-col " style={{ backgroundImage: `url(${imagenes[currentPage]})`, backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>

              <div className="w-full flex flex-col items-center mt-6 text-[#f0d1ce]">
                <h1 className="text-2xl ">AMARANTA</h1>
                <h2 className="text-sm">CAFE RESTO</h2>
              </div>

              <div className=" w-full h-full flex flex-col text-[#8f9980] p-2 ">

                {
                  page === 1 &&
                 <div key={"cafe"}><Cafe /></div> 
                }
                {
                  page === 2 &&
                  <div key={"Pasteleria"}> <Pasteleria /></div>
                }
                {
                  page === 3 &&
                  <div key={"Tapeo"}><Tapeo /></div>
                }
                {
                  page === 4 &&
                  <div key={"PizzaTartasEmpanadas"}><PizzaTartasEmpanadas /></div>
                }

                {
                  page === 5 &&
                  <div key={"EntrePanes"}><EntrePanes /></div>
                }
                {
                  page === 6 &&
                  <div key={"EnsaladasGuarniciones"}><EnsaladasGuarniciones /></div>
                }

                {
                  page === 7 &&
                  <div key={"AlPlato"}> <AlPlato /></div>
                }
                {
                  page === 8 &&
                  <div key={"Postres"}><Postres /></div>
                }
                {
                  page === 9 &&
                  <div key={"Bebidas"}> <Bebidas /></div>
                }
                {
                  page === 10 &&
                  <div key={"BebidasAlcohol"}><BebidasAlcohol /></div>
                }
              </div>

            </div>

            <div className=" w-full h-[6%] flex items-center justify-center gap-2  py-2 text-[#769164]">
              <button className="bg-[#f2d0c7] rounded-md px-2 shadow-md cursor-pointer  hover:bg-[#769164] hover:text-[#f2d0c7]" onClick={previouPage} ><FiArrowLeft /></button>{/* <p className="font-extrabold">←</p> */}
              <button className="bg-[#f2d0c7] rounded-md px-2 shadow-md cursor-pointer  hover:bg-[#769164] hover:text-[#f2d0c7]" onClick={nextPage}><FiArrowRight /></button>{/* <p className="font-extrabold">→</p> */}
            </div>

          </div>
       

      }
    </main>
    </div>
  );
};

export default Carta;