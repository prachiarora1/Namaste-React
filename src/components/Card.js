import React from "react";
import ReactDOM from "react-dom/client";
import { CDN_URL } from "../utils/Constants";

const Card = (props) => {
  const styleCard = {
    backgroundColor: "#f0f0f0",
  };
  const { resObj } = props;
  const { name, cloudinaryImageId, cuisines, costForTwo, sla, avgRating } =
    resObj.info;

  console.log(resObj);
  return (
    <div className="card" style={styleCard}>
      <img
        className="foodImage"
        alt="foodImage"
        src={CDN_URL + cloudinaryImageId}
      />
      <h4> {name}</h4>
      <h4> {cuisines.join(", ")}</h4>
      <h4> {avgRating} stars</h4>
      <h4> {costForTwo}</h4>
      <h4> {sla.deliveryTime} mins</h4>
    </div>
  );
};

export default Card;
