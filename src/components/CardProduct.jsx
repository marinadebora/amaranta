import React from 'react';
import PropTypes from 'prop-types';

const CardProduct = ({nombre,precio,descripcion}) => {
  return (
    <div className='w-full flex gap-2 justify-between'>
      <div className=''>
      {
        nombre&& <p>{nombre}</p>
      }
        </div>
        <div>
        {
        descripcion&& <p>{descripcion}</p>
      }
        </div>
      
    <div>
    {
        precio&& <p>{precio}</p>
      }
    </div>
     
    </div>
  );
};

CardProduct.propTypes = {
  nombre : PropTypes.string,
  precio:PropTypes.string,
  descripcion:PropTypes.string,
};

export default CardProduct;