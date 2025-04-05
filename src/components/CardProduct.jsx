import React from 'react';
import PropTypes from 'prop-types';
import funcCapitalize from "../utils/capitalizeFirstLatter";

const CardProduct = ({ name, price, description }) =>
{
  return (
    <div className='w-full flex flex-col'>
    <div className='w-full flex justify-between'>
      <div>{name && <p>{funcCapitalize(name)}</p>}</div>
      <div>{price && <p>${price}</p>}</div>
    </div>
    <div className=''>
    <div>{description && <p>{description}</p>}</div>
    </div>
    </div>
  );
};

CardProduct.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string
};

export default CardProduct;