import { useState, useEffect } from "react";
import CardProduct from "./CardProduct";

const Carta = () => {
  const [productos, setProductos] = useState([]);
/*   let productos =[
    { nombre:"papas rusticas", precio:"15.00", descripcion:"porcion de ppapas fritas rusticas", seccion:"entradas" },
    { nombre:"ravioles", precio:"35.00", descripcion:"ravioles de ricota, jc, verdura", seccion:"menu" },
    { nombre:"bocha de helado", precio:"10.00", descripcion:"chocolate americano dl", seccion:"postres" },
    { nombre:"aquarius", precio:"12.00", descripcion:"manzana naranja pomelo", seccion:"bebidas" },
    { nombre:"cortado", precio:"12.00", descripcion:"jarrito", seccion:"cafeteria" },
    { nombre:"papas rusticas", precio:"15.00", descripcion:"porcion de ppapas fritas rusticas", seccion:"entradas" },
    { nombre:"ravioles", precio:"35.00", descripcion:"ravioles de ricota, jc, verdura", seccion:"menu" },
    { nombre:"bocha de helado", precio:"10.00", descripcion:"chocolate americano dl", seccion:"postres" },
    { nombre:"aquarius", precio:"12.00", descripcion:"manzana naranja pomelo", seccion:"bebidas" },
    { nombre:"cortado", precio:"12.00", descripcion:"jarrito", seccion:"cafeteria" },
    { nombre:"papas rusticas", precio:"15.00", descripcion:"porcion de ppapas fritas rusticas", seccion:"entradas" },
    { nombre:"ravioles", precio:"35.00", descripcion:"ravioles de ricota, jc, verdura", seccion:"menu" },
    { nombre:"bocha de helado", precio:"10.00", descripcion:"chocolate americano dl", seccion:"postres" },
    { nombre:"aquarius", precio:"12.00", descripcion:"manzana naranja pomelo", seccion:"bebidas" },
    { nombre:"cortado", precio:"12.00", descripcion:"jarrito", seccion:"cafeteria" },
    { nombre:"papas rusticas", precio:"15.00", descripcion:"porcion de ppapas fritas rusticas", seccion:"entradas" },
    { nombre:"ravioles", precio:"35.00", descripcion:"ravioles de ricota, jc, verdura", seccion:"menu" },
    { nombre:"bocha de helado", precio:"10.00", descripcion:"chocolate americano dl", seccion:"postres" },
    { nombre:"aquarius", precio:"12.00", descripcion:"manzana naranja pomelo", seccion:"bebidas" },
    { nombre:"cortado", precio:"12.00", descripcion:"jarrito", seccion:"cafeteria" },
  ]    
   */
let entradas = [];
let menu =[];
let postres=[];
let bebidas=[];
let cafeteria=[];

  useEffect(() => {
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
  }, []);
if(productos.length > 0){
  entradas = productos.filter(e=>e.seccion === "Entradas");
  menu = productos.filter(e=>e.seccion === "Menú");
  postres = productos.filter(e=>e.seccion === "Postres");
  bebidas = productos.filter(e=>e.seccion === "Bebidas");
  cafeteria = productos.filter(e=>e.seccion === "Cafeteria");
  console.log(productos)
}
  return (
    <div className="w-full flex items-center justify-center">
      <div className=" w-[90%] border-2 border-blue-600 flex flex-col ">
        <div className="flex items-center justify-center">
        <h1>AMARANTA</h1>
        </div>
        
    <div className="flex flex-col items-center justify-center gap-5">

      {/* entradas */}
    <div className=" w-full bg-[#00223] ">
    <h2>ENTRADAS</h2>
    <div>
      {/* aca los productos */}
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
       {/* menu */}
       <div className=" w-full bg-[#00223] ">
    <h2>MENÚ</h2>
    <div>
      {/* aca los productos */}
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
   {/* postres */}
   <div className=" w-full bg-[#00223] ">
    <h2>POSTRES</h2>
    <div>
      {/* aca los productos */}
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
   {/* bebidas */}
   <div className=" w-full bg-[#00223] ">
    <h2>BEBIDAS</h2>
    <div>
      {/* aca los productos */}
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
{/* cafeteria */}
<div className=" w-full bg-[#00223] ">
    <h2>CAFETERIA</h2>
    <div>
      {/* aca los productos */}
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
      </div>
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
      </div> */