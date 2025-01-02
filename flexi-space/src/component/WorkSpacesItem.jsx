import React from "react";

function WorkSpacesItem({ image, name, price }) {
  return (
    <div className="WorkSpacesItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> ${price} </p>
    </div>
  );
}

export default WorkSpacesItem;