import React from 'react';

import Advert from './Advert.jsx';

const AdvertList = ({advertData}) => {
  const items = advertData.map(({species, price}) => {
    return <Advert species={species} price={price}/>
  })
  return (
    <div>
      {items}
    </div>
  );
}

export default AdvertList;
