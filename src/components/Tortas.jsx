import React from 'react';
import PropTypes from 'prop-types';
import CardProduct from './CardProduct';

const Tortas = ({pasteleria}) => {
  return (
    <div className="bgPasteleria w-full h-[31rem] text-[#dcb4b4]  flex items-start justify-center">
      <div className='md:w-[50%] pt-5'>
      {
                    pasteleria && pasteleria.map(e => (
                     
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

Tortas.propTypes = {
  pasteleria: PropTypes.array
};

export default Tortas;