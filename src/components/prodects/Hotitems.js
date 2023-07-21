import React, { useEffect, useState } from 'react';
import { ItemListJson } from './itemListJson';
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';
// import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';

import FreshProdectsList from './freshProdectslist';
const HotItems = () => {
  // const prodects = useSelector(({ prodect }) => prodect.prodect);
  const [prodects, setProdect] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await fetch(
          'https://sanjeev-dd151-default-rtdb.firebaseio.com/cart.json'
        );
        const data = await res.json();
        setProdect(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchdata();
  }, prodects);
  return (
    <div className="hotItems">
      <div className="items">
        {prodects
          ? prodects.map((item) => {
              return (
                <FreshProdectsList item={item.items} name={item.itemName} />
              );
            })
          : ''}
      </div>
    </div>
  );
};

export default HotItems;
