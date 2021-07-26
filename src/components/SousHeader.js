import React from "react";

const SousHeader = ({ data }) => {
  return (
    <div className="sous-header">
      <div>
        <h2>{data.restaurant.name}</h2>
        <p>{data.restaurant.description}</p>
      </div>
      <img src={data.restaurant.picture} alt={data.restaurant.name} />
    </div>
  );
};

export default SousHeader;
