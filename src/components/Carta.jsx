import { useState, useEffect } from "react";
import CardProduct from "./CardProduct";
import Cafe from "./Cafe";
import "../index.css"
const Carta = () =>
{
  //const [productos, setProductos] = useState([]);
  const [page, setPage] = useState(0);
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
  ]

  let entradas = [];
  let menu = [];
  let postres = [];
  let bebidas = [];
  let cafeteria = [];
useEffect(() => {
 setTimeout(()=>{
  setPage(page+1)
 },1000)
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
    entradas = productos.filter(e => e.seccion == "entradas");
    menu = productos.filter(e => e.seccion == "Menú");
    postres = productos.filter(e => e.seccion == "Postres");
    bebidas = productos.filter(e => e.seccion == "Bebidas");
    cafeteria = productos.filter(e => e.seccion == "cafeteria");
  }
  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
        {
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
            <div className="bgCafeteria  w-[90%] h-[90vh] bg-[#fcf2f0] flex flex-col items-center justify-between">
              <div className="flex flex-col items-center mt-3 text-[#f0d1ce]">
                <h1 className="text-2xl ">AMARANTA</h1>
                <h2 className="text-sm">CAFE RESTO</h2>
              </div>
              <div className="w-full h-full flex flex-col text-[#8f9980] p-6 overflow-y-scroll">
                
               {
                 cafeteria && 
                 
                  <div className="flex">
                    <div className=" gap-6 flex flex-col justify-between text-xs">

                      <div>
                        <h1 className="text-sm">CAFÉ DE ESPECIALIDAD</h1>
                        {
                          cafeteria&& cafeteria.map(e=>(
                            e.descripcion === "especialidad"&&
                            <CardProduct
                            nombre={e.nombre}
                            precio={e.precio}
                            descripcion={e.descripcion}
                            />
                           
                          ))
                        }
                      </div>

                      <div>
                         <h1 className="text-sm">CAFÉ FRIOS</h1>
                         {
                          cafeteria&& cafeteria.map(e=>(
                            e.descripcion === "frio"&&
                            <CardProduct
                            nombre={e.nombre}
                            precio={e.precio}
                            descripcion={e.descripcion}
                            />
                           
                          ))
                        }
                      </div>
                      <div >
                         <h1 className="text-sm ">CLÁSICOS</h1>
                         {
                          cafeteria&& cafeteria.map(e=>(
                            e.descripcion === "clasico"&&
                            <CardProduct
                            nombre={e.nombre}
                            precio={e.precio}
                            descripcion={e.descripcion}
                            />
                           
                          ))
                        }
                      </div>
                      <div className="">
                    <h1 className="text-sm">INFUSIONES</h1>
                         {
                          cafeteria&& cafeteria.map(e=>(
                            e.descripcion === "infusiones"&&
                            <CardProduct
                            nombre={e.nombre}
                            precio={e.precio}
                            descripcion={e.descripcion}
                            />
                           
                          ))
                        }
                    </div>
                    </div>
                 {/*  {  <div className="overlay">
                    <img className=" modal" src="https://res.cloudinary.com/deqbqghhq/image/upload/v1741494395/cafeteria_q5w2nv.png" alt="" />
                    </div>} */}
                   
                  </div>
                  
                
               }
              </div>
            <div className="w-full flex items-center justify-center gap-2 mb-2 text-2xl text-[#769164] ">
              <button className="bg-[#f2d0c7] rounded-md px-2 shadow-md cursor-pointer  hover:shadow-[#769164] hover:tetxt-[#f2d0c7]" onClick={previouPage} >←</button>
              <button className="bg-[#f2d0c7] rounded-md px-2 shadow-md cursor-pointer  hover:shadow-[#769164] hover:tetxt-[#f2d0c7]" onClick={nextPage}>→</button>
            </div>
            </div>
        }






      

    </div>
  );
};

export default Carta;
/*    <h1 className="text-2xl font-bold text-center mb-4">Menú</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {productos.map((producto, index) => (
          <div key={index} className="border p-4 rounded-lg shadow-md">
            <img src={producto.imagen} alt={producto.nombre} className="w-full h-40 object-cover rounded" />
            <h2 className="text-lg font-bold">{producto.nombre}</h2>
            <p className="text-gray-600">{producto.descripcion}</p>
            <p className="text-green-500 font-semibold">💰 ${producto.precio}</p>
          </div>
        ))}
      </div>
      
      
      
      
      
         <div className="flex flex-col items-center justify-center gap-5">

    <div className=" w-full bg-[#00223] ">
    <h2>ENTRADAS</h2>
    <div>
      {
        entradas && 
       entradas.map(e=>(
        <CardProduct
        nombre={e.nombre}
        precio={e.precio}
        descripcion={e.descripcion}
          />
       ))
      }
    </div>
    </div>
       <div className=" w-full bg-[#00223] ">
    <h2>MENÚ</h2>
    <div>
      {
        menu && 
       menu.map(e=>(
        <CardProduct
        nombre={e.nombre}
        precio={e.precio}
        descripcion={e.descripcion}
          />
       ))
      }
    </div>
    </div>
   <div className=" w-full bg-[#00223] ">
    <h2>POSTRES</h2>
    <div>
      {
        postres && 
       postres.map(e=>(
        <CardProduct
        nombre={e.nombre}
        precio={e.precio}
        descripcion={e.descripcion}
          />
       ))
      }
    </div>
    </div>
   <div className=" w-full bg-[#00223] ">
    <h2>BEBIDAS</h2>
    <div>
      {
        bebidas && 
       bebidas.map(e=>(
        <CardProduct
        nombre={e.nombre}
        precio={e.precio}
        descripcion={e.descripcion}
          />
       ))
      }
    </div>
    </div>
<div className=" w-full bg-[#00223] ">
    <h2>CAFETERIA</h2>
    <div>
      {
        cafeteria && 
       cafeteria.map(e=>(
        <CardProduct
        nombre={e.nombre}
        precio={e.precio}
        descripcion={e.descripcion}
          />
       ))
      }
    </div>
    </div>


    </div>
      
      
      
      
      
      
      
      
      
      
      
      */