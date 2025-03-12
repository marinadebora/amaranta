import React from 'react';
import PropTypes from 'prop-types';
import CardProduct from "./CardProduct";
import "../index.css"

const Menu = ({menu}) => {
  return (
       <div className="bg-transparent w-full h-[31rem] text-[#dcb4b4]  flex items-start justify-center">
          <div className='md:w-[50%] pt-5'>
          {
                        menu && menu.map(e => (
                         
                          <CardProduct
                            nombre={e.nombre}
                            precio={e.precio}
                            descripcion={e.descripcion}
                          />
          
                        ))
                      }
          </div>
           
        </div>
  );
};

Menu.propTypes = {
  menu:PropTypes.array
};

export default Menu;