import React from 'react';
import PropTypes from 'prop-types';

const CardProduct = ({nombre,precio}) => {
  return (
    <div className='w-full flex justify-between'>
      <div className=''>
      {
        nombre&& <p>{nombre}</p>
      }
        </div>
     
     
    <div>
    {
        precio&& <p>${precio}</p>
      }
    </div>
     
    </div>
  );
};

CardProduct.propTypes = {
  nombre : PropTypes.string,
  precio:PropTypes.string
};

export default CardProduct;