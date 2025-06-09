import React from "react";
import { CDN_URL } from "../utils/Constants";

const Card = (props) => {
  const styleCard = {
    backgroundColor: "#f0f0f0",
  };
  const { resObj } = props;
  const { name, cloudinaryImageId, cuisines, costForTwo, sla, avgRating } =
    resObj.info;
  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        className="rounded-lg"
        alt="foodImage"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg"> {name}</h3>
      <h4> {cuisines.join(", ")}</h4>
      <h4> {avgRating} stars</h4>
      <h4> {costForTwo}</h4>
      <h4> {sla.deliveryTime} mins</h4>
    </div>
  );
};

export default Card;
