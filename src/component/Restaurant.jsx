import React from 'react'
import Card from './Card';
import axios from 'axios';

const Restaurant = (props) => {

  const { restaurants } = props;

  console.log(restaurants);

  
  const deleteRestaurant = async (id) => {
    const response = await axios.delete(
      `http://localhost:8080/restaurants/${id}`
    );
    return response.data;
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-wrap justify-center gap-4 items-center">
        {restaurants &&
          restaurants.map((restaurant) => (
            <Card
              deleteRestaurant={deleteRestaurant}
              key={restaurant.id}
              id={restaurant.id}
              title={restaurant.title}
              img={restaurant.img}
              type={restaurant.type}
            />
          ))}
      </div>
    </div>
  );
}

export default Restaurant