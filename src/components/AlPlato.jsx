import React from 'react';
import PropTypes from 'prop-types';
import CardProduct from "./CardProduct";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase/config";

const AlPlato = () => {
  const [alPlato, setAlPlato] = useState([]);

   useEffect(() => {
      const alPlatoRef = collection(db,"alPlato")
       getDocs(alPlatoRef)
       .then(res=>{
         
         const arr = res.docs.map(e=>({...e.data(),id:e.id}))
         setAlPlato([...arr])
       })
     }, []);
  
  return (
       <div className="bg-transparent w-full h-[31rem] text-[#dcb4b4]  flex items-start justify-center">
          <div className='md:w-[50%] pt-5'>
          {
                        alPlato && alPlato.map(e => (
                         
                          <CardProduct
                            name={e.name}
                            price={e.price}
                            description={e.description}
                          />
          
                        ))
                      }
          </div>
           
        </div>
  );
};

export default AlPlato;