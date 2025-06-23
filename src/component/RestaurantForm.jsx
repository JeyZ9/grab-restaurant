import React, { useState } from 'react'

const RestaurantForm = (props) => {
  const { setPopup, addRestaurant } = props;

  const [ restaurant, setRestaurant ] = useState({
    title: "",
    type: "",
    img: ""
  });

  const hanbleOnClick = () => {
    addRestaurant(restaurant);
  }

  const hanblechange = (e) => {
    const { name, value } = e.target;
    setRestaurant({ ...restaurant, [name]: value });
  }

  return (
    <>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend text-2xl">Add Restaurant</legend>

        <label className="label">Title</label>
        <input
          type="text"
          value={restaurant.title}
          name="title"
          className="input"
          placeholder="restaurant title"
          onChange={hanblechange}
          required
        />

        <label className="label">Type</label>
        <input
          type="text"
          value={restaurant.type}
          name="type"
          className="input"
          placeholder="restaurant type"
          onChange={hanblechange}
          required
        />

        <label className="label">Image url</label>
        {restaurant.img && <img className="" src={restaurant.img} />}
        <input
          type="input"
          value={restaurant.img}
          name="img"
          className="input"
          placeholder="image"
          onChange={hanblechange}
          required
        />

        <div className="grid grid-cols-2 gap-2 justify-between mt-4">
          <button
            className="btn btn-error btn-outline w-full"
            onClick={() => setPopup(false)}
          >
            cancle
          </button>
          <button
            onClick={hanbleOnClick}
            type="submit"
            className="btn btn-accent w-full text-white"
          >
            Submit
          </button>
        </div>
      </fieldset>
    </>
  );
}

export default RestaurantForm