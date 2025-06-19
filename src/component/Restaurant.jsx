import React from 'react'
import Card from './Card';
import db from '../db.json';

const Restaurant = () => {
  return (
    <div className="flex">
      <div className="flex flex-wrap justify-center gap-4">
        {db.restaurants.map((item) => (
            <Card title={item.title} img={item.img} type={item.type} />
        ))}
      </div>
    </div>
  );
}

export default Restaurant