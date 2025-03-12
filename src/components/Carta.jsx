import { useState, useEffect } from "react";
import "../index.css"
import Cafe from "./Cafe";
import Tortas from "./Tortas";
import Menu from "./Menu";
import image from '../Images'
const Carta = () =>
{
  //const [productos, setProductos] = useState([]);
  const [page, setPage] = useState(0);
  const backgrounds = ["",image.Coffee, image.pastries,image.menus,image.hamburgers,image.pizza,image.desserts,image.drinks];
  const currentPage = page % backgrounds.length;
  let productos = [
    { nombre: "papas rusticas", precio: "15.00", descripcion: "porcion de ppapas fritas rusticas", seccion: "entradas" },
    { nombre: "ravioles", precio: "35.00", descripcion: "ravioles de ricota, jc, verdura", seccion: "menu" },
    { nombre: "bocha de helado", precio: "10.00", descripcion: "chocolate americano dl", seccion: "postres" },
    { nombre: "aquarius", precio: "12.00", descripcion: "manzana naranja pomelo", seccion: "bebidas" },
    { nombre: "cortado", precio: "12.00", descripcion: "especialidad", seccion: "cafeteria" },
    { nombre: "papas rusticas", precio: "15.00", descripcion: "porcion de ppapas fritas rusticas", seccion: "entradas" },
    { nombre: "ravioles", precio: "35.00", descripcion: "ravioles de ricota, jc, verdura", seccion: "menu" },
    { nombre: "bocha de helado", precio: "10.00", descripcion: "chocolate americano dl", seccion: "postres" },
    { nombre: "aquarius", precio: "12.00", descripcion: "manzana naranja pomelo", seccion: "bebidas" },
    { nombre: "cortado", precio: "12.00", descripcion: "clasico", seccion: "cafeteria" },
    { nombre: "papas rusticas", precio: "15.00", descripcion: "porcion de ppapas fritas rusticas", seccion: "entradas" },
    { nombre: "ravioles", precio: "35.00", descripcion: "ravioles de ricota, jc, verdura", seccion: "menu" },
    { nombre: "bocha de helado", precio: "10.00", descripcion: "chocolate americano dl", seccion: "postres" },
    { nombre: "aquarius", precio: "12.00", descripcion: "manzana naranja pomelo", seccion: "bebidas" },
    { nombre: "Ice Latte", precio: "12.00", descripcion: "frio", seccion: "cafeteria" },
    { nombre: "papas rusticas", precio: "15.00", descripcion: "porcion de ppapas fritas rusticas", seccion: "entradas" },
    { nombre: "ravioles", precio: "35.00", descripcion: "ravioles de ricota, jc, verdura", seccion: "menu" },
    { nombre: "bocha de helado", precio: "10.00", descripcion: "chocolate americano dl", seccion: "postres" },
    { nombre: "aquarius", precio: "12.00", descripcion: "manzana naranja pomelo", seccion: "bebidas" },
    { nombre: "Té", precio: "12.00", descripcion: "infusiones", seccion: "cafeteria" },
    { nombre: "Cortado", precio: "12.00", descripcion: "especialidad", seccion: "cafeteria" },
    { nombre: "Lagrima", precio: "12.00", descripcion: "clasico", seccion: "cafeteria" },
    { nombre: "Cafe con leche", precio: "12.00", descripcion: "clasico", seccion: "cafeteria" },
    { nombre: "expresso", precio: "12.00", descripcion: "especialidad", seccion: "cafeteria" },
    { nombre: "Americano", precio: "12.00", descripcion: "especialidad", seccion: "cafeteria" },
    { nombre: "Lungo", precio: "12.00", descripcion: "especialidad", seccion: "cafeteria" },
    { nombre: "Capuccino", precio: "12.00", descripcion: "especialidad", seccion: "cafeteria" },
    { nombre: "mocha", precio: "12.00", descripcion: "frio", seccion: "cafeteria" },
    { nombre: "Ice Capuccino", precio: "12.00", descripcion: "frio", seccion: "cafeteria" },
    { nombre: "Americano", precio: "12.00", descripcion: "especialidad", seccion: "cafeteria" },
    { nombre: "Lungo", precio: "12.00", descripcion: "especialidad", seccion: "cafeteria" },
    { nombre: "Capuccino", precio: "12.00", descripcion: "especialidad", seccion: "cafeteria" },
    { nombre: "mocha", precio: "12.00", descripcion: "frio", seccion: "cafeteria" },
    { nombre: "Ice Capuccino", precio: "12.00", descripcion: "frio", seccion: "cafeteria" },
    { nombre: "Té", precio: "12.00", descripcion: "infusiones", seccion: "cafeteria" },
    { nombre: "Té", precio: "12.00", descripcion: "infusiones", seccion: "cafeteria" },
    { nombre: "Té", precio: "12.00", descripcion: "infusiones", seccion: "cafeteria" },
    { nombre: "Té", precio: "12.00", descripcion: "infusiones", seccion: "cafeteria" },
    { nombre: "Lungo", precio: "12.00", descripcion: "especialidad", seccion: "cafeteria" },
    { nombre: "Capuccino", precio: "12.00", descripcion: "especialidad", seccion: "cafeteria" },
    { nombre: "mocha", precio: "12.00", descripcion: "frio", seccion: "cafeteria" },
    { nombre: "Ice Capuccino", precio: "12.00", descripcion: "frio", seccion: "cafeteria" },
    { nombre: "Té", precio: "12.00", descripcion: "infusiones", seccion: "cafeteria" },
    { nombre: "Té", precio: "12.00", descripcion: "infusiones", seccion: "cafeteria" },
    { nombre: "Lagrima", precio: "12.00", descripcion: "clasico", seccion: "cafeteria" },
    { nombre: "Lagrima", precio: "12.00", descripcion: "clasico", seccion: "cafeteria" },
    { nombre: "Lagrima", precio: "12.00", descripcion: "clasico", seccion: "cafeteria" },
    { nombre: "Lagrima", precio: "12.00", descripcion: "clasico", seccion: "cafeteria" },
    { nombre: "Té", precio: "12.00", descripcion: "infusiones", seccion: "cafeteria" },
    { nombre: "Té", precio: "12.00", descripcion: "infusiones", seccion: "cafeteria" },
    { nombre: "Té", precio: "12.00", descripcion: "infusiones", seccion: "cafeteria" },
    { nombre: "Té", precio: "12.00", descripcion: "infusiones", seccion: "cafeteria" },
    { nombre: "Lungo", precio: "12.00", descripcion: "especialidad", seccion: "cafeteria" },
    { nombre: "Capuccino", precio: "12.00", descripcion: "especialidad", seccion: "cafeteria" },
    { nombre: "Crumble de manzana", precio: "120.00", descripcion: "", seccion: "pasteleria" },
    { nombre: "Chesse cake", precio: "120.00", descripcion: "", seccion: "pasteleria" },
    { nombre: "red velvet", precio: "120.00", descripcion: "", seccion: "pasteleria" },
    { nombre: "brownie", precio: "120.00", descripcion: "", seccion: "pasteleria" },
    { nombre: "Coco y dulce de leche", precio: "120.00", descripcion: "", seccion: "pasteleria" },
    { nombre: "Ricota", precio: "120.00", descripcion: "", seccion: "pasteleria" },
    { nombre: "budin de banana", precio: "120.00", descripcion: "", seccion: "pasteleria" },
    { nombre: "budin de limos", precio: "120.00", descripcion: "", seccion: "pasteleria" },
    { nombre: "budin de zanahoria", precio: "120.00", descripcion: "", seccion: "pasteleria" },
    { nombre: "budin de marmolado", precio: "120.00", descripcion: "", seccion: "pasteleria" },
    { nombre: "COOCKIES", precio: "120.00", descripcion: "", seccion: "pasteleria" },
    { nombre: "MUFFINS", precio: "120.00", descripcion: "", seccion: "pasteleria" },
    { nombre: "PANKAKES", precio: "120.00", descripcion: "", seccion: "pasteleria" },
    { nombre: "TOSTADOS", precio: "120.00", descripcion: "", seccion: "pasteleria" },
  ]

 // let hamburguesas = [];
  let menu = [];
 // let postres = [];
 // let bebidas = [];
  let cafeteria = [];
  //let pizzas = [];
  let pasteleria = [];
  useEffect(() =>
  {
    if (page === 0) {
      setTimeout(() =>
      {
        setPage(1)
      }, 1000)
    }

  }, [page]);
  /*   useEffect(() => {
      const fetchData = async () => {
        try {
          const url = import.meta.env.VITE_URL;
          const response = await fetch(url);
          const text = await response.text();
          const rows = text.split("\n").slice(1);
          console.log(response)
          
          const data = rows.map((row) => {
            const [MarcaTemporal,nombre, precio, descripcion, seccion] = row.split(",");
            return {MarcaTemporal, nombre, precio, descripcion, seccion };
          });
  
          setProductos(data);
        } catch (error) {
          console.error("Error al obtener datos:", error);
        }
      };
  
      fetchData();
    }, []); */
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
  if (productos.length > 0) {
   // hamburguesas = productos.filter(e => e.seccion == "hamburguesas");
    menu = productos.filter(e => e.seccion == "Menú");
   // postres = productos.filter(e => e.seccion == "Postres");
   // bebidas = productos.filter(e => e.seccion == "Bebidas");
    cafeteria = productos.filter(e => e.seccion == "cafeteria");
    pasteleria = productos.filter(e => e.seccion == "pasteleria");
   // pizzas = productos.filter(e => e.seccion == "pizas");
  }
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
            <div className=" bg-[#fcf2f0] w-[90%] h-full flex flex-col  "style={{ backgroundImage: `url(${backgrounds[currentPage]})`, backgroundSize: "cover",backgroundPosition: "center" }}>

              <div className="w-full flex flex-col items-center mt-3 text-[#f0d1ce]">
                <h1 className="text-2xl ">AMARANTA</h1>
                <h2 className="text-sm">CAFE RESTO</h2>
              </div>

              <div className=" w-full h-full flex flex-col text-[#8f9980] p-2 ">
                {
                  page === 1 && cafeteria &&
                  <Cafe cafeteria={cafeteria} />
                }
                {
                  page===2&&pasteleria&&
                  <Tortas pasteleria={pasteleria} />
                }
                {
                  page===3&&menu&&
                  <Menu  />
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