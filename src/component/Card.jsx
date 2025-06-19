import React from 'react'

const Card = (props) => {
    const { title, img, type } = props;
  return (
    <>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure className='overflow-hidden h-50'>
          <img className='w-full object-cover' src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {title}
            <div className="badge badge-secondary">New</div>
          </h2>
          <p>{type}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-outline btn-error">Delete</button>
            <button className="btn btn-outline btn-warning">Edit</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card