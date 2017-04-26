import React from 'react';

const Advert = ({species, price}) => {
  return (
    <div>
      <img src='http://placehold.it/75' />
      <div style={{display: 'inline-block'}}>
        <div>{species}</div>
        <div>{price}</div>
      </div>
    </div>
  );
}

export default Advert;
