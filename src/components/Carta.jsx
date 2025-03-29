import { useState, useEffect  } from "react";
import "../index.css"
import Cafe from "./Cafe";
import Pasteleria from "./Pasteleria";
import AlPlato from "./AlPlato";
import image from '../Images'
import Tapeo from "./Tapeo";


const Carta = () =>
{
  const [page, setPage] = useState(0);
  const backgrounds = ["",image.Coffee, image.pastries,"",image.menus,image.hamburgers,image.pizza,image.desserts,image.drinks];
  const currentPage = page % backgrounds.length;

  const nextPage = () =>
  {
    setPage(page + 1)
  }
  const previouPage = () =>
  {
    if (page === 0) {
      setPage(page)
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
            <div className=" bg-[#fcf2f0] w-[90%] md:w-[50%] h-full flex flex-col  "style={{ backgroundImage: `url(${backgrounds[currentPage]})`, backgroundSize: "contain",backgroundPosition: "center",backgroundRepeat: "no-repeat" }}>

              <div className="w-full flex flex-col items-center mt-3 text-[#f0d1ce]">
                <h1 className="text-2xl ">AMARANTA</h1>
                <h2 className="text-sm">CAFE RESTO</h2>
              </div>

              <div className=" w-full h-full flex flex-col text-[#8f9980] p-2 ">
                {
                  page === 1 && 
                  <Cafe/>
                }
                {
                  page===2&&
                  <Pasteleria/>
                }
                {
                  page===3&&
                  <Tapeo  />
                }
                {
                  page===6&&
                  <AlPlato  />
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
/*  {
          page === 0 ?
          <div className=" w-[90%] h-[90vh] flex flex-col items-center justify-between">

              <div className="h-[50%]  flex flex-col  items-center justify-center text-[#f9f5ec]">
                <h1 className="text-3xl ">AMARANTA</h1>
                <h2 className="text-sm">CAFE RESTO</h2>
              </div>

              <div className="text-[#f9f5ec]">
                <div className="w-full flex items-center justify-center gap-2  text-2xl">
                  <p>●</p>
                </div>
                <p>CLUB PARAISO</p>
              </div>
              </div> :
            <div className="border w-[90%] h-[90vh] bg-[#fcf2f0] flex flex-col items-center justify-between">
              <div className="flex flex-col items-center mt-3 text-[#f0d1ce]">
                <h1 className="text-2xl ">AMARANTA</h1>
                <h2 className="text-sm">CAFE RESTO</h2>
              </div>


              <div className="w-full h-full flex flex-col text-[#8f9980] p-6 ">
                {cafeteria && <Cafe cafeteria={cafeteria} />}
        
            <div className="w-full flex items-center justify-center gap-2 mb-2 text-2xl text-[#769164] ">
              <button className="bg-[#f2d0c7] rounded-md px-2 shadow-md cursor-pointer  hover:shadow-[#769164] hover:tetxt-[#f2d0c7]" onClick={previouPage} >←</button>
              <button className="bg-[#f2d0c7] rounded-md px-2 shadow-md cursor-pointer  hover:shadow-[#769164] hover:tetxt-[#f2d0c7]" onClick={nextPage}>→</button>
            </div>
              </div>
            </div>
        } */