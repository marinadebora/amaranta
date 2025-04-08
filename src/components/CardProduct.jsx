import React from 'react';
import PropTypes from 'prop-types';
import funcCapitalize from "../utils/capitalizeFirstLatter";

const CardProduct = ({ name, price, description }) =>
{
  return (
    <div className='w-full flex flex-col'>
      <div className='w-full flex justify-between'>
        {name && <p className='w-[80%] text-xs'>{funcCapitalize(name)}</p>}
        {price && <p className='w-[20%]'>${price}</p>}
      </div>
    
        {description && <p className='w-[80%] text-xs font-extralight italic'>({description})</p>}
     
    </div>
  );
};

CardProduct.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string
};

export default CardProduct;