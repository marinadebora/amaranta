import React from 'react';
import PropTypes from 'prop-types';
import funcCapitalize from "../utils/capitalizeFirstLatter";

const CardProduct = ({ name, price, description }) =>
{
  return (
    <div className='w-full flex flex-col'>
      <div className='w-full flex justify-between'>
        {name && <p className='w-[80%] text-[0.6rem]'>{funcCapitalize(name)}</p>}
        {price && <div className='w-[20%] text-[0.6rem] flex justify-end'><p>${price}</p></div> }
      </div>
    
        {description && <p className='w-[80%] text-[0.5rem] font-extralight italic'>({description})</p>}
     
    </div>
  );
};

CardProduct.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  description: PropTypes.string,
};

export default CardProduct;