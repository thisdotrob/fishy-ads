import React from 'react';

import Advert from './Advert.jsx';

const AdvertList = ({advertsData}) => {
  const items = advertsData.map(({species, price}) => {
    return <Advert species={species} price={price} key={species+price}/>
  })
  return (
    <div>
      {items}
    </div>
  );
}

export default AdvertList;
