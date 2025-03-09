import React from 'react';
import PropTypes from 'prop-types';

const Cafe = ({nombre,precio,descripcion}) => {
  return (
      <div className='flex '>
   
    </div>
  );
};

Cafe.propTypes = {
   nombre : PropTypes.string,
    precio:PropTypes.string,
    descripcion:PropTypes.string,
};

export default Cafe;